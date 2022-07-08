@if ($paginator->hasPages())
    <div class="flex-container {{ $position ?? 'align-center' }} align-middle pagination">
        {{-- Previous Page Link --}}
        @if ($paginator->onFirstPage())
            <a class="disabled" aria-disabled="true" aria-label="@lang('pagination.previous')"> <i
                    class="left chevron icon"></i> </a>
        @else
            <a href="{{ $paginator->previousPageUrl() }}">
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
                <?php if($paginator->currentPage() > 1 && count($element) > 6) : ?>
                    <a href="{{ $element[1] }}">{{ 1 }}</a>
                    <span> ... </span>
                <?php endif; ?>

                @foreach ($element as $page => $url)
                    <?php if(($paginator->currentPage() > $page) && (count($element) - $page) >=6) : ?>
                        @continue;
                    <?php endif; ?>

                    @if ($page == $paginator->currentPage())
                        <a class=" active" href="{{ $url }}" aria-current="page">{{ $page }}</a>
                    @else
                        <a href="{{ $url }}">{{ $page }}</a>
                    @endif

                    <?php if($page > ($paginator->currentPage() + 3)) : ?>
                        @break;
                    <?php endif; ?>

                @endforeach

                <?php if($paginator->currentPage() < (count($element) - 4)) : ?>
                    <?php if(count($element)-5 != $paginator->currentPage()) : ?>
                        <span> ... </span>
                    <?php endif; ?>
                    <a href="{{ $element[count($element)] }}">{{ count($element) }}</a>
                <?php endif; ?>

            @endif
        @endforeach

        {{-- Next Page Link --}}
        @if ($paginator->hasMorePages())
            <a href="{{ $paginator->nextPageUrl() }}" class="pagination__next-arrow">
                <img src="{{ asset('dist/img/arrow_next.png') }} " alt="">
            </a>
        @else

        @endif
    </div>
@endif
