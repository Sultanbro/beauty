<div class="flex-container align-center partners">
    <div class="row">
        <div class="column small-12">
            <div class="swiper-container partner-carousel">
                <div class="swiper-wrapper">
                     @for($i = 0; $i<count($partners); $i++)
                        <div class="swiper-slide">
                            <div class="partner-item-slide">
                                <div class="flex-container align-center align-middle partner-item">
                                    <a href="{{ $partners[$i]->link }}" target="_blank">
                                        <img src="{{ Voyager::image($partners[$i]->image) }}" alt="">
                                    </a>
                                </div>
                                @if($i != count($partners) - $i - 1)
                              <!--  <div class="flex-container align-center align-middle partner-item">
                                    <a href="{{ $partners[count($partners) - $i - 1]->link ?? ''}}" target="_blank">
                                        <img src="{{ Voyager::image($partners[count($partners) - $i - 1]->image) ?? '' }}" alt="">
                                    </a>
                                </div>-->
                                @endif
                            </div>
                        </div>
                    @endfor
                        <!--
                    <div class="swiper-slide">
                        <div class="partner-item-slide">
                            <div class="flex-container align-center align-middle partner-item">
                                <a href="https://ambeautygroup.ru/ru/brands/sea-level" target="_blank">
                                    <img src="https://ambeautygroup.ru/storage/partners/Sea_Level_Logo.png" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="partner-item-slide">
                            <div class="flex-container align-center align-middle partner-item">
                                <a href="https://ambeautygroup.ru/ru/brands/sea-level" target="_blank">
                                    <img src="https://ambeautygroup.ru/storage/partners/Sea_Level_Logo.png" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="partner-item-slide">
                            <div class="flex-container align-center align-middle partner-item">
                                <a href="https://ambeautygroup.ru/ru/brands/sea-level" target="_blank">
                                    <img src="https://ambeautygroup.ru/storage/partners/Sea_Level_Logo.png" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="partner-item-slide">
                            <div class="flex-container align-center align-middle partner-item">
                                <a href="https://ambeautygroup.ru/ru/brands/sea-level" target="_blank">
                                    <img src="https://ambeautygroup.ru/storage/partners/Sea_Level_Logo.png" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="partner-item-slide">
                            <div class="flex-container align-center align-middle partner-item">
                                <a href="https://ambeautygroup.ru/ru/brands/sea-level" target="_blank">
                                    <img src="https://ambeautygroup.ru/storage/partners/Sea_Level_Logo.png" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="partner-item-slide">
                            <div class="flex-container align-center align-middle partner-item">
                                <a href="https://ambeautygroup.ru/ru/brands/sea-level" target="_blank">
                                    <img src="https://ambeautygroup.ru/storage/partners/Sea_Level_Logo.png" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="partner-item-slide">
                            <div class="flex-container align-center align-middle partner-item">
                                <a href="https://ambeautygroup.ru/ru/brands/sea-level" target="_blank">
                                    <img src="https://ambeautygroup.ru/storage/partners/Sea_Level_Logo.png" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="partner-item-slide">
                            <div class="flex-container align-center align-middle partner-item">
                                <a href="https://ambeautygroup.ru/ru/brands/sea-level" target="_blank">
                                    <img src="https://ambeautygroup.ru/storage/partners/Sea_Level_Logo.png" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="partner-item-slide">
                            <div class="flex-container align-center align-middle partner-item">
                                <a href="https://ambeautygroup.ru/ru/brands/sea-level" target="_blank">
                                    <img src="https://ambeautygroup.ru/storage/partners/Sea_Level_Logo.png" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="partner-item-slide">
                            <div class="flex-container align-center align-middle partner-item">
                                <a href="https://ambeautygroup.ru/ru/brands/sea-level" target="_blank">
                                    <img src="https://ambeautygroup.ru/storage/partners/Sea_Level_Logo.png" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    -->
                </div>
            </div>
            <div class="partners-button-prev">
                <svg data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.11 54.07"><path d="M26.43 54.03a2.47 2.47 0 01-1.75-.73l-24-24a2.47 2.47 0 010-3.49L25.9.72a2.47 2.47 0 013.49 3.49L5.95 27.64l22.22 22.21a2.48 2.48 0 01-1.74 4.18z" fill=""/></svg>
            </div>
            <div class="partners-button-next">
                <svg data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.69 55.12"><path d="M2.51 55.15a2.48 2.48 0 01-1.78-.74 2.51 2.51 0 010-3.55l23.89-23.93L1.97 4.29A2.52 2.52 0 015.53.73l24.42 24.42a2.52 2.52 0 010 3.56L4.29 54.37a2.48 2.48 0 01-1.78.78z" fill=""/></svg>
            </div>
        </div>
    </div>
</div>
