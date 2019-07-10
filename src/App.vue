<template>
  <div id="app">
    <transition name="fade">
      <Detail v-if="isShowDetail"></Detail>
    </transition>

    <keep-alive>
      <router-view/>
    </keep-alive>
    <Footer ></Footer>
    
    
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Detail from '@/components/Detail'
export default {
    name: 'App',
    components:{
      Footer,
      Detail
    },
    computed:{
      isShowDetail:function(){
        return this.$store.state.isShowDetail
      }
    },

    mounted(){
        //初始化 like list..
        let data = localStorage.getItem('douban_movies')
        if(data !== null){
          data = JSON.parse(data)
          this.$store.commit('initLikeList',{data})
        }else {
          console.log(`like list is null...`)
        }

    }
  
}
</script>
<style>
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    a {
      text-decoration: none;
      color:#333;
    }

    #app {
      font-size: 12px;
      line-height: 1.2;
      font-family: "Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;

      
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
