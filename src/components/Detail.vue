<template>
    <div id="detail">
        <div class="movie_detail">
            <div class="card">
                <h1>{{ movie.title }}</h1>
                <div class="subject">
                    <div class="left">
                        <p class="ratting">
                            <span class="star"></span>
                            <strong class="score">{{ movie.rating.average }}</strong>
                            <span class="count">{{ movie.ratings_count }}人评价</span>
                        </p>
                        <p class="meta">${meta}
                        </p>
                    </div>
                    <div class="right">
                        <img :src="movie.images.small" alt="">
                    </div>
                </div>
                <!-- <div class="channel_tags">
                    <h2>所属频道</h2>
                    <ul>
                        ${tags.join('')}
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
                        ${celebrities}        
                    </ul>
                </div> -->
            </div>
            <div class="close">
                <button @click="close">关闭</button>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name:"Detail",

    
    computed:{
        movie:function(){
            return this.$store.state.movieDeaitl
        }
    },
    methods:{
        close:function(){
            this.$store.commit('setIsShowDetail',{isShowDetail:false,movie:null})
        }
    }
}
</script>
<style lang="scss" scoped>
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

                >.channel_tags {
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

