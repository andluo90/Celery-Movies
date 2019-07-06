<template>
    <div class="item" :key="movie.id" @click='showDetail' >
        <a >
            <div class="cover">
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
                <transition name="fade">
                    <span v-if="islike" class="iconfont like icon-heart" :class="islike?'active':''" @click.stop="unlike"></span>                 
                </transition>
                <transition name="fade">
                    <span v-if="!islike" class="iconfont like icon-xihuan" @click.stop="like"></span> 
                </transition>


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

   
    computed:{
        islike:function(){
            let tmp = false
            this.$store.state.likeList.forEach((movie)=>{
              if(this.movie.id === movie.id){
                  tmp = true
              }
            })
            return tmp
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
          
      },
      unlike:function(){
          this.$store.commit('unlike',this.movie)
          
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

        .fade-enter-active, .fade-leave-active {
            transition: opacity .5s;
        }
        .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
            opacity: 0;
        }
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

