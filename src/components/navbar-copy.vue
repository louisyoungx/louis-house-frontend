<template>
  <nav class="fh5co-nav" role="navigation">
    <!-- <div class="top-menu"> -->
    <div class="container">
      <div class="row">
        <div class="col-xs-12 text-center logo-wrap">
          <div id="fh5co-logo"><router-link to="/">Louis<span>.</span></router-link></div>
        </div>
        <div class="col-xs-12 text-center menu-1 menu-wrap ">
          <ul class="songti">
            <li class="active"><router-link to="/">主页</router-link></li>
            <li class="has-dropdown">
              <router-link to="/IT">IT</router-link>
              <ul class="dropdown">
                <li><router-link to="/IT/Web">Web</router-link></li>
                <li><router-link to="/IT/Python">Python</router-link></li>
                <li><router-link to="/IT/Linux">Linux</router-link></li>
                <li><router-link to="/IT/Projects">Projects</router-link></li>
              </ul>
            </li>
            <li class="has-dropdown">
              <router-link to="/Gallery">画廊</router-link>
              <ul class="dropdown">
                <li><router-link to="/Gallery/Life">生活</router-link></li>
                <li><router-link to="/Gallery/Food">美食</router-link></li>
                <li><router-link to="/Gallery/scenery">风景</router-link></li>
              </ul>
            </li>
            <li><router-link to="/Article">文章</router-link></li>
            <li><router-link to="/About">关于</router-link></li>
            <li><router-link to="/Contact">联系</router-link></li>
          </ul>
        </div>
      </div>

    </div>
    <!-- </div> -->
  </nav>
</template>

<script>
  export default {
    name: "navbar"
  }
</script>

<style scoped>

</style>
