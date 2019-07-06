<template>
    <div class="search" :class="classes">
        <div class="wrap">
                <div class="search-area">
                    <input type="search" v-model="value"  placeholder="搜索电影">
                    <span class="button searching"  >搜索</span>
                </div>
                <div class="search-reslut">
                    <div class="container">
                        <!-- <MovieList :data="movieList"></MovieList> -->
                        <div class="error">
                            <div>
                                <span class="iconfont icon-error"></span>
                            </div>
                            <div>豆瓣搜索接口异常!</div>
                            <div>请等其恢复，非常报歉!</div>
                            
                            
                        </div>
                        
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
        }
    },
    computed:{
        classes(){
            return this.$store.state.isShowDetail ? 'hide':''
        }
    },
    methods:{
        search:function(){
            jsonp(`//api.douban.com/v2/movie/search?apikey=${this.apikey}&q=${this.value}`,
                null,
                (error,data)=>{
                    if(error){
                        console.log("搜索失败.");
                        console.log(error);
                    }else{
                        success = true
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
        padding-bottom: 45px;
        &.hide {
            position: absolute;
            left: -140%;
        }
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

    .search-reslut {
        .error {

            .icon-error {
                font-size: 1.8rem;
            }
            color:#999;
            text-align: center;
            font-size: 1.2em;
             margin-top: 120px;
             >div {
                 margin-bottom: 5px;
             }
        }
    }

</style>

