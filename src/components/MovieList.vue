<template>
    <div >
        <template v-for="movie in data" >
            <MovieItem :movie="movie" :key="movie.id"></MovieItem>
        </template>
    </div>
    
</template>
<script>
import jsonp from 'jsonp'
import MovieItem from './MovieItem'

export default {
    name:"MovieList",
    components:{
        MovieItem
    },
    props:{
        data:Array
    }
    
}
</script>
<style lang="scss" scoped>
    
</style>

