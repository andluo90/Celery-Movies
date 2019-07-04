<template>
    <div class="search">
        <div class="wrap">
                <div class="search-area">
                    <input type="search" v-model="value"  placeholder="搜索电影">
                    <span class="button" :class="classes"  @click="search">搜索</span>
                </div>
                <div class="search-reslut">
                    <div class="container">
                        <MovieList :data="movieList"></MovieList>
                    </div>
                    
                </div>           
            </div>
    </div>
    
</template>
<script>
import MovieList from './MovieList'
import jsonp from 'jsonp'

export default {
    name:"Search",
    components:{
        MovieList
    },
    data(){
        return {
            apikey:'0b2bdeda43b5688921839c8ecb20399b',
            value:'',
            movieList:[],
            isSearching:false
        }
    },
    computed:{
        classes:function(){
            return this.isSearching ? 'searching':''
        }
    },
    methods:{
        search:function(){
            console.log(`click search...`);
            this.isSearching = true
            jsonp(`//api.douban.com/v2/movie/search?apikey=${this.apikey}&q=${this.value}`,
                null,
                (error,data)=>{
                    
                    if(error){
                        console.log("搜索失败.");
                        console.log(error);
                    }else{
                        console.log("搜索成功.");
                        this.movieList = data.subjects
                    }
                }
            )
            
            
        }
    },
    mounted(){
        this.$store.commit('toggleTab',{tab:"Search"})
    }
}
</script>
<style lang="scss" scoped>
    .search {
        padding:10px;
    }
    .search-area {
        color: #333;
        padding-bottom: 10px;
        border-bottom: 1px solid #ccc;
        position: relative;

        input {
            width: calc(100% - 50px);
            padding: 8px;
            background-color: #eee;
            border: none;
            border-radius: 2px;
            box-shadow: none;
            outline: none;
        }

        .button {
            position: absolute;
            right: 0;
            padding: 8px 10px;
            background: #FF5722;
            color: #fff;
            border-radius: 2px;

            &.searching {
                background: #999;
                
            }
            
        }
    }

</style>

