<?php

if(!function_exists('home_collection_title')) {
    function home_collection_title($text) {
        $words = explode(' ', $text);
        $html =  $words[0] . ' ' . '<b>' . Implode(" ", array_slice($words,1)) . '</b> ';
        return $html;
    }
}

if(!function_exists('menu_active')) {
    function menu_active($text) {
        //return request()->segment(1);
        return request()->segment(2) == $text ? "active" : '';
    }
}

if(!function_exists('lang_active')) {
    function lang_active($text) {
        return request()->segment(1) == $text ? "active" : '';
    }
}

if(!function_exists('change_lang')) {
    function change_lang($lang) {
        $segments = request()->segments();
        $segments[0] = $lang;
        return '/' . implode("/", $segments);
    }
}

if(!function_exists('formatSidebarCreatedAt')) {
    function formatCreatedAt($date) {
        return $date->format('d M, Y');
    }
}

if(!function_exists('siteText')) {
    function siteText($name, $settings) {
        foreach ($settings as $setting) {
            if($setting->name == $name) {
                return $setting->getTranslatedAttribute('value', \App::getLocale());
            }
        }
    }
    return '';
}

