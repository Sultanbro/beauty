<?php

namespace App\Providers;

use App\SiteSetting;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\View;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $settings = SiteSetting::withTranslation('en')->get();
//        dd($settings->toArray());
        View::share('settings', $settings);

    }
}
