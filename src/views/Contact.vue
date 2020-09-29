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
            <li><a href="/Article">文章</a></li>
            <li><a href="/About">关于</a></li>
            <li class="active"><a href="/Contact">联系</a></li>
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
              <h1>Get <em>in</em> Touch</h1>
              <br>
              <h2>Brought to you  by <a href="https://louisyoung.work/" target="_blank">louisyoung.work</a></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>


  <div id="fh5co-contact" class="fh5co-section animate-box">
    <div class="container">
      <div class="row animate-box">
        <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
          <h2>Don't be shy, let's chat.</h2>
          <p>
            联系我，你的消息会直接推送到我的微信公众号<br>
            或者发送邮件到 eric_aaron@icloud.com

          </p>
          <p><a href="mailto:info@yourdomainname.com" class="btn btn-primary btn-outline">发邮件</a></p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 col-md-push-6 col-sm-6 col-sm-push-6">
          <form action="#" id="form-wrap">
            <div class="row form-group">
              <div class="col-md-12">
                <label for="name">你 的 名 字</label>
                <input type="text" class="form-control" id="name">
              </div>
            </div>
            <div class="row form-group">
              <div class="col-md-12">
                <label for="email">你 的 邮 箱</label>
                <input type="text" class="form-control" id="email">
              </div>
            </div>
            <div class="row form-group">
              <div class="col-md-12">
                <label for="message">你 的 留 言</label>
                <textarea name="" id="message" cols="30" rows="10" class="form-control"></textarea>
              </div>
            </div>
            <div class="row form-group">
              <div class="col-md-12">
                <input type="submit" class="btn btn-primary btn-outline btn-lg" value="提 &nbsp&nbsp 交">
              </div>
            </div>

          </form>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: 'Contact',
  }
</script>

<style scoped>

</style>
