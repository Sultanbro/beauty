<?php

namespace App\Models;

use App\Author;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use TCG\Voyager\Traits\Translatable;

class Blog extends Model
{
    use HasFactory;
    use Translatable;

    public $timestamps = true;

    protected $fillable = [
        'description_2_title',
        'description_2',
        'description_3_title',
        'description_3',
        'carousel_image',
        'carousel_title',
        'carousel_description',
        'brands_first_section_title',
        'brand_1_title',
        'brand_2_title',
        'brand_3_title',
        'brand_image',
        'brand_1_url',
        'brand_2_url',
        'brand_3_url',
        'brands_second_section_title',
        'brand_1_title_1',
        'brand_2_title_1',
        'brand_3_title_1',
        'brand_1_image',
        'brand_1_url_1',
        'brand_2_url_1',
        'brand_3_url_1',
    ];

    protected $translatable = [
        'title',
        'description',
        'slug',
        'body',
        'description_2_title',
        'description_2',
        'description_3_title',
        'description_3',
        'carousel_title',
        'carousel_description',

        'brands_first_section_title',
        'brand_1_title',
        'brand_2_title',
        'brand_3_title',
        'brands_second_section_title',
        'brand_1_title_1',
        'brand_2_title_1',
        'brand_3_title_1',
    ];

    public function categories()
    {
            return $this->belongsToMany(Category::class, 'blog_categories',
            'blog_id', 'category_id')->withTimestamps();
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'blog_tags',
            'blog_id', 'tag_id')->withTimestamps();
    }

    public function author()
    {
        return $this->belongsTo(Author::class, 'author', 'id');
    }

    /**
     * @return BelongsToMany
     */
    public function blogDescriptionSections(): BelongsToMany
    {
        return $this->belongsToMany (BlogDescriptionSection::class, 'blog_description_section_blogs', 'blog_id', 'blog_description_section_id')->withTimestamps ('created_at', 'updated_at');
    }

    /**
     * @return BelongsToMany
     */
    public function wingedWords(): BelongsToMany
    {
        return $this->belongsToMany (Word::class, 'blog_words', 'blog_id', 'word_id')->withTimestamps ('created_at', 'updated_at');
    }
}
