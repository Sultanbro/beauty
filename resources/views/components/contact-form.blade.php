<div class="get-in-touch-block">
    <div class="get-in-touch-title">
        @lang('infoPages.get_in_touch')
    </div>
    <form action="{{ route('contact.ns') }}" class="contact-form requestPrice">
        @csrf
        <div class="row align-center">
            <div class="column small-12">
                <div class="row">
                    <div class="column small-12 medium-6">
                        <div class="field">
                            <label for="name">
                                @lang('infoPages.name')
                            </label>
                            <input type="text" id="name" placeholder="Ваше имя" name="name">
                        </div>
                    </div>
                    <div class="column small-12 medium-6">
                        <div class="field">
                            <label for="email">
                                @lang('infoPages.email')
                            </label>
                            <input type="email" id="email" placeholder="example@gmail.com" name="email"/>
                        </div>
                    </div>
                    <div class="column small-12 medium-6">
                        <div class="field">
                            <label for="name">
                                @lang('global.region')*
                            </label>
                            <input type="text" id="name" placeholder="Область/город" required name="region">
                        </div>
                    </div>
                    <div class="column small-12 medium-6">
                        <div class="field">
                            <label for="name">
                                @lang('global.phone')*
                            </label>
                            <input type="text" id="name" placeholder="+7" required name="phone">
                        </div>

                    </div>
                    <div class="column small-12 medium-6">
                        <div class="field">
                            <label for="name">
                                @lang('global.website')
                            </label>
                            <input type="text" id="name" placeholder="www.example.com" name="website">
                        </div>
                    </div>
                    <div class="column small-12 medium-6">
                        <div class="field">
                            <label for="name">
                                @lang('global.company')
                            </label>
                            <input type="text" id="name" placeholder="ООО/ИП" name="company">
                        </div>
                    </div>
                    <div class="column small-12 medium-12">
                        <div class="field">
                            <label for="message">
                                @lang('infoPages.message')
                            </label>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder="@lang('infoPages.write_your_message_here')"></textarea>
                        </div>
                    </div>
                    <div class="column small-12 medium-12">
                        <button type="submit" class="btn btn-dark-grey">
                            @lang('infoPages.send_message')
                        </button>
                    </div>
                    <div class="column small-12 medium-12 form-message" style="display: none">
                        Спасибо! <br/>
                        Наши менеджеры свяжутся с Вами в ближайшее время.
                    </div>
                </div>
            </div>
        </div>

    </form>
</div>
