<template>
    <div >
        <transition name="fade">
            <Loading v-if="isLoading"></Loading>
        </transition>
        <template v-if="!isLoading">
            <template v-for="movie in data" >
                <MovieItem :movie="movie" :key="movie.id"></MovieItem>
            </template>
        </template>
        
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
            transition: opacity .5s;
        }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>

