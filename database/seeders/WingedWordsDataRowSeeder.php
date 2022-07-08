<?php

namespace Database\Seeders;

use App\Models\Blog;
use Illuminate\Database\Seeder;
use TCG\Voyager\Models\DataRow;
use TCG\Voyager\Models\DataType;

class WingedWordsDataRowSeeder extends Seeder
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
                'type'         => 'image',
                'display_name' => 'Image',
                'required'     => 1,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'order'        => 3,
                'field'        => 'word_image',
            ],[
                'data_type_id' => $dataTypeId,
                'type'         => 'text',
                'display_name' => 'Name',
                'required'     => 1,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'order'        => 1,
                'field'        => 'name',
            ],[
                'data_type_id' => $dataTypeId,
                'type'         => 'text_area',
                'display_name' => 'Text',
                'required'     => 1,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'order'        => 2,
                'field'        => 'text',
            ]], ['field', 'display_name']);
    }
}
