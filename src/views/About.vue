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
            <li class="active"><a href="/About">关于</a></li>
            <li><a href="/Contact">联系</a></li>
          </ul>
        </div>
      </div>

    </div>
    <!-- </div> -->
  </nav>

  <router-view></router-view>
  <header id="fh5co-header" class="fh5co-cover js-fullheight" role="banner" style="background-image: url(images/hero_1.jpeg);" data-stellar-background-ratio="0.5">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="display-t js-fullheight">
            <div class="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
              <h1>About <em>Me</em> ?</h1>
              <br>
              <h2>Brought to you  by <a href="https://louisyoung.work/" target="_blank">louisyoung.work</a></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div id="fh5co-about" class="fh5co-section">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-pull-4 img-wrap animate-box" data-animate-effect="fadeInLeft">
          <img src="images/about/banner.jpg" alt="Free Restaurant Bootstrap Website Template by FreeHTML5.co">
        </div>
        <div class="col-md-5 col-md-push-1 animate-box">
          <div class="section-heading">
            <h2>About ME</h2>
            <p>
              作为一枚INTP, 失败领域的专家。当我说出我一生中浪费的机会次数时，人们一定会好奇我是如何生存到现在，或者认为我是个彻头彻尾的失败者，我甚至可以写出一篇有关我失败经历的百科了。直到现在，我还是一团糟。
            </p>

            <p>
              但我不那么糟了，因为我知道自己的工作并对此有着清晰的了解，而在以前我几乎是一直马马虎虎。我不知道我是什么时候觉醒的或是说我仍在觉醒着，学习并探索着自己。不过，我可以分享我的经验/建议，如果这些对你们有益，当然这取决于你们自身，因为每个人都不相同。
            </p>
            <p>
              对INTP来说最重要的是学习，学习将会结合个人的经历塑造性格，这一过程就像过滤一样，最终使我成为不同的INTP。更重要的是，这一过程帮助我更理解自己，提高自己，并当事情仍一团糟时宽恕自己而不是再讨厌自己。
            </p>
            <p><a href="#" class="btn btn-primary btn-outline">Our History</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="fh5co-timeline">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-md-offset-0">
          <ul class="timeline animate-box">
            <li class="timeline-heading text-center animate-box">
              <div><h3>前 端 技 术 栈</h3></div>
            </li>

            <li class="timeline-inverted animate-box">
              <div class="timeline-badge"><i class="icon-genius"></i></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h3 class="timeline-title">HTML / CSS / JavaScript</h3>
                </div>
                <div class="timeline-body">
                  <p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
              </div>
            </li>
            <li class="animate-box timeline-unverted">
              <div class="timeline-badge"><i class="icon-genius"></i></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h3 class="timeline-title">jQuery / Vue.js / Bootstrap</h3>
                </div>
                <div class="timeline-body">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted animate-box">
              <div class="timeline-badge"><i class="icon-genius"></i></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h3 class="timeline-title">Nginx / node.js</h3>
                </div>
                <div class="timeline-body">
                  <p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
              </div>
            </li>
            <li class="animate-box timeline-unverted">
              <div class="timeline-badge"><i class="icon-genius"></i></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h3 class="timeline-title">vue-cli</h3>
                </div>
                <div class="timeline-body">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </li>

            <br>

            <li class="timeline-heading text-center animate-box">
              <div><h3>后 端 技 术 栈</h3></div>
            </li>
            <li class="animate-box timeline-unverted">
              <div class="timeline-badge"><i class="icon-genius"></i></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h3 class="timeline-title">Python</h3>

                </div>
                <div class="timeline-body">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted animate-box">
              <div class="timeline-badge"><i class="icon-genius"></i></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h3 class="timeline-title">Django</h3>
                </div>
                <div class="timeline-body">
                  <p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
              </div>
            </li>
            <li class="animate-box timeline-unverted">
              <div class="timeline-badge"><i class="icon-genius"></i></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h3 class="timeline-title">Linux</h3>
                </div>
                <div class="timeline-body">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted animate-box">
              <div class="timeline-badge"><i class="icon-genius"></i></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h3 class="timeline-title">MySQL / Redis / MongoDB</h3>
                </div>
                <div class="timeline-body">
                  <p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
              </div>
            </li>
            <li class="animate-box timeline-unverted">
              <div class="timeline-badge"><i class="icon-genius"></i></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h3 class="timeline-title">Git / Docker</h3>
                </div>
                <div class="timeline-body">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </li>
            <li class="timeline-heading text-center animate-box">
              <div><h3>辅 助 技 能</h3></div>
            </li>

            <li class="timeline-inverted animate-box">
              <div class="timeline-badge"><i class="icon-genius"></i></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h3 class="timeline-title">PS / Pixelmator Pro</h3>
                </div>
                <div class="timeline-body">
                  <p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
              </div>
            </li>
            <li class="animate-box timeline-unverted">
              <div class="timeline-badge"><i class="icon-genius"></i></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h3 class="timeline-title">Final Cut Pro</h3>
                </div>
                <div class="timeline-body">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted animate-box">
              <div class="timeline-badge"><i class="icon-genius"></i></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h3 class="timeline-title">美工 / Procreate</h3>
                </div>
                <div class="timeline-body">
                  <p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
              </div>
            </li>
            <li class="animate-box timeline-unverted">
              <div class="timeline-badge"><i class="icon-genius"></i></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h3 class="timeline-title">摄影 / Lightroom</h3>
                </div>
                <div class="timeline-body">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </div>

  <my-projects></my-projects>




</template>

<script>
  import main from '../assets/js/main.js'
  import MyProjects from "../components/my-projects";
  export default {
    name:"About",
    components: {MyProjects},
    main
  }
</script>

<style scoped>

</style>
