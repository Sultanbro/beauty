<?php

namespace App;

use App\Models\Blog;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use TCG\Voyager\Traits\Translatable;

class Brand extends Model
{
    use HasFactory;
    use Translatable;

    protected $translatable = [
        'name',
        'description',
        'listing_description',
        'slug'
    ];

    protected $casts = [
        'images' => 'array'
    ];

    public function setArrayValueAttribute($value)
    {
        $this->attributes['array_value'] = json_encode($value);
    }

    public function getArrayValueAttribute($value)
    {
        return collect(json_decode($value));
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'brand_categories',
            'brand_id', 'category_id');
    }
}
