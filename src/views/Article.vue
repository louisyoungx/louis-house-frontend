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
            <li class="has-dropdown">
              <a href="/Gallery">画廊</a>
              <ul class="dropdown">
                <li><a href="/Gallery/Life">生活</a></li>
                <li><a href="/Gallery/Food">美食</a></li>
                <li><a href="/Gallery/Scenery">风景</a></li>
              </ul>
            </li>
            <li class="active"><a href="/Article">文章</a></li>
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
              <h1>See <em>My</em> Article</h1>
              <br>
              <h2>Brought to you  by <a href="https://louisyoung.work/" target="_blank">louisyoung.work</a></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div id="fh5co-featured-menu" class="fh5co-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12 fh5co-heading animate-box">
          <h2>My Article</h2>
          <div class="row">
            <div class="col-md-6">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ab debitis sit itaque totam, a maiores nihil, nulla magnam porro minima officiis! Doloribus aliquam voluptates corporis et tempora consequuntur ipsam, itaque, nesciunt similique commodi omnis. Ad magni perspiciatis, voluptatum repellat.</p>
            </div>
          </div>
        </div>

        <div v-for="article in articles" :key="article.id" class="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap">
          <a v-if="article.type === '0'" :href="article.url" >
            <div class="fh5co-item animate-box">
              <img :src="article.pic" class="img-responsive" alt="Free Restaurant Bootstrap Website Template by FreeHTML5.co">
              <h3>{{ article.title }}</h3>
              <span class="fh5co-price">{{ article.view }} <sup> read</sup></span>
              <p>{{ article.intro }}</p>
            </div>
          </a>
          <a v-else-if="article.type === '1'" :href="article.url" >
            <div class="fh5co-item animate-box margin_top">
              <img :src="article.pic" class="img-responsive" alt="Free Restaurant Bootstrap Website Template by FreeHTML5.co">
              <h3>{{ article.title }}</h3>
              <span class="fh5co-price">{{ article.view }} <sup> read</sup></span>
              <p>{{ article.intro }}</p>
            </div>
          </a>
        </div>


      </div>

<!--
        <div class="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap">
        <div class="fh5co-item animate-box">
          <img src="images/gallery_1.jpeg" class="img-responsive" alt="Free Restaurant Bootstrap Website Template by FreeHTML5.co">
          <h3>Bake Potato Pizza</h3>
          <span class="fh5co-price">$20<sup>.50</sup></span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.</p>
        </div>
        <div class="fh5co-item animate-box">
          <img src="images/gallery_2.jpeg" class="img-responsive" alt="Free Restaurant Bootstrap Website Template by FreeHTML5.co">
          <h3>Bake Potato Pizza</h3>
          <span class="fh5co-price">$20<sup>.50</sup></span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.</p>
        </div>
      </div>
        <div class="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap">
          <div class="fh5co-item margin_top animate-box">
            <img src="images/gallery_3.jpeg" class="img-responsive" alt="Free Restaurant Bootstrap Website Template by FreeHTML5.co">
            <h3>Salted Fried Chicken</h3>
            <span class="fh5co-price">$19<sup>.00</sup></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.</p>
          </div>
          <div class="fh5co-item animate-box">
            <img src="images/gallery_4.jpeg" class="img-responsive" alt="Free Restaurant Bootstrap Website Template by FreeHTML5.co">
            <h3>Bake Potato Pizza</h3>
            <span class="fh5co-price">$20<sup>.50</sup></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.</p>
          </div>
        </div>
        <div class="clearfix visible-sm-block visible-xs-block"></div>
        <div class="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap">
          <div class="fh5co-item animate-box">
            <img src="images/gallery_5.jpeg" class="img-responsive" alt="Free Restaurant Bootstrap Website Template by FreeHTML5.co">
            <h3>Italian Sauce Mushroom</h3>
            <span class="fh5co-price">$17<sup>.99</sup></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.</p>
          </div>
          <div class="fh5co-item animate-box">
            <img src="images/gallery_6.jpeg" class="img-responsive" alt="Free Restaurant Bootstrap Website Template by FreeHTML5.co">
            <h3>Bake Potato Pizza</h3>
            <span class="fh5co-price">$20<sup>.50</sup></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap">
          <div class="fh5co-item margin_top animate-box">
            <img src="images/gallery_7.jpeg" class="img-responsive" alt="Free Restaurant Bootstrap Website Template by FreeHTML5.co">
            <h3>Fried Potato w/ Garlic</h3>
            <span class="fh5co-price">$22<sup>.50</sup></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.</p>
          </div>
          <div class="fh5co-item animate-box">
            <img src="images/gallery_8.jpeg" class="img-responsive" alt="Free Restaurant Bootstrap Website Template by FreeHTML5.co">
            <h3>Bake Potato Pizza</h3>
            <span class="fh5co-price">$20<sup>.50</sup></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.</p>
          </div>
        </div>
-->

    </div>
  </div>

  <div id="fh5co-featured-testimony" class="fh5co-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12 fh5co-heading animate-box">
          <h2>Testimony</h2>
          <div class="row">
            <div class="col-md-6">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ab debitis sit itaque totam, a maiores nihil, nulla magnam porro minima officiis! Doloribus aliquam voluptates corporis et tempora consequuntur ipsam, itaque, nesciunt similique commodi omnis.</p>
            </div>
          </div>
        </div>

        <div class="col-md-5 animate-box img-to-responsive">
          <img src="images/person_1.jpg" alt="">
        </div>
        <div class="col-md-7 animate-box">
          <blockquote>
            <p> &ldquo; Quantum ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ab debitis sit itaque totam, a maiores nihil, nulla magnam porro minima officiis! Doloribus aliquam voluptates corporis et tempora consequuntur ipsam. &rdquo;</p>
            <p class="author"><cite>&mdash; Jane Smith</cite></p>
          </blockquote>
        </div>
      </div>
    </div>
  </div>





</template>

<script>

  export default {
    name: 'Article',
    data () {
      return {
        articles:[
          {
            id:'1',
            title:'十六型人格',
            view:'99+',
            url:'/',
            intro:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.',
            pic:'images/person_1.jpg',
            type:'0',
          },
          {
            id:'2',
            title:'十六型人格',
            view:'99+',
            url:'/',
            intro:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.',
            pic:'images/person_1.jpg',
            type:'1',
          },
          {
            id:'3',
            title:'十六型人格',
            view:'99+',
            url:'/',
            intro:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.',
            pic:'images/person_1.jpg',
            type:'0',
          },
          {
            id:'4',
            title:'十六型人格',
            view:'99+',
            url:'/',
            intro:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.',
            pic:'images/person_1.jpg',
            type:'1',
          },
          {
            id:'5',
            title:'十六型人格',
            view:'99+',
            url:'/',
            intro:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.',
            pic:'images/person_1.jpg',
            type:'0',
          },
          {
            id:'6',
            title:'李美妮是笨蛋',
            view:'99+',
            url:'/',
            intro:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.',
            pic:'images/person_1.jpg',
            type:'1',
          },
          {
            id:'7',
            title:'十六型人格',
            view:'99+',
            url:'/',
            intro:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.',
            pic:'images/person_1.jpg',
            type:'0',
          },
          {
            id:'8a',
            title:'十六型人格',
            view:'99+',
            url:'/',
            intro:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil cupiditate ut vero alias quaerat inventore molestias vel suscipit explicabo.',
            pic:'images/person_1.jpg',
            type:'1',
          },
        ]
      }
    }

  }
</script>

<style scoped>

</style>
