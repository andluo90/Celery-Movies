<template>
    <div class="item" :key="movie.id" @click='showDetail' >
        <a >
            <div class="cover">
                <!-- <img src="http://img3.doubanio.com/f/movie/b6dc761f5e4cf04032faa969826986efbecd54bb/pics/movie/movie_default_small.png" :data-src = "movie.images.small" alt=""> -->
                <img v-lazy="movie.images.small" alt="">

            </div>
            <div class="detail">
                <h2>{{ movie.title }}</h2>
                <div class="extra">
                    <span class="score">{{ movie.rating.average }}</span> / {{ movie.collect_count }}收藏
                </div>
                <div class="extra">{{ movie.year }} / {{ movie.genres.join('、') }}</div>
                <div class="extra">导演：{{ movie.directors | formatPeople }}</div>
                <div class="extra">主演：{{ movie.casts | formatPeople }}</div>
                <span v-if="status === 0" class="iconfont like icon-heart" :class="islike(movie.id)" @click.stop="click"></span>                 
                <span v-else class="iconfont like icon-xihuan" :class="islike(movie.id)" @click.stop="click"></span> 
            </div>
        </a>
    </div>
</template>
<script>
export default {
    name:"MovieItem",

    props:{
        movie:{
            type:Object,
            required:true
        }
    },

    data:function(){
        return {
            status:1 //0 is like 1:is unlike
        }
    },

    methods:{
      
      click:function(){
          if(this.status === 0){
              this.unlike()
          }else{
              this.like()
          }
      },
      like:function(){
          this.$store.commit('like',this.movie)
          this.status = 0;
      },
      unlike:function(){
          this.$store.commit('unlike',this.movie)
          this.status = 1
      },
      islike:function(id){
          let reslut = ''
          this.$store.state.likeList.forEach((movie)=>{
              
              if(id === movie.id){
                  reslut = 'active'
                  this.status = 0
              }
          })
          return reslut
      },
      showDetail:function(){
          const payload = {
              isShowDetail:true,
              id:this.movie.id
          }
          this.$store.commit('setIsShowDetail',payload)
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
    }
    
}
</script>
<style lang="scss" scoped>
    $color:red;
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
                color:$color;
            }

            .like {
                position: absolute;
                right: 10px;
                top: 50%;
                transform: translateY(-70%);
                font-size: 2.1em;

                

                &.active {
                    color:#f44336;
                }
            }
            
        }

        
        
    }



</style>

