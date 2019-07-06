<template>
    <div class="top" :class="classes">
        <MovieList :data="movieList"></MovieList>
        <div v-if="!isLoading" class="more" @click="loadMore">{{ loadMoreText }}</div>
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
          movieList:[],
          isLoadingMore:false
      }
    },
    computed:{
        isLoading(){
            return this.$store.state.isLoading
        },
        classes(){
            return this.$store.state.isShowDetail ? 'hide':''
        },
        loadMoreText(){
            if(this.start >= 240 ){
                return "已经没有了..."
            }else {
                return this.isLoadingMore ? "正在加载中..." : "点击加载更多"
            }
        }
    },
    methods:{
        loadMore:function(){
            if(this.start >= 240 ){
                return ''
            }
            this.isLoadingMore = true;
            jsonp(`//api.douban.com/v2/movie/top250?apikey=${this.apikey}&start=${this.start}&count=${this.count}`,
                    null,
                    (error,data)=>{
                        this.$store.commit('setLoading',{status:false})
                        if(error){
                            this.isLoadingMore = false;
                            console.log("请求失败.");
                            console.log(error);
                        }else{
                            console.log("请求成功.");
                            this.isLoadingMore = false;
                            const temp = JSON.stringify(this.movieList.concat(data.subjects))
                            this.movieList = JSON.parse(temp)
                            this.start += 20
                        }
                    }
                )
        },
        getData:function(){
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
        }
    },
    beforeMount(){
        
        this.getData()
        
    },

    mounted(){
        this.$store.commit('toggleTab',{tab:"Top"})
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
        >.more {
            font-size: 13px;
            margin-bottom: 50px;
            padding-bottom: 10px;
            text-align: center;
            padding-top: 20px;
            color: #999;
        }
    }

</style>

