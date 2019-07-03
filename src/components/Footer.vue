<template>
    <div class="footer">
        <div :class="currentTab==='top'?'active':''"  @click="toggleTab('top')">
            <span class="iconfont icon-top250"></span>
            <span>Top250</span>
        </div>
        <div :class="currentTab==='hot'?'active':''" @click="toggleTab('hot')">
            <span class="iconfont icon-75"></span>
            <span>热播</span>   
        </div>
        <div :class="currentTab==='search'?'active':''" @click="toggleTab('search')">
            <span class="iconfont icon-sousuo"></span>
            <span>搜索</span>
        </div>
        <div data-id="xihuan" :class="currentTab==='like'?'active':''"  @click="toggleTab('like')">
            <span class="iconfont icon-xihuan"></span>
            <span>收藏</span>
        </div>
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
          position:sticky;
          bottom:0;
          display: flex;

          > div {
            flex:1;
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

