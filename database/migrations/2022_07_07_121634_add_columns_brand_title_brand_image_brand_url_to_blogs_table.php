<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsBrandTitleBrandImageBrandUrlToBlogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('blogs', function (Blueprint $table) {
            $table->string ('brands_first_section_title');
            $table->string ('brand_1_title')->nullable ();
            $table->string ('brand_2_title')->nullable ();
            $table->string ('brand_3_title')->nullable ();
            $table->text ('brand_image');
            $table->string ('brand_1_url')->nullable ();
            $table->string ('brand_2_url')->nullable ();
            $table->string ('brand_3_url')->nullable ();
            $table->string ('brands_second_section_title');
            $table->text ('brand_image_1');
            $table->string ('brand_1_title_1')->nullable ();
            $table->string ('brand_2_title_1')->nullable ();
            $table->string ('brand_3_title_1')->nullable ();
            $table->string ('brand_1_url_1')->nullable ();
            $table->string ('brand_2_url_1')->nullable ();
            $table->string ('brand_3_url_1')->nullable ();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('blogs', function (Blueprint $table) {
            $table->dropColumn ('brands_first_section_title');
            $table->dropColumn ('brand_1_title');
            $table->dropColumn ('brand_2_title');
            $table->dropColumn ('brand_3_title');
            $table->dropColumn ('brand_image');
            $table->dropColumn ('brand_1_url');
            $table->dropColumn ('brand_2_url');
            $table->dropColumn ('brand_3_url');
            $table->dropColumn ('brands_second_section_title');
            $table->dropColumn ('brand_image_1');
            $table->dropColumn ('brand_1_title_1');
            $table->dropColumn ('brand_2_title_1');
            $table->dropColumn ('brand_3_title_1');
            $table->dropColumn ('brand_1_url_1');
            $table->dropColumn ('brand_2_url_1');
            $table->dropColumn ('brand_3_url_1');
        });
    }
}
