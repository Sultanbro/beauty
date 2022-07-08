@if ($paginator->hasPages())
<div class="flex-container align-center align-middle pagination">
    <a href="">
        <img src="dist/img/arrow_prev.png" alt="">
    </a>
    <a href="" class="active">
        1
    </a>
    <a href="">
        2
    </a>
    <a href="">
        3
    </a>
    <a href="">
        ...
    </a>
    <a href="">
        <img src="dist/img/arrow_next.png" alt="">
    </a>
</div>

            {{-- Previous Page Link --}}
            @if ($paginator->onFirstPage())
                <li class="disabled" aria-disabled="true"><span>@lang('pagination.previous')</span></li>
            @else
                <li><a href="{{ $paginator->previousPageUrl() }}" rel="prev">@lang('pagination.previous')</a></li>
            @endif

            {{-- Next Page Link --}}
            @if ($paginator->hasMorePages())
                <li><a href="{{ $paginator->nextPageUrl() }}" rel="next">@lang('pagination.next')</a></li>
            @else
                <li class="disabled" aria-disabled="true"><span>@lang('pagination.next')</span></li>
            @endif

@endif
