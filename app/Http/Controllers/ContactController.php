<?php

namespace App\Http\Controllers;

use App\Mail\ContactUsAdminNotify;
use App\Mail\ContactUsAdminNotifyShort;
use App\Mail\RequestPriceList;
use App\Mail\SubscribersAdminNotification;
use App\Models\Subscribers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    protected $email = ["ambeautygroup@yandex.ru",
        "arshinova@ambeautygroup.ru",
        "laputina@ambeautygroup.ru"];

    public function requestPriceList(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'g-recaptcha-response' => 'required|captcha'
        ]);
        Mail::to($this->email)->send(new RequestPriceList($request->all()));

        $a = Subscribers::where('email', $request->email);
        if ($a == null) {
            Subscribers::create([
                'email' => $request->email
            ]);
        }
        dd($request->all());
    }

    public function subscribe(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'g-recaptcha-response' => 'required|captcha'
        ]);

        Mail::to($this->email)->send(new SubscribersAdminNotification($request->all()));
        dd($request->all());
    }

    public function contactUS(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'g-recaptcha-response' => 'required|captcha'
        ]);
        Mail::to($this->email)->send(new ContactUsAdminNotify($request->all()));
        dd($request->all());
    }

    public function contactUSN(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'g-recaptcha-response' => 'required|captcha'
        ]);
        Mail::to($this->email)->send(new ContactUsAdminNotifyShort($request->all()));
        dd($request->all());
    }
}
