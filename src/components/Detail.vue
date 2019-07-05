<template>
    <div id="detail">
        <div class="movie_detail">
            <div v-if="movie !== null" class="card">
                <h1>{{ movie.title }}</h1>
                <div class="subject">
                    <div class="left">
                        <p class="ratting">
                            <span class="star"></span>
                            <strong class="score">{{ movie.rating.average }}</strong>
                            <span class="count">{{ movie.ratings_count }}人评价</span>
                        </p>
                        <p class="meta">{{ meta }}
                        </p>
                    </div>
                    <div class="right">
                        <img :src="movie.images.small" alt="">
                    </div>
                </div>
                <div class="channel_tags">
                    <h2>所属频道</h2>
                    <ul>
                        <li class="channel_tag" v-for="tag in tags" :key="tag"><a href="">{{ tag }}</a></li>
                    </ul>
                </div>
                <div class="intro">
                    <h2>{{ movie.title }}的剧情简介</h2>
                    <p class="bd">
                            {{ movie.summary }}  
                    </p>

                </div>
                <div class="celebrities">
                    <h2>影人</h2>
                    <ul>
                        <li v-for="(director,index) in movie.directors" :key="index">
                            <div class="poster" :style="`
                            background-image: url('${director.avatars.small}')`"></div>
                            <span class="name">{{ director.name }}</span>
                            <span class="role">导演</span>
                        </li> 
                        <li v-for="(cast,index) in movie.casts" :key="index">
                            <div class="poster" :style="`
                            background-image: url('${cast.avatars.small}')`"></div>
                            <span class="name">{{ cast.name }}</span>
                            <span class="role">演员</span>
                        </li>       
                    </ul>
                </div>
            </div>
            <div class="close">
                <button @click="close">关闭</button>
            </div>
        </div>
    </div>

</template>
<script>
import jsonp from 'jsonp'

export default {
    name:"Detail",
    data(){
        return {
            apikey:this.$store.state.apikey,
            movie:null
        }
    },
    computed:{
        movieId:function(){
            return this.$store.state.movieId
        },
        
        meta_directors:function(){
            let temp = ''
            this.movie.directors.map((director)=>{
                temp += director.name+'(导演) / '
            })
            return temp;
        },
        meta_casts:function(){
            let temp = ''
            this.movie.casts.map((cast)=>{
                temp += cast.name+' / '
            })
            return temp;
        },
        celebrities:function(){

        },
        meta:function(){
            return `${this.movie.durations[0]+' / '+this.movie.genres.join(' / ')+' / '+this.meta_directors+this.meta_casts+this.movie.pubdates.join(' / ')}`
        },
        tags:function(){
            console.log(this.movie)
            return this.movie.tags.map((tag)=>{
                return tag
            })
        }
        

    },
    methods:{
        close:function(){
            this.$store.commit('setIsShowDetail',{isShowDetail:false,movie:null})
        },
        getDetailData(){
            jsonp(`//api.douban.com/v2/movie/subject/${this.movieId}?apikey=${this.apikey}`,
                null,
                (error,data)=>{
                    if(error){
                        console.log("请求电影详情数据失败.");
                        console.log(error);
                    }else{
                        console.log("请求电影详情数据成功.");
                        console.log(data)
                        this.movie = data
                    }
                }
            )
        }
    },
    created(){
        this.getDetailData()
    }
    
}
</script>
<style lang="scss" scoped>
    ul , li {
        list-style: none;
    }
    #detail {
        background: rgba(0,0,0,0.4);
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 1;
        // transition:.3s left ease-out;
        >.movie_detail {
            height: 100%;
            background:white;
            overflow: scroll;
            -webkit-overflow-scrolling: touch;

            >.card {
                padding:0 18px;

                >.subject {
                    display: flex;

                    >.left {
                        width: calc(100% - 100px);
                    }
                    >.right {
                        width: 100px;
                        height: 110px;

                        img {
                            width:100px;
                        }
                    }
                }

                .channel_tag {
                    // margin-bottom: 30px;
                    background-color: #effaf0;
                    border: 1px solid #42bd56;
                    display: inline-block;
                    margin-right: 10px;
                    font-size: 13px;
                    padding: 5px 10px;
                    border-radius: 15px;
                    margin-bottom: 10px;
                }

                >.celebrities {
                    >ul {
                        overflow: auto;
                        white-space:nowrap;

                        >li {
                            display: inline-block;
                            width: 75px;
                            margin-right:8px;
                        }
                    }
                    .poster {
                        width: 100%;
                        height: 130px;
                        background-size: cover;
                        background-position: center;
                    }
                    .name , .role {
                        margin-top:8px;
                        display: block;
                        text-align: center;
                    }
                    
                }

                .bd {
                    font-size: 15px;
                    line-height: 22px;
                    color: #494949;
                    margin-bottom: 30px;
                }
            }

            .score {
                color:rgb(73,73,73);
                margin-right:8px;
            }

            .count {
                color:rgb(170,170,170)
            }

            .meta {
                font-size: 14px;
                color:rgb(73,73,73);
                line-height: 22.4px;
                padding-right: 20px;
                margin-top: 10px;
                margin-bottom: 30px;
            }

            a {
                color:#42bd56
            }

            h1 {
                padding-top: 20px;
                padding-bottom: 5px;
                font-weight: 400;
                color: rgb(17,17,17);
            }

            h2 {
                color: #aaa;
                margin: 0 0 15px;
                font-size: 15px;
            }
            h1,h2,h3 {
                font-wight:normal;
            }

            >.close {
                margin:30px 0;
                text-align: center;
                >button {
                    color: #42bd56;
                    background-color: #effaf0;
                    border: 1px solid #42bd56;
                    font-size: 14px;
                    padding: 5px 16px;
                    border-radius: 15px;
                }
            }
        }
    }
</style>

