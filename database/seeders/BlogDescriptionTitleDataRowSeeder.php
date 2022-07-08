<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use TCG\Voyager\Models\DataRow;
use TCG\Voyager\Models\DataType;

class BlogDescriptionTitleDataRowSeeder extends Seeder
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
                'type'         => 'text',
                'display_name' => 'Description 2 Title',
                'required'     => 0,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'order'        => 4,
                'field'        => 'description_2_title',
            ],[
                'data_type_id' => $dataTypeId,
                'type'         => 'text',
                'display_name' => 'Description 3 Title',
                'required'     => 0,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'order'        => 4,
                'field'        => 'description_3_title',
            ]], ['field', 'display_name']);
    }
}
