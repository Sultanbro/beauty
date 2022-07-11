<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogDescriptionSectionBlog extends Model
{
    use HasFactory;

    public $timestamps = true;

    protected $fillable = [
        'blog_description_section_id',
        'blog_id',
    ];
}
