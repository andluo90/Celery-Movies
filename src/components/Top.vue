<template>
    <div class="top" :class="classes">
        <MovieList :data="movieList"></MovieList>
    </div>
    
</template>
<script>
import MovieList from './MovieList'
import jsonp from 'jsonp'

export default {
    name:"Top",
    components:{
        MovieList
    },
    data(){
      return {
          apikey:this.$store.state.apikey,
          start:0,
          count:20,
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
        jsonp(`//api.douban.com/v2/movie/top250?apikey=${this.apikey}&start=${this.start}&count=${this.count}`,
                null,
                (error,data)=>{
                    this.$store.commit('setLoading',{status:false})
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
        
        
    },

    mounted(){
        this.$store.commit('toggleTab',{tab:"Top"})
    },
    destroyed(){
        console.log(`Top is destroyed...`)
    }
    
}
</script>
<style lang="scss" scoped>

    .top {
        padding:10px;

        &.hide {
            position: absolute;
            left: -140%;
        }
    }

</style>

