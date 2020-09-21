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
        <h2>My Article</h2>
        <div class="row">
          <div class="col-md-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ab debitis sit itaque totam, a maiores nihil, nulla magnam porro minima officiis! Doloribus aliquam voluptates corporis et tempora consequuntur ipsam, itaque, nesciunt similique commodi omnis. Ad magni perspiciatis, voluptatum repellat.</p>
          </div>
        </div>
      </div>
      <div class="row">

        <div v-for="article in articles" class="col-md-4">
          <div class="fh5co-blog animate-box">
            <a :href="article.url" :style="{backgroundImage:article.avatar}" class="blog-bg"></a>
            <div class="blog-text">
              <span class="posted_on">{{ article.time }}</span>
              <h3><a :href="article.url" >{{ article.name }}</a></h3>
              <p>{{ article.intro }}</p>
              <ul class="stuff">
                <li><i class="icon-heart2"></i>{{ article.view }}</li>
                <li><i class="icon-eye2"></i>{{ article.view }}</li>
                <li><a :href="article.url" >Read More<i class="icon-arrow-right22"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
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
    name: 'IT',
    data () {
      return {
        articles:[
          {
            name:'Intermediate Python',
            avatar:'url(images/home/book1-Intermediate-Python.jpg)',
            url:'url(http://45.40.234.190:4000/interPython/)',
            intro:'《Python进阶》为Intermediate Python',
            like:'1.2K',
            view:'2K' ,
            time:'Sep. 6th 2020',
          },
          {
            name:'Django-Web',
            avatar:'url(images/home/book2-Django.jpg)',
            url:'http://45.40.234.190:4000/django/',
            intro:'Django教程,python语言写的开源web开发框架',
            like:'1.2K',
            view:'2K' ,
            time:'Sep. 6th 2020',
          },
          {
            name:'On-Java-8',
            avatar:'url(images/home/book3-On-Java-8.jpg)',
            url:'http://45.40.234.190:4000/java8/',
            intro:"本书原作者为 [美] Bruce Eckel，即《Java 编程思想》的作者。<br>本书是事实上的 《Java 编程思想》第五版。",
            like:'1.2K',
            view:'2K' ,
            time:'Sep. 6th 2020',
          },
          {
            name:'微信公众号开发',
            avatar:'url(images/home/book4-WeXin.jpg)',
            url:'http://45.40.234.190:4000/wexin/',
            intro: "1.掌握微信公众号开发的原理<br>2.熟悉微信公众号的基本功能开发<br>3.锻炼阅读文档，对接第三方接口开发的能力</p>",
            like:'1.2K',
            view:'2K' ,
            time:'Sep. 6th 2020',
          },
          {
            name:'Flask-Web',
            avatar:'url(images/home/book6-Flask.jpg)',
            url:'http://45.40.234.190:4000/flask/',
            intro: "Flask作为Web框架，它的作用主要是为了开发Web应用程序。<br>具有高度可定制性，通过扩展增加其功能，这是Flask最重要的特点。<br>Flask的两个主要核心应用是Werkzeug和模板引擎Jinja。",
            like:'1.2K',
            view:'2K' ,
            time:'Sep. 6th 2020',
          },
          {
            name:'Learning-Scrapy',
            avatar:'url(images/home/book5-Learning-Scrapy.jpg)',
            url:'http://45.40.234.190:4000/scrapy/',
            intro: "Scrapy爬虫框架<br>1.对HTML页面的数据提取（数据提取）<br>2.Scrapy框架以及scrapy-redis分布式策略（第三方框架）<br>3.爬虫(Spider)、反爬虫(Anti-Spider)、反反爬虫(Anti-Anti-Spider)</p>",
            like:'1.2K',
            view:'2K' ,
            time:'Sep. 6th 2020',
          },
          {
            name:'Data-Analysis',
            avatar:'url(images/home/book7-Data-Analysis.jpg)',
            url:'http://45.40.234.190:4000/dataAnalysis/',
            intro: "《数据分析》<br>1.熟悉数据分析的流程，包括数据采集、处理、可视化等<br>2.掌握Python语言作为数据分析工具<br>3.掌握非结构化数据的处理与分析<br>4.掌握数据分析中常用的建模知识",
            like:'1.2K',
            view:'2K' ,
            time:'Sep. 6th 2020',
          },
          {
            name:'Machine-Learing',
            avatar:'url(images/home/book8-Machine-Learing.jpg)',
            url:'http://45.40.234.190:4000/machineLearning/',
            intro: "用Python机器学习<br>1.学会分析问题<br>2.掌握算法基本思想，学会对问题用相应的算法解决<br>3.学会利用简便的库或者框架解决问题",
            like:'1.2K',
            view:'2K' ,
            time:'Sep. 6th 2020',
          },
          {
            name:'TensorFlow',
            avatar:'url(images/home/book9-TensorFlow.jpg)',
            url:'http://45.40.234.190:4000/tensorflow/',
            intro: "TensorFlow机器学习框架<br>1.高度的灵活性-不是一个严格的“神经网络”库<br>2.真正的可移植性-在CPU和GPU上运行<br>3.多语言支持-有一个合理的c++使用界面，也有一个易用的python使用界面<br>4.性能最优化-给予了线程、队列、异步操作等以最佳的支持",
            like:'1.2K',
            view:'2K' ,
            time:'Sep. 6th 2020',
          },
        ]
      }
    }

  }
</script>

<style scoped>

</style>
