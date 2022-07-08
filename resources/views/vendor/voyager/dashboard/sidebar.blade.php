
<div class="side-menu sidebar-inverse">
    <nav class="navbar navbar-default" role="navigation">
        <div class="side-menu-container">

            <div class="panel widget center bgimage"
                 style="background-image:url({{ Voyager::image( Voyager::setting('admin.bg_image'), voyager_asset('images/bg.jpg') ) }}); background-size: cover; background-position: 0px;">
                <div class="dimmer"></div>
                <div class="panel-content">
                    <img src="{{ $user_avatar }}" class="avatar" alt="{{ Auth::user()->name }} avatar">
                    <h4>{{ ucwords(Auth::user()->name) }}</h4>
                    <p>{{ Auth::user()->email }}</p>

                    <a href="{{ route('voyager.profile') }}"
                       class="btn btn-primary">{{ __('voyager::generic.profile') }}</a>
                    <div style="clear:both"></div>
                </div>
            </div>

        </div>
        {{--        <div id="adminmenu">--}}
        {{--            <admin-menu :items="{{ menu('admin', '_json') }}"></admin-menu>--}}
        {{--        </div>--}}
        <div id="adminmenu">
            <ul class="nav navbar-nav">
                <li class="active"><a target="_self" href="/admin"><span class="title">Dashboard</span></a> <!----></li>
                <li class=""><a target="_self" href="/admin/users"><span class="title">Users</span></a> <!----></li>
                <li class=""><a target="_self" href="/admin/media"> <span class="title">Media</span></a> <!----></li>
                <li class=""><a target="_self" href="/admin/posts"><span class="title">Posts</span></a> <!----></li>
                <li class=""><a target="_self" href="/admin/pages"><span class="title">Pages</span></a> <!----></li>
                <li class=""><a target="_self" href="/admin/categories"><span class="title">Categories</span></a> <!---->
                </li>

                <li class=""><a target="_self" href="/admin/brands"><span class="title">Brands</span></a> <!----></li>
                <li class=""><a target="_self" href="/admin/sliders"><span class="title">Slider</span></a> <!----></li>
                <li class=""><a target="_self" href="/admin/home-collections"><span class="title">Home Collection</span></a> <!---->
                </li>
                <li class=""><a target="_self" href="/admin/testimonials"><span class="title">Testimonials</span></a> <!----></li>
                <li class=""><a target="_self" href="/admin/partners"><span class="title">Partners</span></a> <!----></li>
                <li class=""><a target="_self" href="/admin/blogs"><span class="title">Blog</span></a> <!----></li>
                <li class=""><a target="_self" href="/admin/instagram-sections"><span class="title">Instagram Sections</span></a>
                    <!----></li>
                <li class=""><a target="_self" href="/admin/tags"><span class="title">Tags</span></a> <!----></li>
                <li class=""><a target="_self" href="/admin/words"><span class="title">Words</span></a> <!----></li>
                <li class=""><a target="_self" href="/admin/authors"><span class="title">Authors</span></a> <!----></li>
                <li class=""><a target="_self" href="/admin/site-settings"><span class="title">Site Settings</span></a> <!----></li>
                <li class=""><a target="_self" href="{{ route ('voyager.database.index') }}"><span class="title">Database</span></a> <!----></li>
                <li class=""><a target="_self" href="{{ route ('voyager.bread.index') }}"><span class="title">Bread</span></a> <!----></li>
            </ul>
        </div>
    </nav>
</div>
