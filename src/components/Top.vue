<template>
    <div class="top">
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
          apikey:'0b2bdeda43b5688921839c8ecb20399b',
          start:0,
          count:20,
          movieList:null

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
    }

</style>

