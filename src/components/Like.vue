<template>
    <div class="like" :class="classes">
        <transition name="fade">
            <div class="empty" v-if="movieList.length === 0">
                <span class="iconfont icon-empty"></span>
                <div class="desc">暂无收藏哦.</div>
            </div>
        </transition>
        <MovieList v-if="movieList.length !== 0" :data="movieList"></MovieList>
    </div>
    
</template>
<script>
import MovieList from './MovieList'

export default {
    name:"Like",
    components:{
        MovieList
    },

    computed:{
        movieList:function(){
            return this.$store.state.likeList
        },
        classes(){
            return this.$store.state.isShowDetail ? 'hide':''
        }
    },
    

    mounted(){
        this.$store.commit('toggleTab',{tab:"Like"})
    }
}
</script>
<style lang="scss" scoped>
    .like {
        padding:10px;
        padding-bottom: 45px;

        &.hide {
            position: absolute;
            left: -140%;
        }

        .empty {
            text-align:center;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);

            .desc {
                margin-top:5px;
                font-size: 14px;
                color: #999;                
            }

            .icon-empty {
                font-size: 2rem;
                color: #999;
            }
        }

        .fade-enter-active, .fade-leave-active {
            transition: opacity .5s;
        }
        .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
            opacity: 0;
        }
    }
</style>

