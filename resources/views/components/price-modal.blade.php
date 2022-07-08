<div class="modal price-modal">
    <div class="close-modal">
      <img src="{{ asset('assets/img/close-popup.svg') }}" alt="">
    </div>
    <div class="price-modal-title text-center">
        запросить прайс-лист
    </div>
    <form action="{{ route('request.price.list') }}" class="requestPrice" method="post">
        @csrf
        <div class="field">
            <select name="subject" id="" required>
                <option value="">
                    Выберите интересующий Вас бренд
                </option>
                @foreach($brands as $brand)
                    <option value="{{$brand->name}}" @if(isset($slug) && $slug == $brand->slug) selected @endif>
                        {{ $brand->name }}
                    </option>
                @endforeach
            </select>
        </div>
        <div class="flex-container field-wrapper">
            <div class="field">
                <input type="text" placeholder="Как вас зовут?*" name="name" required/>
            </div>
            <div class="field">
                <input type="text" placeholder="Регион*" name="region" required/>
            </div>
        </div>
        <div class="flex-container field-wrapper">
            <div class="field">
                <input type="text" placeholder="Номер телефона*" name="phone" required/>
            </div>
            <div class="field">
                <input type="email" placeholder="E–mail*" name="email" required/>
            </div>
        </div>
        <div class="flex-container field-wrapper">
            <div class="field">
                <input type="text" placeholder="Ваша компания" name="company"/>
            </div>
            <div class="field">
                <input type="text" placeholder="Ваш веб-сайт" name="website"/>
            </div>
        </div>
        <div class="flex-container align-middle confirm-wrap">
            <input type="checkbox" id="confirm" required/>
            <label for="confirm">
                Согласен(на) с обработкой моих данных
            </label>
        </div>

        <div class="text-center">
            <button type="submit" class="btn btn-dark-grey">
                отправить запрос
            </button>
        </div>

        <div class="text-center form-message" style="display: none">
            Спасибо!<br/>
            Наши менеджеры свяжутся с Вами в ближайшее время.
        </div>
        {!! NoCaptcha::display() !!}

    </form>
</div>
