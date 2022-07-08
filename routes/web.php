<?php

use App\Http\Controllers\WingedWordsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
    Route::post('/change-slider-ordering', [App\Http\Controllers\AdminController::class, "changeSliderOrdering"]);
});

Route::redirect('/', '/ru');

Route::get('/terms', function () {
    return view('content-page');
})->name('content.page');

Route::group(['prefix' => '{language}', 'middleware' => ['localization']], function() {

    Route::get('/', [App\Http\Controllers\PageController::class, "home"])->name('home');
    Route::get('/brands', [App\Http\Controllers\PageController::class, "brands"])->name('brands');
    Route::get('/brands/{slug}', [App\Http\Controllers\PageController::class, "brandSingleSlug"])->name('brand.single.slug');
    Route::get('/brands/{id}', [App\Http\Controllers\PageController::class, "brandSingle"])->name('brand.single');


    Route::get('/about', [App\Http\Controllers\PageController::class, "about"])->name('about');
    Route::get('/blog', [App\Http\Controllers\BlogController::class, "blog"])->name('blog');
    Route::get('/blog/{slug}', [App\Http\Controllers\BlogController::class, "blogSingle"])->name('blog.single');

    Route::get('/contact', [App\Http\Controllers\PageController::class, "contact"])->name('contact');

    Route::get('/search', [App\Http\Controllers\PageController::class, "search"])->name('search');

    Route::get('/search-blog', [App\Http\Controllers\PageController::class, "sB"])->name('search-b');


    Route::get('/{slug}', [App\Http\Controllers\PageController::class, "contentPage"])->name('content.page');

});

Route::post('/request-price-list', [App\Http\Controllers\ContactController::class, "requestPriceList"])->name('request.price.list');
Route::post('/subscribe', [App\Http\Controllers\ContactController::class, "subscribe"])->name('subscribe');
Route::post('/contact-s', [App\Http\Controllers\ContactController::class, "contactUS"])->name('contact.s');
Route::post('/contact-ns', [App\Http\Controllers\ContactController::class, "contactUSN"])->name('contact.ns');



Route::get('/brand-single', function () {
    return view('brand-single');
})->name('brand.singlse');



