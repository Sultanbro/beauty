<?php

namespace Database\Seeders;

use App\Models\Blog;
use Illuminate\Database\Seeder;
use TCG\Voyager\Models\DataRow;
use TCG\Voyager\Models\DataType;

class BlogCarouselDataRowSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $dataTypeId = DataType::query ()
            ->where ('slug','blogs')
            ->first ()->id;

            DataRow::query ()->upsert([[
                'data_type_id' => $dataTypeId,
                'type'         => 'media_picker',
                'display_name' => 'Carousel Image',
                'required'     => 1,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'order'        => 4,
                'field'        => 'carousel_image',
            ],[
                'data_type_id' => $dataTypeId,
                'type'         => 'text_area',
                'display_name' => 'Carousel Description',
                'required'     => 0,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'order'        => 4,
                'field'        => 'carousel_description',
            ],[
                'data_type_id' => $dataTypeId,
                'type'         => 'text',
                'display_name' => 'Carousel Title',
                'required'     => 0,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'order'        => 4,
                'field'        => 'carousel_title',
            ]], ['field', 'display_name']);
    }
}
