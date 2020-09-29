<template>


  <nav class="fh5co-nav" role="navigation">
    <!-- <div class="top-menu"> -->
    <div class="container">
      <div class="row">
        <div class="col-xs-12 text-center logo-wrap">
          <div id="fh5co-logo"><a href="/">Louis<span>.</span></a></div>
        </div>
        <div class="col-xs-12 text-center menu-1 menu-wrap ">
          <ul class="songti">
            <li><a href="/">主页</a></li>
            <li class="has-dropdown">
              <a href="/IT">IT</a>
              <ul class="dropdown">
                <li><a href="/IT/Web">Web</a></li>
                <li><a href="/IT/Python">Python</a></li>
                <li><a href="/IT/Linux">Linux</a></li>
                <li><a href="/IT/Projects">Projects</a></li>
              </ul>
            </li>
            <li class="has-dropdown active">
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


  <header id="fh5co-header" class="fh5co-cover js-fullheight" role="banner" style="background-image: url(images/hero_1.jpeg);" data-stellar-background-ratio="0.5">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="display-t js-fullheight">
            <div class="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
              <h1>See <em>My</em> Gallery</h1>
              <br>
              <h2>Brought to you  by <a href="https://louisyoung.work/" target="_blank">louisyoung.work</a></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>


  <div id="fh5co-gallery" class="fh5co-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12 fh5co-heading animate-box">
          <h2>photography &amp; Art</h2>
          <div class="row">
            <div class="col-md-6">
              <p>朋友圈中的糖水片如何影响了风景摄影的审美？<br>
                尝试探索城市与自然、时间之间的变迁关系的新地形摄影是怎么回事？<br>
                用搭建的场景，来表现现实真相的观念摄影，对风景摄影有什么启发？<br>
                回归本质进行深度思考，才有可能走得更远。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <photo></photo>
  <div id="fh5co-featured-testimony" class="fh5co-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12 fh5co-heading animate-box">
          <h2>photography &amp; Art</h2>
          <div class="row">
            <div class="col-md-6">
              <p></p>
            </div>
          </div>
        </div>

        <div class="col-md-5 animate-box img-to-responsive animate-box" data-animate-effect="fadeInLeft">
          <img src="images/home/article.jpg" alt="">
        </div>
        <div class="col-md-7 animate-box" data-animate-effect="fadeInRight">
          <blockquote>
            <p> &ldquo;
              我们为什么要拍风景？仅仅是作为一种「存在过」的记录？未必。<br><br>
              深究下去又有了：风景的概念是什么？花花草草大山大河即是风景？未必。<br><br>
              再深究下去：风景除了眼前转瞬即逝的一幕，是否可能存在永恒？也许。
              &rdquo;</p>
            <p class="author"><cite>&mdash; Louis Young</cite></p>
          </blockquote>
        </div>

      </div>
    </div>
  </div>

  <footer></footer>

</template>

<script>
  import Footer from '../components/footer'
  import Photo from "../components/photo";
  import LeaveNotes from "../components/leave-notes";
  export default {
    name: 'Gallery',
    components: {LeaveNotes, Photo, Footer },
  }
</script>

<style scoped>
  .fh5co-heading{
    margin-bottom: 0!important;
  }
  #fh5co-gallery{
    margin-bottom: 0!important;
  }
</style>
