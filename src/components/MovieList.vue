<template>
    <div >
        <transition name="fade">
            <Loading v-if="isLoading" key='loading'></Loading>
            <template v-else  >
                <transition-group name="list" tag="p">
                    <MovieItem v-for="movie in data" :movie="movie" :key="movie.id"></MovieItem>
                </transition-group>
            </template>
        </transition>
        
    </div>
    
</template>
<script>
import jsonp from 'jsonp'
import MovieItem from './MovieItem'
import Loading from './Loading'

export default {
    name:"MovieList",
    components:{
        MovieItem,
        Loading
    },
    props:{
        data:Array
    },
    
    computed:{
        isLoading:function(){
            return this.$store.state.isLoading
        }
    }
    
}
</script>
<style lang="scss" scoped>
    .fade-enter-active, .fade-leave-active {
            transition: opacity .3s;
        }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .list-enter-active, .list-leave-active {
        transition: all .5s linear;
    }
    .list-enter{
        opacity: 0;
        transform: translateX(-50px);
    }
    .list-leave-to {
        opacity: 0;
        transform: translateX(50px);
    }

   
</style>

