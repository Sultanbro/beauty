<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCarouselTitleDescriptionCarouselImageColumnsToBlogs extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('blogs', function (Blueprint $table) {
            $table->text('carousel_image');
            $table->string ('carousel_title')->nullable ();
            $table->text ('carousel_description')->nullable ();
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
            $table->dropColumn ('carousel_image');
            $table->dropColumn ('carousel_title');
            $table->dropColumn ('carousel_description');
        });
    }
}
