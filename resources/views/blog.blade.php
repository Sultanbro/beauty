@extends('layouts.main')

@section('content')


<main class="page brands">
    <div class="top">
        <div class="row">
            <div class="column small-12">
                <div class="flex-container align-top align-justify top-container">
                    <h1>
                        @lang('menu.blog')
                    </h1>
                    <div class="flex-container align-middle align-right breadcrumbs">
                        <a href="{{ route('home', app()->getLocale()) }}">
                            @lang('menu.home')
                        </a>
                        <a href="{{ route('blog', app()->getLocale()) }}">
                            @lang('menu.blog')
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
<div class="filters">
  <div class="filters__inner">
    <div class="flex-container">
      <div class="categories">
          <div class="categories-picked">
            <span>Выберите категорию</span>
          </div>
        <div class="categories-items">
          <form class="" action="index.html" method="post">

        @foreach($categories as $category)
        <div class="category-item">
            <input type="checkbox" name="categories" value="{{ $category->getTranslatedAttribute('name', \App::getLocale()) }}" id="{{ $category->getTranslatedAttribute('name', \App::getLocale()) }}">
              <label for="{{ $category->getTranslatedAttribute('name', \App::getLocale()) }}">{{ $category->getTranslatedAttribute('name', \App::getLocale()) }}</label>
        </div>
        @endforeach
        <div class="filter-submit ">
          <input class="btn btn-dark-grey" type="submit" name="" value="Применить">
        </div>
      </form>
        </div>

      </div>
      <div class="tags categories">
          <div class="categories-picked">
            <span>Теги</span>
          </div>
          <div class="categories-items">
            <form class="" action="index.html" method="post">
        <div class="category-item">
          <input type="checkbox" name="categories" value="tag1" id="tag1">
            <label for="tag1">Тег1</label>

        </div>
        <div class="category-item">
          <input type="checkbox" name="categories" value="tag2" id="tag2">
            <label for="tag2">Тег2</label>
        </div>
        <div class="category-item">
          <input type="checkbox" name="categories" value="tag3" id="tag3">
            <label for="tag3">Тег3</label>
        </div>
        <div class="filter-submit ">
          <input class="btn btn-dark-grey" type="submit" name="" value="Применить">
        </div>
      </form>
        </div>
      </div>
      <div class="search">
        <form action="{{ route('search-b', ['language'=> app()->getLocale()]) }}" class="flex-container align-justify blog-search" method="get">
            <input type="text" placeholder="@lang('global.search')" name="s"/>
            <button type="submit">
                <img src="{{ asset('dist/img/Search.svg') }}" alt="" title=""/>
            </button>
        </form>
      </div>
    </div>
  </div>
</div>
<div class="row align-justify blog-list">
    <div class="column">
        <div class="blog-left">

            @foreach($posts as $item)
                <?php
                  $images = json_decode($item->image);
                ?>
                <div class="blog-item">
                  <div class="left-part">
                    <div class="blog-img @if($item->video != null || $item->video != '') blog-video @endif">
{{--                        <img src="{{ asset('assets/img/blog-img1.jpg') }}" alt="" title=""/>--}}
                        <img src="{{ Voyager::image($images[0] ?? '') }}" alt="" title=""/>
                        @if($item->video != null || $item->video != '')
                            <div class="play-video">
                                <img src="{{ asset('assets/img/play-icon.png') }}" alt="" title=""/>
                            </div>
                            <iframe width="560" height="315" src="{{ $item->video }}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        @endif
                    </div>
                  </div>
                  <div class="right-part">
                    <div class="blog-title">
                        {{ $item->getTranslatedAttribute('title', \App::getLocale()) }}
                    </div>
                    <div class="flex-container flex-row-wrap blog-item-categories">
                    <span>
                        {{formatCreatedAt($item->created_at)}}
{{--                        21 December, 2021--}}
                    </span>
                        <span>
                      |  by American Beauty Group
                    </span>
{{--                        <span>--}}
{{--                        10 Comments--}}
{{--                    </span>--}}
{{--                        <span>--}}
{{--                        World Trends, New Collections--}}
{{--                    </span>--}}
                </div>
                <div class="blog-description">
                    {{ $item->getTranslatedAttribute('description', \App::getLocale()) }}
                </div>
                <div class="flex-container align-middle align-justify blog-item-info">
                    <a class="read-more" href="{{ route('blog.single', ['slug' => $item->slug, 'language' => app()->getLocale()]) }}">
                        @lang('global.read_more')
                    </a>
{{--                    <div class="flex-container align-middle comment-like">--}}
{{--                        <a class="flex-container align-middle" href="">--}}
{{--                            <img src="{{ asset('dist/img/comment-icon.png') }}" alt="" title=""/>--}}
{{--                            <span>--}}
{{--                             21--}}
{{--                         </span>--}}
{{--                        </a>--}}
{{--                        <a class="flex-container align-middle" href="">--}}
{{--                            <img src="{{ asset('dist/img/like-icon.png') }}" alt="" title=""/>--}}
{{--                            <span>--}}
{{--                             21--}}
{{--                         </span>--}}
{{--                        </a>--}}
{{--                        <div class="share-icon">--}}
{{--                            <img src="{{ asset('dist/img/share-icon.png') }}" alt="" title=""/>--}}
{{--                        </div>--}}
{{--                    </div>--}}
                </div>
            </div>
          </div>
            @endforeach

