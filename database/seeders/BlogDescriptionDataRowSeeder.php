<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use TCG\Voyager\Models\DataRow;
use TCG\Voyager\Models\DataType;

class BlogDescriptionDataRowSeeder extends Seeder
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
                'type'         => 'rich_text_box',
                'display_name' => 'Description 2',
                'required'     => 1,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'order'        => 4,
                'field'        => 'description_2',
            ],[
                'data_type_id' => $dataTypeId,
                'type'         => 'rich_text_box',
                'display_name' => 'Description 3',
                'required'     => 1,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'order'        => 4,
                'field'        => 'description_3',
            ]], ['field', 'display_name']);
    }
}
