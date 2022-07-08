<?php

namespace App\View\Components;

use App\Models\InstagramSection;
use Illuminate\View\Component;

class BlogSidebarInsta extends Component
{
    private $insta;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->insta = InstagramSection::orderBy('id', 'desc')->take(6)->get();
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.blog-sidebar-insta', ['insta' => $this->insta]);
    }
}
