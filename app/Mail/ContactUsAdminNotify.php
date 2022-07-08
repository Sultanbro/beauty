<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactUsAdminNotify extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
//        dd($data['dest']);
        $a = '';
        if(isset($this->data['dest']) ) {
            if($this->data['dest'] == 'contact') {
                $a = 'КОНТАКТЫ';
            } else if ($this->data['dest'] == 'info-for-partners') {
                $a = 'ИНФОРМАЦИЯ ДЛЯ БРЕНДОВ';
            } else if ($this->data['dest'] == 'info-for-suppliers') {
                $a = 'ИНФОРМАЦИЯ ДЛЯ КЛИЕНТОВ';
            } else if ($this->data['dest'] == 'marketing-opportunities') {
                $a = 'МАРКЕТИНГОВЫЕ ВОЗМОЖНОСТИ';
            }else if ($this->data['dest'] == 'terms-of-cooperation') {
                $a = 'УСЛОВИЯ СОТРУДНИЧЕСТВА';
            }
        }
//        dd(asset('assets/img/mail-images/' . $this->data['dest'].'/images/image.png'));
        return $this->subject("Contact US form")
            ->view('mail.contact-us-admin-notify', ['data' => $this->data, 'a' => $this->data['dest']]);
    }
}
