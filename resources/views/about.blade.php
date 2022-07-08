@extends('layouts.main')

@section('content')

    <main class="page">
        <div class="flex-container about-wrapper">
            <div class="about-img">
                <img src="{{ asset('assets/img/about-img.jpg') }}" alt="" title=""/>
                <div class="make-feature text-center">
                    <div class="make-feature-text">
                        @lang('about.make_your_future_with_us')
                    </div>
                    <a href="{{ asset('assets/presentation/American_Beauty_Presentation_Web.pdf') }}" target="_blank" class="btn btn-large btn-dark-grey">
                        @lang('about.download_presentation')
                    </a>
                </div>
            </div>
            <div class="about-info text-center">
                <div class="about-info-inner">
{{--                    <div class="label">--}}
{{--                        --}}{{--                   --}}
{{--                        @lang('about.few_words_about_us')--}}

{{--                    </div>--}}
                    <h2 class="extraLight">
                        @lang('about.who_we_are')
                    </h2>
                    <div class="info-description">
                        @lang('about.who_we_are_text')
                    </div>
                    <div class="flex-container align-center about-info-images">
                        <div>
                            <img src="{{ asset('assets/img/about-img-1.jpg') }}" alt="">
                        </div>
                        <div>
                            <img src="{{ asset('assets/img/about-img-2.jpg') }}" alt="">
                        </div>
                    </div>
                    <div class="small-title">
                        @lang('about.new_level_of_design')
                    </div>
                    <div class="small-description">
                        @lang('about.who_we_are_text_1')
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-container align-top about-wrapper benefits flex-dir-row">
            <div class="about-info align-center">
                <div class="about-info-inner">
{{--                    <div class="label">--}}
{{--                        @lang('about.why_we_are_the_best')--}}
{{--                    </div>--}}
                    <h2 class="extraLight">
                        @lang('about.our_benefits')
                    </h2>
                    <div class="info-description">
                        @lang('about.our_benefits_text')
                    </div>
                    <div class="accordion">
                        <div class="accordion-item close">
                            <div class="accordion-title">
                                @lang('about.question_1')
                                <i></i>
                            </div>
                            <div class="accordion-description">
                                @lang('about.answer_1')
                            </div>
                        </div>
                        <div class="accordion-item close">
                            <div class="accordion-title">
                                @lang('about.question_2')
                                <i></i>
                            </div>
                            <div class="accordion-description">
                                @lang('about.answer_2')
                            </div>
                        </div>
                        <div class="accordion-item close">
                            <div class="accordion-title">
                                @lang('about.question_3')
                                <i></i>
                            </div>
                            <div class="accordion-description">
                                @lang('about.answer_3')
                            </div>
                        </div>
                        <div class="accordion-item close">
                            <div class="accordion-title">
                                @lang('about.question_4')
                                <i></i>
                            </div>
                            <div class="accordion-description">
                                @lang('about.answer_4')
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about-img">
                <div class="swiper-container benefit-carousel">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide text-center benefit-item">
                            <div class="benefit-img">
                                <img src="{{ asset('assets/img/ABG_About_1st_Slide.jpg') }}" alt="" title=""/>
                            </div>
{{--                            <div class="benefit-item-text">--}}
{{--                                Morbi varius pellentesque--}}
{{--                            </div>--}}
                        </div>
                        <div class="swiper-slide text-center benefit-item">
                            <div class="benefit-img">
                                <img src="{{ asset('assets/img/About_block_image_02.jpg') }}" alt="" title=""/>
                            </div>
{{--                            <div class="benefit-item-text">--}}
{{--                                Morbi varius pellentesque--}}
{{--                            </div>--}}
                        </div>
                        <div class="swiper-slide text-center benefit-item">
                            <div class="benefit-img">
                                <img src="{{ asset('assets/img/About_block_image_03.jpg') }}" alt="" title=""/>
                            </div>
{{--                            <div class="benefit-item-text">--}}
{{--                                Morbi varius pellentesque--}}
{{--                            </div>--}}
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>
        <div class="flex-container align-middle cooperation">
            <div class="cooperation-img">
                <img src="{{ asset('assets/img/img-14.jpg') }}" alt="" title="" class="img-object-cover"/>
            </div>
            <div class="cooperation-info">
                <h2 class="extraLight">
                    @lang('about.terms_of_cooperation')
                </h2>
                <div class="info-description">
                    @lang('about.terms_of_cooperation_text')
                </div>
                <a href="{{ route('content.page', ['language'=> app()->getLocale(), 'slug' => 'terms-of-cooperation']) }}" class="btn btn-stroke btn-stroke-dark">
                    @lang('global.read_more')
                </a>
            </div>
        </div>
        <div class="testimonials">
            <div class="testimonials-top text-center">
                <div class="label">
                    @lang('about.what_people_thoght_about_us')
                </div>
                <h2 class="extraLight">
                    @lang('about.testimonials')
                </h2>
                <div class="info-description">
                    @lang('about.testimonials_desc')
                </div>
            </div>
            <div class="swiper-container testimonial-carousel">
                <div class="swiper-wrapper">
                    @foreach($testimonials as $item)
                        <div class="swiper-slide text-center">
                            <div class="slide-in">
                                <div class="testimonial-company">
                                    <img src="https://ambeautygroup.ru/storage/partners/Sea_Level_Logo.png" alt="">
                                </div>
                                <!-- <div class="testimonial-img">
                                    <img src="{{ Voyager::image($item->avatar) }}" alt="{{ $item->name }}"
                                         class="img-object-cover">
                                </div> -->
                                <div class="info-description">
                                    {{ $item->comment }}
                                </div>
                                <div class="testimonial-name">
                                    {{ $item->name }}
                                </div>
                                <div class="testimonial-position">
                                    {{ $item->position }}
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </main>
    @include('partials.partners-section', ['partners' => $partners])


@endsection
