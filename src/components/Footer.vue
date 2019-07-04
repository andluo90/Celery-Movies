<template>
    <div class="footer">
        <router-link to="/">
            <div class="wrapper" :class="currentTab==='Top'?'active':''"  @click="toggleTab('Top')">
                <span class="iconfont icon-top250"></span>
                <span>Top250</span>
            </div>
        </router-link>
        <router-link to="hot">
            <div class="wrapper" :class="currentTab==='Hot'?'active':''" @click="toggleTab('Hot')">
                <span class="iconfont icon-75"></span>
                <span>热播</span>   
            </div>
        </router-link>
        <router-link to="search">
            <div class="wrapper" to="/search" :class="currentTab==='Search'?'active':''" @click="toggleTab('Search')">
                <span class="iconfont icon-sousuo"></span>
                <span>搜索</span>
            </div>
        </router-link>
        <router-link to="like">
            <div class="wrapper" to="/like" data-id="xihuan" :class="currentTab==='Like'?'active':''"  @click="toggleTab('Like')">
                <span class="iconfont icon-xihuan"></span>
                <span>收藏</span>
            </div>
         </router-link>
    </div>
        
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:"Footer",
    
    computed:{
        ...mapState(['currentTab'])
    },
    
    methods:{
        toggleTab(value){
            if(this.currentTab !== value){
               const payload = {tab:value}
               this.$store.commit('toggleTab',payload)
               
            }
        }
    }
    
}
</script>
<style lang="scss" scoped>
    .footer {
          border-top:1px solid #ccc;
          height: 50px;
          width: 100%;
          position:fixed;
          bottom:0;
          display: flex;
          background: #fff;

          > a {
              flex:1;
              text-decoration: none;
              cursor: default;
              

          }

          .wrapper {
            text-decoration: none;
            color:#333;
            
            text-align: center;
            

            &.active {
                color:#ff5722;
            }

            > span {
              display: block;
              padding-top:5px;
            }
          }
    }
</style>