{{--          --}}
{{--            <div class="blog-item">--}}
                  <div class="left-part">
{{--                <div class="blog-img blog-video">--}}
{{--                    <img src="{{ asset('assets/img/blog-img1.jpg') }}" alt="" title=""/>--}}
{{--                    <div class="play-video">--}}
{{--                        <img src="{{ asset('assets/img/play-icon.png') }}" alt="" title=""/>--}}
{{--                    </div>--}}
{{--                </div>--}}
                    </div>
                    <div class="right-part">
{{--                <div class="blog-title">--}}
{{--                    POST WITH image and text--}}
{{--                </div>--}}
{{--                <div class="flex-container flex-row-wrap blog-item-categories">--}}
{{--                <span>--}}
{{--                    21 December, 2021--}}
{{--                </span>--}}
{{--                    <span>--}}
{{--                    by American Beauty Group--}}
{{--                </span>--}}
{{--                    <span>--}}
{{--                    10 Comments--}}
{{--                </span>--}}
{{--                    <span>--}}
{{--                    World Trends, New Collections--}}
{{--                </span>--}}
{{--                </div>--}}
{{--                <div class="blog-description">--}}
{{--                    Luctus et ultrices posuere cubilia Curae. Donec nibh sapien, molestie quis elementum et, dignissim non atino ipsum. Pesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sed mauris lorem. Sed sit ammauris eu purus consectetur blandit sed et lacus. Cras tellus enim, sagittis aer varius faucibus, molestie in dolor. Mauris molliadipisg elit, in vulputate est volutpat vitae. Pellentesque convallis nisl sit amet lacus luctus vel consequat ligula suscipit. Aliquam et metus sed tortor eleifend pretium non id urna. Fusce in augue leo, sed cursus nisl. Nullam vel tellus massa.--}}
{{--                    Vivamus porttitor rutrum libero ac mattis. Aliquam congue malesuada mauris vitae dignissim. Mauris vehicula placerat justo ac cursus. Ut interdum tortor quis elit varius rhoncus. Etiam ut tellus at ligula eleifend malesuada. Aenean et metus sapien.--}}
{{--                </div>--}}
{{--                <div class="flex-container align-middle align-justify blog-item-info">--}}
{{--                    <a class="read-more" href="">--}}
{{--                        read more--}}
{{--                    </a>--}}
{{--                    <div class="flex-container align-middle comment-like">--}}
{{--                        <a class="flex-container align-middle" href="">--}}
{{--                            <img src="{{ asset('dist/img/comment-icon.png') }}" alt="" title=""/>--}}
{{--                            <span>--}}
{{--                             21--}}
{{--                         </span>--}}
{{--                        </a>--}}
{{--                        <a class="flex-container align-middle" href="">--}}
{{--                            <img src="{{ asset('dist/img/like-icon.png') }}" alt="" title=""/>--}}
{{--                            <span>--}}
{{--                             21--}}
{{--                         </span>--}}
{{--                        </a>--}}
{{--                        <div class="share-icon">--}}
{{--                            <img src="{{ asset('dist/img/share-icon.png') }}" alt="" title=""/>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--            </div>--}}
            </div>
                {{ $posts->links('vendor.pagination.semantic-ui', ['position' => 'align-middle']) }}

{{--            <div class="flex-container align-middle pagination">--}}
{{--                <a href="">--}}
{{--                    <img src=" {{ asset('dist/img/arrow_prev.png') }}" alt="">--}}
{{--                </a>--}}
{{--                <a href="" class="active">--}}
{{--                    1--}}
{{--                </a>--}}
{{--                <a href="">--}}
{{--                    2--}}
{{--                </a>--}}
{{--                <a href="">--}}
{{--                    3--}}
{{--                </a>--}}
{{--                <a href="">--}}
{{--                    ...--}}
{{--                </a>--}}
{{--                <a href="">--}}
{{--                    <img src=" {{ asset('dist/img/arrow_next.png') }}" alt="">--}}
{{--                </a>--}}
{{--            </div>--}}
        </div>

    </div>
    <div class="column small-12 medium-flex-child-shrink blog-right-wrapper">
       <!--@include('partials.blog-sidebar', ['categories' => $categories, 'lastPosts' => $lastPosts, 'post' => $posts[0]])-->
    </div>
</div>


@endsection
