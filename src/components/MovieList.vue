<template>
    <div >
        <template v-for="movie in data" >
            <div class="item" :data-movie-id="movie.id" :key="movie.id" :ref="movie.id">
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
                        <span class="iconfont icon-xihuan" :class="islike(movie.id)" @click="like(movie)"></span> 
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

    props:{
        data:Array
    },


    methods:{
      like:function(movie){
          this.$store.commit('like',movie)
      },
      unlike:function(movie){
          this.$store.commit('unlike',movie)
      },
      islike:function(id){
          let reslut = ''
          this.$store.state.likeList.forEach((movie)=>{
              console.log(`id is ${id} , i is ${movie.id}`)
              if(id === movie.id){
                  reslut = 'active'
              }
          })
          return reslut
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

