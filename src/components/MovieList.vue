<template>
    <div class="top" ref="top">
        <template v-for="movie in movieList" ref="item">
            <div class="item" :data-movie-id="movie.id" :key="movie.id" >
                <a href="#/">
                    <div class="cover">
                        <img src="http://img3.doubanio.com/f/movie/b6dc761f5e4cf04032faa969826986efbecd54bb/pics/movie/movie_default_small.png" :data-src = "movie.images.small" alt="">
                    </div>
                    <div class="detail">
                        <h2>{{ movie.title }}</h2>
                        <div class="extra">
                            <span class="score">{{ movie.rating.average }}</span> / {{ movie.collect_count }}收藏
                        </div>
                        <div class="extra">{{ movie.year }} / {{ movie.genres.join('、') }}</div>
                        <div class="extra">导演：{{ movie.directors | formatPeople }}</div>
                        <div class="extra">主演：{{ movie.casts | formatPeople }}</div>
                        <span class="iconfont icon-xihuan ${status}"></span> 
                    </div>
                </a>
            </div>
        </template>
    </div>
    
</template>
<script>
import jsonp from 'jsonp'
export default {
    name:"MovieList",
    
    data(){
      return {
          apikey:'0b2bdeda43b5688921839c8ecb20399b',
          start:0,
          count:20,
          movieList:null

      }
    },
    
    filters:{
        formatPeople(peopleList){
            const tmp = []
            peopleList.forEach((p)=>{
                tmp.push(p.name)
            })
            return tmp.join('、')
        }
    },
    


    beforeMount(){
        jsonp(`//api.douban.com/v2/movie/top250?apikey=${this.apikey}&start=${this.start}&count=${this.count}`,
                null,
                (error,data)=>{
                    if(error){
                        console.log("请求失败.");
                        console.log(error);
                    }else{
                        console.log("请求成功.");
                        this.movieList = data.subjects
                        this.start += 20
                    }
                }
            )
        console.log('before mount...')
        
    },
    mounted(){
        console.log('mounted....')
    }
    
}
</script>
<style lang="scss" scoped>
    .item {
        border-bottom: 1px solid #ccc;
        padding-bottom:10px;
        padding-top:10px;
        position: relative;

        >a {
        display: block;
        display: flex;

            .cover,img {
                width:70px;
            }

        }

        .detail {
            padding-left:10px;
            flex:1;
            position: relative;

            h2 {
                font-size: 16px;
            }

            .extra {
                color:#999;
                margin-top:4px;
            }

            .score {
                color:#ff5722;
            }

            .icon-xihuan {
                position: absolute;
                right: 10px;
                top: 50%;
                transform: translateY(-70%);
                font-size: 2.1em;

                &.active {
                    color:red;
                }
            }
        }

        
        
    }




</style>

