<?php

namespace App\Http\Controllers;

use App\Author;
use App\Brand;
use App\Models\Blog;
use App\Models\BlogDescriptionSection;
use App\Models\Category;
use App\Models\Word;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function blog(Request $request) {
        $locale = \App::getLocale();

        $posts = Blog::withTranslation(\App::getLocale())->orderBy('created_at', 'desc')
            ->with(['categories' => function($q) use ($locale) {
                $q->withTranslation($locale);
            }, 'tags' => function($q) use ($locale) {
                $q->withTranslation($locale);
            }, 'author' => function($q) use ($locale) {
                $q->withTranslation($locale);
            }])->paginate(5);
        $categories = Category::withTranslation(\App::getLocale())->get();
        $lastPosts = Blog::orderBy('id', 'asc')->take(3)->get();

        return view('blog', [
            'posts' => $posts,
            'categories' => $categories,
            'lastPosts' => $lastPosts
        ]);
    }

    public function blogSingle(Request $request) {
        $locale = \App::getLocale();
        $post = Blog::withTranslation(\App::getLocale())->where('slug', $request->slug)
            ->with(['categories' => function($q) use ($locale) {
                $q->withTranslation($locale);
            }, 'tags' => function($q) use ($locale) {
                $q->withTranslation($locale);
            }, 'author' => function($q) use ($locale) {
                $q->withTranslation($locale);
            }, 'blogDescriptionSections' => function($q) use($locale) {
                $q->withTranslation($locale);
            }, 'wingedWords' => function($q) use($locale) {
                $q->withTranslation($locale);
            }])->first();
        $categories = Category::withTranslation(\App::getLocale())->get();

        $previous = Blog::where('id', '<', $post->id)->orderBy('id', 'desc')->first();
        $next = Blog::where('id', '>', $post->id)->orderBy('id')->first();
        $lastPosts = Blog::orderBy('id', 'asc')->take(3)->get();
        $wingedWords = Word::withTranslation(\App::getLocale())->orderBy('id', 'desc')->get();

        $related = Blog::with(['author' => function($q) use ($locale) {
            $q->withTranslation($locale);
        }])
             ->whereHas('tags', function ($q) use ($post) {
             return $q->whereIn('name', $post->tags->pluck('name'));
         })
            ->inRandomOrder()
            ->limit(3)
            ->get();

        $author = Author::where('id', $post->author)->first();

        return view('blog-single', [
            'post' => $post,
            'categories' => $categories,
            'next' => $next,
            'previous' => $previous,
            'lastPosts' => $lastPosts,
            'author' => $author,
            'related' => $related,
            'wingedWords' => $wingedWords,
        ]);
    }

}

