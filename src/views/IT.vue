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
            <li class="has-dropdown active">
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


  <header id="fh5co-header" class="fh5co-cover js-fullheight" role="banner" style="background-image: url(images/hero_1.jpeg);" data-stellar-background-ratio="0.5">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="display-t js-fullheight">
            <div class="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
              <h1>Internet <em>&nbsp</em>Technology</h1>
              <br>
              <h2>Brought to you  by <a href="https://louisyoung.work/" target="_blank">louisyoung.work</a></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>



  <div id="fh5co-blog" class="fh5co-section">
    <div class="container">
      <div class="col-md-12 fh5co-heading animate-box">
        <h2>Web &amp; Internet</h2>
        <div class="row">
          <div class="col-md-6">
            <p>
              神秘的 IT 工程师！为什么总感觉从事技术的人很难沟通？为什么中国的程序员常常自称「码农」？到底「喜欢编程」是个什么感觉？
            </p>
          </div>
        </div>
      </div>
      <div class="row">

        <div v-for="IT in ITs" class="col-md-4">
          <div class="fh5co-blog  ">
            <a @click="getContent(IT.url)" :style="{backgroundImage:IT.avatar}" class="blog-bg"></a>
            <div class="blog-text">
              <span class="posted_on">{{ IT.time }}</span>
              <h3><a @click="getContent(IT.url)" >{{ IT.title }}</a></h3>
              <p>{{ IT.intro }}</p>
              <ul class="stuff">
                <li><i class="icon-heart2"></i>{{ IT.like }}</li>
                <li><i class="icon-eye2"></i>{{ IT.view }}</li>
                <li><a @click="getContent(IT.url)" >Read More<i class="icon-arrow-right22"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>


  <my-projects></my-projects>








</template>

<script>

  import axios from "axios";
  import LeaveNotes from "../components/leave-notes";
  import MyProjects from "../components/my-projects";

  export default {
    name: 'IT',
    components: {MyProjects, LeaveNotes},
    data () {
      return {
        ITs: [],
      }
    },
    mounted() {
      axios.get("/API/IT/list/").then(res=>{
        console.log(res.data);
        this.ITs = res.data;
      }).catch(err=>{
        console.log(err);
      })
    },
    methods:{
      getContent(url){
        //console.log(url);
        this.$router.push('/Details/IT/'+url)
      }
    }
  }
</script>

<style scoped>
  .fh5co-blog{
    cursor: pointer;
  }
</style>
