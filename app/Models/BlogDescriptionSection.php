<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use TCG\Voyager\Traits\Translatable;

class BlogDescriptionSection extends Model
{
    use HasFactory;
    use Translatable;

    public $timestamps = true;

    protected $fillable = [
        'title',
        'description',
        'image'
    ];

    protected $translatable = [
        'title',
        'description',
    ];

    /**
     * @return BelongsToMany
     */
    public function blogs(): BelongsToMany
    {
        return $this->belongsToMany (Blog::class, 'blog_description_section_blogs', 'blog_id', 'blog_description_section_id')->withTimestamps ('created_at', 'updated_at');
    }
}
