<template>
    <div class="like">
        <MovieList :data="movieList"></MovieList>
    </div>
    
</template>
<script>
import MovieList from './MovieList'

export default {
    name:"Like",
    components:{
        MovieList
    },

    data(){
        return {
            movieList:this.$store.state.likeList
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
    }
</style>

