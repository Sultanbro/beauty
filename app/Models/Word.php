<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
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
}
