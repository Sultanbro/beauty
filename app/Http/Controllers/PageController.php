<?php

namespace App\Http\Controllers;

use App\Brand;
use App\Models\Blog;
use App\Models\HomeCollection;
use App\Models\InstagramSection;
use App\Models\Partner;
use App\Models\Slider;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use TCG\Voyager\Models\Page;

class PageController extends Controller
{
    public function home()
    {
        $slider = Slider::withTranslation(\App::getLocale())->orderBy('order', 'asc')->get();
        $collections = HomeCollection::withTranslation(\App::getLocale())->orderBy('order', 'asc')->get();
        $partners = Partner::all();
        $blogs = Blog::withTranslation(\App::getLocale())->where('set_home', 1)->get();
        $instagramSection = InstagramSection::orderBy('order', 'asc')->get();
        return view('home', [
            'slider' => $slider,
            'collections' => $collections,
            'partners' => $partners,
            'blogs' => $blogs,
            'instagramSection' => $instagramSection
        ]);
    }

    public function brands(Request $request)
    {
        $filters = explode(",", $request->filter);
        $brands = Brand::withTranslation(\App::getLocale());

        if (is_array($filters) && count($filters) > 0) {
            $brands = $brands->where(function ($query) use ($filters) {
                for ($i = 0; $i < count($filters); $i++) {
                    $query->orwhere('name', 'like', $filters[$i] . '%');
                }
            });
        }
        $brands = $brands
            ->paginate(5);

        return view('brands', ['brands' => $brands]);
    }

    public function brandSingle(Request $request)
    {
        $brand = Brand::with('categories')->withTranslation(\App::getLocale())->where('id', $request->id)->first();
        $previous = Brand::where('id', '<', $brand->id)->orderBy('id', 'desc')->first();
        $next = Brand::where('id', '>', $brand->id)->orderBy('id')->first();


        return view('brand-single', [
            'brand' => $brand,
            'next' => $next,
            'previous' => $previous
        ]);
    }

    public function brandSingleSlug(Request $request)
    {
//        $brand = Brand::withTranslation(\App::getLocale())->where('slug', $request->slug)->first();
        $brand = Brand::with(['categories' => function($q) {
            $q->withTranslation(\App::getLocale());
        }])->withTranslation(\App::getLocale())->where('slug', $request->slug)->first();

        $previous = Brand::where('id', '<', $brand->id)->orderBy('id', 'desc')->first();
        $next = Brand::where('id', '>', $brand->id)->orderBy('id')->first();
//        dd($brand->toArray());

        return view('brand-single', [
            'brand' => $brand,
            'next' => $next,
            'previous' => $previous
        ]);
    }

    public function about()
    {
        $testimonials = Testimonial::withTranslation(\App::getLocale())->get();
        $partners = Partner::all();
        return view('about', [
            'testimonials' => $testimonials,
            'partners' => $partners,
        ]);
    }

    public function contentPage(Request $request)
    {
        $page = Page::withTranslation(\App::getLocale())->where('slug', $request->slug)->first();
        if ($page == null) {
            abort(404);
        }
        return view('content-page', ['page' => $page]);

    }

    public function search(Request $request)
    {

        $searchKey = $request->s;
        $pC = 2;
        $pageResult = Page::whereTranslation('body', 'like', '%' . $searchKey . '%', ['en', 'ru'], true)->withTranslation(\App::getLocale())->take($pC)->paginate($pC);
        $bC = (2 - count($pageResult)) + 2;
        $brandResult = Brand::whereTranslation('description', 'like', '%' . $searchKey . '%', ['en', 'ru'], true)->withTranslation(\App::getLocale())->take($bC)->paginate($bC);
        $blC = 4 - $bC;
        $blogResult = [];
        if($bC > 0) {
            $blogResult = Blog::whereTranslation('body', 'like', '%' . $searchKey . '%', ['en', 'ru'], true)
                ->withTranslation(\App::getLocale())->paginate($bC);
        }
//        dd($bC);
        //   dd($brandResult, $blogResult, $pageResult, $pC, $bC, $blC);
        return view('search', [
            'pageResult' => $pageResult,
            'brandResult' => $brandResult,
            'blogResult' => $blogResult,
        ]);
    }

    public function a() {
        return view('search');
    }

    public function sB(Request $request) {
        $searchKey = $request->s;
        $blogResult = Blog::whereTranslation('body', 'like', '%' . $searchKey . '%', ['en', 'ru'], true)
            ->withTranslation(\App::getLocale())->paginate(5);
//        dd($bC);
        //   dd($brandResult, $blogResult, $pageResult, $pC, $bC, $blC);
        return view('search-blog', [
            'blogResult' => $blogResult,
        ]);
    }

    public function contact(Request $request) {
        $page = Page::withTranslation(\App::getLocale())->where('id', 10)->orWhere('slug', 'obratnaya-svyaz')->first();
        $partners = Partner::all();

        return view('contact', [
            'page' => $page,
            'partners' => $partners
        ]);
    }
}
