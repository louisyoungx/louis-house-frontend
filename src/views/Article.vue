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
          <h2>Philosophy &amp; Thinking</h2>
          <div class="row">
            <div class="col-md-6">
              <p>
                在现代社会谈论真理、至善显得可笑。人们乐意匍匐在山脚下的乐园，不愿抬头想要征服高山。这趟旅程注定是孤独的，唯真理与你共存。<br><br>

                前人的地图里，没有线索，唯有路边的指路人，对你说，<br><br>

                ——去攀登吧，少年。
              </p>
            </div>
          </div>
        </div>

        <div v-for="article in articles" :key="article.id" class="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap">
          <a class="article-point" v-if="article.status === '0'" @click="getContent(article.url)" >
            <div class="fh5co-item ">
              <img :src="article.avatar" class="img-responsive" alt="Free Restaurant Bootstrap Website Template by FreeHTML5.co">
              <h3>{{ article.title }}</h3>
              <span class="fh5co-price">{{ article.view }} <sup> read</sup></span>
              <p>{{ article.intro }}</p>
            </div>
          </a>
          <a class="article-point" v-else-if="article.status === '1'" @click="getContent(article.url)" >
            <div class="fh5co-item  margin_top">
              <img :src="article.avatar" class="img-responsive" alt="Free Restaurant Bootstrap Website Template by FreeHTML5.co">
              <h3>{{ article.title }}</h3>
              <span class="fh5co-price">{{ article.view }} <sup> read</sup></span>
              <p>{{ article.intro }}</p>
            </div>
          </a>
        </div>


      </div>


    </div>
  </div>

  <div id="fh5co-featured-testimony" class="fh5co-section">
    <div class="container">
      <div class="row">

        <leave-notes></leave-notes>

      </div>
    </div>
  </div>





</template>

<script>
  import axios from 'axios'
  import LeaveNotes from "../components/leave-notes";

  export default {
    name: 'Article',
    components: {LeaveNotes},
    data () {
      return {
        articles :[],
      }
    },
    mounted() {
      axios.get("/API/Article/list/").then(res=>{
        console.log(res.data);
        this.articles = res.data;
      }).catch(err=>{
        console.log(err);
      })
    },
    methods:{
      getContent(url){
        //console.log(url);
        this.$router.push('/Details/Article/'+url)
      }
    }
  }
</script>

<style scoped>
  .article-point{
    cursor: pointer;
  }
</style>
