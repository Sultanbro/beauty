<?php

namespace App\Http\Controllers;

use App\Models\Slider;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function changeSliderOrdering(Request $request)
    {
        $ids = array();
        foreach ($request->data['ids'] as $key => $value) {
            array_push($ids, $value);
        }

        $posts = Slider::whereIn('id', $request->data['ids'])->get();
        $key = (count($request->data['ids']) * ($request->page - 1)) + 1;
        //   dd($key);
        foreach ($request->data['ids'] as $id) {
            foreach ($posts as $post) {
                if ($id == $post->id) {
                    $post->order = $key;
                    $key++;
                    $post->save();
                    break;
                }

            }
        }
        dd($post->toArray());
        dd($request->all());
    }
}
