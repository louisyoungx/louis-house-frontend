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
                        <li><a href="/Contact">联系</a></li>
                    </ul>
                </div>
            </div>

        </div>
        <!-- </div> -->
    </nav>

    <div id="fh5co-featured-menu" class="fh5co-section">

        <div class="louis-content-main">
            <div class="louis-content-top">
                <div class="louis-content-top-chi">
                    <a href="/">Louis-House</a>
                    <em> · </em>
                    <a href="/IT">IT</a>
                    <em> · </em>
                    <a href="/IT">Details</a>
                    <em> · </em>
                    <a :href="url">{{ path }}</a>
                </div>
            </div>
        </div>

        <div class="louis-content-main">

            <div class="louis-content-body">
                <div class="louis-content-chi blog-text">
                    <h2>
                        {{ content.title }}
                        <p class="icon-heart2" style="float: right">&nbsp{{ content.like }}&nbsp</p>
                        <p class="icon-eye2" style="float: right">&nbsp{{ content.view }}&nbsp</p>
                    </h2>
                    <div v-html="content.body"></div>
                </div>
                <div class="louis-content-point">
                    <div class="louis-content-pre">
                        <p><a @click="GoPrev(prev)" class="btn btn-primary btn-outline">上一篇</a></p>
                    </div>
                    <div class="louis-content-next">
                        <p><a @click="GoNext(next)" class="btn btn-primary btn-outline">下一篇</a></p>
                    </div>
                </div>
            </div>
            <div class="louis-content-rightbar">
                <div class="fh5co-blog">
                    <a href="#" :style="{backgroundImage:content.avatar}" class="blog-bg"></a>
                </div>
                <div class="louis-content-classify">

                    <div class="louis-content-type">
                        分类：{{ content.type }}
                    </div>
                    <div class="louis-content-type">
                        标签：
                    </div>
                    <div class="louis-content-tag-div">
                        <div v-for="tag in content.tags " class="louis-content-tags"><div>{{ tag }}</div></div>
                    </div>
                </div>
                <div class="louis-content-classify">

                    <div class="louis-content-type">
                        作者：{{ content.author }}<br>
                    </div>
                    <div class="louis-content-type">
                        时间：{{ content.time }}<br>
                    </div>
                </div>
                <div class="louis-content-classify">

                    <div class="louis-content-type">
                        阅读：{{ content.view }}
                    </div>
                    <div class="louis-content-type">
                        点赞：{{ content.like }}
                    </div>
                </div>
                <p style="margin: 0 auto"><a v-on:click="likeBtn()" class="btn btn-primary btn-outline">点赞</a></p>
            </div>


        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Content",
        data () {
            return {
                content: [],
                next: "",
                prev: "",
                path: "",
                url: "",
                token: "",
                type:"",
                Django_Path: "",
            }
        },
        mounted() {
            console.log(this.$route);
            const url = this.$route.fullPath
            const index = this.$route.params.ID;
            const it_url = url.slice(9,11);
            const article_url = url.slice(9,16);

            if (it_url === "IT"){
                this.type = it_url
            }
            else if(article_url === "Article"){
                this.type = article_url
            }

            this.url = url
            this.path = index
            this.Django_Path = "/API/"+this.type+"/content/"+this.path+"/"

            console.log(this.type);

            axios.get(this.Django_Path).then(res=>{
                console.log(res.data);
                window.scrollTo(0,0)
                this.next = res.data.next
                this.prev = res.data.prev
                this.content = res.data;
            }).catch(err=>{
                console.log(err);
            })
            axios.get("/API/Global/token/").then(res=>{
                console.log(res.data.token);
                this.token = res.data.token;
            }).catch(err=>{
                console.log(err);
            })

        },
        methods: {
            likeBtn() {
                this.content.like = parseInt(this.content.like) + 1;
                console.log(this.content.like);
                //alert("success");
                axios.post(this.Django_Path, {
                    params:{
                        csrfmiddlewaretoken: this.token,
                    },
                }).then(res=>{
                    console.log(res.data);
                })
            },
            GoPrev(url){
                if (this.prev=== 'None'){
                    alert("已经没有上一页了")
                }
                else {
                    console.log('/Details/'+this.type+"/"+this.prev)
                    this.$router.push('/Details/'+this.type+"/"+this.prev)
                    axios.get("/API/"+this.type+"/content/"+this.prev+"/").then(res=>{
                        console.log(res.data);
                        window.scrollTo(0,0)
                        this.next = res.data.next
                        this.prev = res.data.prev
                        this.content = res.data;
                    }).catch(err=>{
                        console.log(err);
                    })
                }
            },
            GoNext(url){
                if (this.next === 'None'){
                    alert("已经没有下一页了")
                }
                else {
                    console.log('/Details/'+this.type+"/"+this.next)
                    this.$router.push('/Details/'+this.type+"/"+this.next)
                    axios.get("/API/"+this.type+"/content/"+this.next+"/").then(res=>{
                        console.log(res.data);
                        window.scrollTo(0,0)
                        this.next = res.data.next
                        this.prev = res.data.prev
                        this.content = res.data;
                    }).catch(err=>{
                        console.log(err);
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>
