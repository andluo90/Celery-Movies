<template>
    <div class="hot" :class="classes">
        <MovieList :data="movieList"></MovieList>
    </div>
</template>
<script>
import MovieList from './MovieList'
import jsonp from 'jsonp'

export default {
    name:"Hot",
    components:{
        MovieList
    },
    data(){
      return {
          apikey:this.$store.state.apikey,
          movieList:null
      }
    },
    computed:{
        classes(){
            return this.$store.state.isShowDetail ? 'hide':''
        }
    },
    beforeMount(){
        this.$store.commit('setLoading',{status:true})
        jsonp(`//api.douban.com/v2/movie/in_theaters?apikey=${this.apikey}`,
                null,
                (error,data)=>{
                    this.$store.commit('setLoading',{status:false})
                    if(error){
                        console.log("请求失败.");
                        console.log(error);
                    }else{
                        console.log("请求成功.");
                        this.movieList = data.subjects
                        
                    }
                }
            )
        
        
    },

    mounted(){
        this.$store.commit('toggleTab',{tab:"Hot"})
    }
}
</script>
<style lang="scss" scoped>
    .hot {
        padding:10px;
        padding-bottom: 45px;
        &.hide {
            position: absolute;
            left: -140%;
        }
    }
</style>

