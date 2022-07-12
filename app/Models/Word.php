<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use TCG\Voyager\Traits\Translatable;

class Word extends Model
{
    use HasFactory;
    use Translatable;

    protected $fillable = [
        'word_image',
        'name',
        'text'
    ];

    protected $translatable = [
        'name',
        'text'
    ];

    /**
     * @return BelongsToMany
     */
    public function blogs(): BelongsToMany
    {
        return $this->belongsToMany (Blog::class, 'blog_description_section_blogs', 'blog_id', 'word_id')->withTimestamps ('created_at', 'updated_at');
    }
}
