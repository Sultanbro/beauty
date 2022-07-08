<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use TCG\Voyager\Models\Menu;
use TCG\Voyager\Models\MenuItem;

class MenuItemWingedWordTableSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     *
     * @return void
     */
    public function run ()
    {
        $menu = Menu::where ('name', 'admin')->firstOrFail ();

        $menuItem = MenuItem::firstOrNew ([
             'menu_id' => $menu->id,
             'title' => 'Words',
             'url' => '',
             'route' => 'voyager.words.index',
        ]);

        if (!$menuItem->exists) {
            $menuItem->fill ([
                'target' => '_self',
                'icon_class' => 'voyager-edit',
                'color' => null,
                'parent_id' => null,
                'order' => 15,
            ])->save ();
        }
    }
}
