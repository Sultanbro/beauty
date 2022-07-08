<div class="blog-instagram">
    <div class="blog-subtitle">
        INSTAGRAM
    </div>
    <div class="flex-container flex-row-wrap align-justify blog-instagram-images">
        @foreach($insta as $item)
            <div>
                <a href="{{ $item->url }}" target="_blank">
                    <img src="{{ Voyager::image($item->image) }}" alt="" title="" class="img-object-cover"/>
                </a>
            </div>
        @endforeach


    </div>
</div>
