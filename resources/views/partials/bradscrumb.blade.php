<div class="top">
    <div class="row">
        <div class="column small-12">
            <div class="flex-container align-top align-justify top-container">
                <h1>
                    {{ $data[0] }}
                </h1>
                <div class="flex-container align-middle align-right breadcrumbs">
                    <a href="{{ route('home', app()->getLocale()) }}">
                        @lang('menu.home')
                    </a>
                    <a href="{{ route('brands', app()->getLocale()) }}">
                        @lang('menu.brands')
                    </a>
                    <a href="#">
                        {{ $brand->getTranslatedAttribute('name', \App::getLocale()) }}
                    </a>
                </div>
            </div>

        </div>
    </div>
</div>
