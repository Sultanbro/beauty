<?php

namespace App\View\Components;

use App\Brand;
use Illuminate\View\Component;

class PriceModal extends Component
{
    /**
     * @var Brand[]|\Illuminate\Database\Eloquent\Collection
     */
    private $brands;
    private $slug;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($slug)
    {
        $this->slug = $slug;
        $this->brands = Brand::all();
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.price-modal', ['brands' => $this->brands, 'slug' => $this->slug]);
    }
}
