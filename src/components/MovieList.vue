<template>
    <div >
        
        <Loading v-if="isLoading"></Loading>
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
    
</style>

