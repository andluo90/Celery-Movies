<template>
    <div class="top">
        aaa
        <!-- <div class="item" data-movie-id=${movie.id}>
            <a href="#">
                <div class="cover">
                    <img src="http://img3.doubanio.com/f/movie/b6dc761f5e4cf04032faa969826986efbecd54bb/pics/movie/movie_default_small.png" data-src = "${movie.images.small}" alt="">
                </div>
                <div class="detail">
                    <h2>${movie.title}</h2>
                    <div class="extra">
                        <span class="score">${movie.rating.average}</span> / ${movie.collect_count}收藏
                    </div>
                    <div class="extra">${movie.year} / ${movie.genres.join('、')}</div>
                    <div class="extra">导演：${director_name_arr.join('、')}</div>
                    <div class="extra">主演：${cast_name_arr.join('、')}</div>
                    <span class="iconfont icon-xihuan ${status}"></span>
                </div>
            </a>
        </div> -->
    </div>
    
</template>
<script>
import jsonp from 'jsonp'
export default {
    name:"Top",
    
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
                        console.log("请求失败");
                        console.log(error);
                    }else{
                        console.log(data);
                        this.movieList = data
                    }
                }
            )
        
    }
}
</script>
<style lang="scss" scoped>

</style>

