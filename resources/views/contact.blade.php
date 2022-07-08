@extends('layouts.main')

@section('content')

    <div class="flex-container align-center align-middle contact-cover">
        <div class="side-column">
            <div class=" text-center">
                <div class="flex-container flex-dir-column side-socials hide-for-mobile">
{{--                    <a href="">--}}
{{--                        <img src="{{ asset('dist/img/fb-icon.png') }}" alt="" title=""/>--}}
{{--                    </a>--}}
{{--                    <a href="">--}}
{{--                        <img src="{{ asset('dist/img/inst-icon.png') }}" alt="" title=""/>--}}
{{--                    </a>--}}
                    <a href="https://www.facebook.com/ambeautygroup" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9px" height="16px" viewBox="0 0 147 273" version="1.1">
                            <title>Fill 166</title>
                            <g id="Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Artboard" transform="translate(-217.000000, -83.000000)" fill="#555">
                                    <path d="M353.969362,236.815863 L361.536388,187.586199 L314.206129,187.586199 L314.206129,155.641889 C314.206129,142.173972 320.816757,129.049625 342.018204,129.049625 L363.541,129.049625 L363.541,87.1418048 C363.541,87.1418048 344.007513,83.813 325.33861,83.813 C286.355799,83.813 260.877338,107.389489 260.877338,150.068431 L260.877338,187.586199 L217.541,187.586199 L217.541,236.815863 L260.877338,236.815863 L260.877338,355.813 L314.206129,355.813 L314.206129,236.815863 L353.969362,236.815863" id="Fill-166"/>
                                </g>
                            </g>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/ambeautygroup_ru/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 274 274" version="1.1">
                            <title>Group</title>
                            <g id="Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Artboard" transform="translate(-154.000000, -83.000000)" fill="#555">
                                    <g id="Group" transform="translate(154.813000, 83.813500)">
                                        <path d="M207.996169,49 C199.163036,49 192,56.1630357 192,64.9961695 C192,73.8369643 199.163036,81 207.996169,81 C216.836964,81 224,73.8369643 224,64.9961695 C224,56.1630357 216.836964,49 207.996169,49" id="Fill-163"/>
                                        <path d="M137.187,179.1865 C113.47579,179.1865 94.187,159.89771 94.187,136.178849 C94.187,112.47529 113.47579,93.1865 137.187,93.1865 C160.89821,93.1865 180.187,112.47529 180.187,136.178849 C180.187,159.89771 160.89821,179.1865 137.187,179.1865 Z M137.183182,69.1865 C100.237151,69.1865 70.187,99.2442877 70.187,136.182682 C70.187,173.128712 100.237151,203.1865 137.183182,203.1865 C174.129212,203.1865 204.187,173.128712 204.187,136.182682 C204.187,99.2442877 174.129212,69.1865 137.183182,69.1865 L137.183182,69.1865 Z" id="Fill-164"/>
                                        <path d="M81.3329046,25.1865 C50.3716627,25.1865 25.187,50.3788037 25.187,81.3476866 L25.187,190.032954 C25.187,220.994196 50.3716627,246.1865 81.3329046,246.1865 L190.018172,246.1865 C220.987055,246.1865 246.187,220.994196 246.187,190.032954 L246.187,81.3476866 C246.187,50.3788037 220.987055,25.1865 190.018172,25.1865 L81.3329046,25.1865 Z M190.478585,272.1865 L81.8801455,272.1865 C36.8343924,272.1865 0.187,235.532502 0.187,190.488013 L0.187,81.8926218 C0.187,36.8404984 36.8343924,0.1865 81.8801455,0.1865 L190.478585,0.1865 C235.524338,0.1865 272.187,36.8404984 272.187,81.8926218 L272.187,190.488013 C272.187,235.532502 235.524338,272.1865 190.478585,272.1865 L190.478585,272.1865 Z" id="Fill-165"/>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="map" id="map">

        </div>
      <!--  <div class="contact-wrap">
            <div class="map">
                <img src="{{ Voyager::image($page->image) }}" alt="" class="img-object-cover"/>
            </div>
        <div class="contact-info">
                <div class="row align-spaced">
                    <div class="column">
                        <div class="flex-container align-middle align-center contact-item">
                            <img src="{{ asset('dist/img/address.svg') }}" alt=""/>
                            <div>
                                <span>
                                    @lang('global.address')
                                </span>
                                <div>
                                    {{ siteText('address', $settings) }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="flex-container align-middle align-center contact-item">
                            <img src="{{ asset('dist/img/email.svg') }}" alt=""/>
                            <div>
                                <span>
                                    @lang('global.email')
                                </span>
                                <div>
                                    {{ siteText('email', $settings) }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="flex-container align-middle align-center contact-item">
                            <img src="{{ asset('dist/img/tel.svg') }}" alt=""/>
                            <div>
                                <span>
                                    @lang('global.call_us')
                                </span>
                                <div>
                                    {{ siteText('phone', $settings) }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>-->
        <div class="side-column"></div>
    </div>

    <div class="contact-main hide-in-mobile">
      <h1 class="contact-title ">
          {{ $page->getTranslatedAttribute('title', \App::getLocale()) }}
      </h1>
    </div>
    <div class="get-in-touch flex-container">
        <div class="info-column">
            <div class="">
                <div class="text ">
                    <div class="contact-description hide-in-mobile">
                        {{ $page->getTranslatedAttribute('excerpt', \App::getLocale()) }}
                    </div>
                    <div class="contact__information">
                      <a class="flex-container align-middle  contact-item" href="https://www.google.com/maps/place/Sadovnicheskaya+St,+11,+%D1%81%D1%82%D1%80.+12,+Moskva,+Russia,+115035/data=!4m2!3m1!1s0x46b54af9a7cfe4cb:0xc6d4becde7abfcc6?sa=X&ved=2ahUKEwjUtcCrjOL1AhWVzosKHROCAIgQ8gF6BAgKEAE" target="_blank">
                          <img src="{{ asset('dist/img/location.svg') }}" alt=""/ class="mob">
                          <img src="{{ asset('dist/img/location-desk.svg') }}" alt=""/ class="desk">
                          <div>
                              <div>
                                  Россия, г. Москва, ул. Садовническая, д 11, стр. 12
                              </div>
                          </div>
                      </a>
                      <div class="contact__item phone">
                        <a class="flex-container align-middle  contact-item" href="tel:{{ siteText('phone', $settings) }}" target="_blank">
                            <img src="{{ asset('dist/img/call.svg') }}" alt=""/ class="mob">
                            <img src="{{ asset('dist/img/call-desk.svg') }}" alt=""/ class="desk">
                            <div>
                                <div>
                                    {{ siteText('phone', $settings) }}
                                </div>
                            </div>
                        </a>
                      </div>
                      <a class="flex-container align-middle  contact-item" href="mailto:sales@ambeautygroup.ru" target="_blank">
                          <img src="{{ asset('dist/img/mail.svg') }}" alt=""/ class="mob">
                          <img src="{{ asset('dist/img/mail-desk.svg') }}" alt=""/ class="desk">

                          <div>
                              <div>
                                sales@ambeautygroup.ru
                              </div>
                          </div>
                      </a>
                    </div>

                </div>
            </div>
        </div>
        <div class="hide-in-desktop contact-info">
          <h1 class="contact-title">
              {{ $page->getTranslatedAttribute('title', \App::getLocale()) }}
          </h1>
          <div class="contact-description">
              {{ $page->getTranslatedAttribute('excerpt', \App::getLocale()) }}
          </div>
        </div>
        <form action="{{ route('contact.s') }}" class="contact-form requestPrice">
            <input type="hidden" name="dest" value="{{Request::segment(2)}}">

            @csrf
            <div class="align-center">
                <div class="column small-12 form-column">
                    <div class="row">
                        <div class="column small-12 medium-12">
                            <div class="field">
                                <input type="text" id="name" placeholder="Ваше имя*" required name="name">
                            </div>
                        </div>
                        <div class="column small-12 medium-12">
                            <div class="field">
                                <input type="email" id="email" placeholder="Email*" required name="email"/>
                            </div>
                        </div>

                        <div class="column small-12 medium-12">
                            <div class="field">
                                <textarea name="message" id="message" cols="30" rows="10" placeholder="Ваше сообщение"></textarea>
                            </div>
                        </div>
                        <div class="column small-12 medium-12">
                            <button type="submit" class="btn btn-full btn-large btn-contact">
                                Отправить
                            </button>
                        </div>
                        <div class="column small-12 medium-12 form-message" style="display: none">
                            Спасибо! <br/>
                            Наши менеджеры свяжутся с Вами в ближайшее время.
                        </div>
                    </div>
                </div>
            </div>
            {!! NoCaptcha::display() !!}

        </form>
    </div>
    <script async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCr75sy0FTttJ2CdtNL1C4T4AtWfLjNwq4&callback=initMap">
    </script>
    <script type="text/javascript">
    let map;
    var stylers = [
];
var iconBase = 'https://americanbeauty.online/ru';

  function initMap() {
    const uluru = { lat: 55.7472689, lng: 37.6302109 };
    const markerIcons = '../dist/img/marker.svg';

  const  map = new google.maps.Map(document.getElementById("map"), {
      center: uluru,
      zoom: 18,
      styles: stylers
    });

  const marker = new google.maps.Marker({
    icon: markerIcons,
    position: uluru,
    map: map,
  });
}
    </script>
  @include('partials.partners-section', ['partners' => $partners])

@endsection
