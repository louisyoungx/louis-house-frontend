<template>
    <nav class="fh5co-nav" role="navigation">
        <!-- <div class="top-menu"> -->
        <div class="container">
            <div class="row">
                <div class="col-xs-12 text-center logo-wrap">
                    <div id="fh5co-logo"><a href="/">Louis<span>.</span></a></div>
                </div>
                <div class="col-xs-12 text-center menu-1 menu-wrap " style="display: none">
                    <ul class="songti">
                        <li class="active"><a href="/">主页</a></li>
                        <li class="has-dropdown">
                            <a href="/IT">IT</a>
                            <ul class="dropdown">
                                <li><a href="/IT/Web">Web</a></li>
                                <li><a href="/IT/Python">Python</a></li>
                                <li><a href="/IT/Linux">Linux</a></li>
                                <li><a href="/IT/Projects">Projects</a></li>
                            </ul>
                        </li>
                        <li class="has-dropdown">
                            <a href="/Gallery">画廊</a>
                            <ul class="dropdown">
                                <li><a href="/Gallery/Life">生活</a></li>
                                <li><a href="/Gallery/Food">美食</a></li>
                                <li><a href="/Gallery/Scenery">风景</a></li>
                            </ul>
                        </li>
                        <li><a href="/Article">文章</a></li>
                        <li><a href="/About">关于</a></li>
                        <li><a href="/Contact">联系</a></li>
                    </ul>
                </div>
            </div>

        </div>
        <!-- </div> -->
    </nav>

    <div id="fh5co-featured-menu" class="fh5co-section">
        <div class="louis-content-main">
            <div class="louis-content-chi">123</div>
            <div class="louis-content-chi">123</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Content"
    }
</script>

<style scoped>

</style>
