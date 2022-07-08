<div class="get-in-touch-block">
    <div class="get-in-touch-title">
        @lang('infoPages.get_in_touch')
    </div>
    <form action="{{ route('contact.s') }}" class="contact-form requestPrice">
        <input type="hidden" name="dest" value="{{ request()->segment(2) }}">
        @csrf
        <div class="row align-center">
            <div class="column small-12">
                <div class="row two-items">
                    <div class="column small-12 medium-6">
                        <div class="field">

                            <input type="text" id="name" placeholder="Ваше имя" name="name">
                        </div>
                    </div>
                    <div class="column small-12 medium-6">
                        <div class="field">
                            <input type="email" id="email" placeholder="example@gmail.com" name="email"/>
                        </div>
                    </div>
                    <div class="column small-12 medium-12">
                        <div class="field">
                            <textarea id="message" cols="30" rows="10" placeholder="@lang('infoPages.write_your_message_here')" name="message"></textarea>
                        </div>
                    </div>
                    <div class="column small-12 medium-12">
                        <button type="submit" class="btn btn-dark-grey">
                            @lang('infoPages.send_message')
                        </button>
                    </div>
                    <div class="column small-12 medium-12 form-message hide" style="display: none">
                        Спасибо! <br/>
                        Наши менеджеры свяжутся с Вами в ближайшее время.
                    </div>
                </div>
            </div>
        </div>
        {!! NoCaptcha::display() !!}

    </form>
</div>


{{--<div class="modal result-modal">--}}
{{--    <div class="close-modal">--}}
{{--        <img src="{{ asset('assets/img/Close_Icon.png') }}" alt="">--}}
{{--        Закрыть--}}
{{--    </div>--}}

{{--    <form>--}}
{{--        <div class="flex-container align-middle align-center">--}}
{{--            <label for="confirm">--}}
{{--                Спасибо!<br/>--}}
{{--                Наши менеджеры свяжутся с Вами в ближайшее время.--}}
{{--            </label>--}}
{{--        </div>--}}
{{--    </form>--}}
{{--</div>--}}
