@if ($paginator->hasPages())
    <div class="flex-container {{ $position ?? 'align-center' }} align-middle pagination">
        {{-- Previous Page Link --}}
        @if ($paginator->onFirstPage())
            <a class="disabled" aria-disabled="true" aria-label="@lang('pagination.previous')"> <i class="left chevron icon"></i> </a>
        @else
            <a href="{{ $paginator->previousPageUrl() }}&s={{$search ?? ''}}">
                <img src="{{ asset('dist/img/arrow_prev.png') }}" alt="">
            </a>
        @endif

        {{-- Pagination Elements --}}
        @foreach ($elements as $element)
            {{-- "Three Dots" Separator --}}
            @if (is_string($element))
                <a class="disabled" aria-disabled="true">{{ $element }}</a>
            @endif

            {{-- Array Of Links --}}
            @if (is_array($element))
                @foreach ($element as $page => $url)
                    @if ($page == $paginator->currentPage())
                        <a class=" active" href="{{ $url }}?&={{$search ?? ''}}" aria-current="page">{{ $page }}</a>
                    @else
                        <a  href="{{ $url }}&s={{$search ?? ''}}">{{ $page }}</a>
                    @endif
                @endforeach
            @endif
        @endforeach

        {{-- Next Page Link --}}
        @if ($paginator->hasMorePages())
            <a href="{{ $paginator->nextPageUrl() }}">
                <img src="{{ asset('dist/img/arrow_next.png') }} " alt="">
            </a>
        @else

        @endif
    </div>
@endif
