<div class="blog-right">
    <form action="{{ route('search-b', ['language'=> app()->getLocale()]) }}" class="flex-container align-justify blog-search" method="get">
        <input type="text" placeholder="@lang('global.search')" name="s"/>
        <button type="submit">
            <img src="{{ asset('dist/img/Search.svg') }}" alt="" title=""/>
        </button>
    </form>
    <div class="categories">
        <div class="blog-subtitle">
            @lang('global.categories')
        </div>
        <div class="categories-list">
            @foreach($categories as $category)
            <div>
                <a href="">
                    {{ $category->getTranslatedAttribute('name', \App::getLocale()) }}
                </a>
            </div>
            @endforeach
        </div>
    </div>
    <div class="recent-posts">
        <div class="blog-subtitle">
            @lang('global.last_posts')
        </div>
        @foreach($lastPosts as $item)
            <?php
            $images = json_decode($item->image);
            ?>
        <a href="" class="flex-container align-middle recent-item">
            <div class="recent-item-img">
                <img src="{{ Voyager::image($images[0] ?? '') }}" alt="{{ $item->getTranslatedAttribute('title', \App::getLocale()) }}" title=" {{ $item->getTranslatedAttribute('title', \App::getLocale()) }}" class="img-object-cover"/>
            </div>
            <div class="recent-item-info">
                <div>
                    {{ $item->getTranslatedAttribute('title', \App::getLocale()) }}
                </div>
                <span>{{formatCreatedAt($item->created_at)}}</span>
            </div>
        </a>
        @endforeach

    </div>
    <div class="tags">
        <div class="blog-subtitle">
            @lang('global.tags')
        </div>
        <div class="flex-container flex-row-wrap tag-elements">
            @foreach($post->tags as $item)
            <a href="">
                {{ $item->getTranslatedAttribute('name', \App::getLocale()) }}
            </a>
            @endforeach
{{--            <a href="">--}}
{{--                VITAMIN A--}}
{{--            </a>--}}
{{--            <a href="">--}}
{{--                MILONGA--}}
{{--            </a>--}}
{{--            <a href="">--}}
{{--                MILONGA--}}
{{--            </a>--}}
        </div>
    </div>


    <x-blog-sidebar-insta/>

</div>
