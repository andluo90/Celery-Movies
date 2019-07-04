<template>
    <div class="hot">
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
          apikey:'0b2bdeda43b5688921839c8ecb20399b',
          movieList:null
      }
    },
    beforeMount(){
        jsonp(`//api.douban.com/v2/movie/in_theaters?apikey=${this.apikey}`,
                null,
                (error,data)=>{
                    if(error){
                        console.log("请求失败.");
                        console.log(error);
                    }else{
                        console.log("请求成功.");
                        this.movieList = data.subjects
                        
                    }
                }
            )
        console.log('before mount...')
        
    },

    mounted(){
        this.$store.commit('toggleTab',{tab:"Hot"})
    }
}
</script>
<style lang="scss" scoped>
    .hot {
        padding:10px;
    }
</style>

