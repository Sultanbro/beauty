<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Localization
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
      //  dd($request->lang);
        if (in_array($request->language, config('app.locales'))) {
            \App::setLocale($request->language);
        } else {
            abort(404);
        }
        
        return $next($request);
    }
}
