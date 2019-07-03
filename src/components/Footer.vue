<template>
    <div class="footer">
        <div class="active">
            <span class="iconfont icon-top250"></span>
            <span>Top250</span>
        </div>
        <div >
            <span class="iconfont icon-75"></span>
            <span>热播</span>   
        </div>
        <div>
            <span class="iconfont icon-sousuo"></span>
            <span>搜索</span>
        </div>
        <div data-id="xihuan">
            <span class="iconfont icon-xihuan"></span>
            <span>收藏</span>
        </div>
    </div>
        
</template>
<script>
export default {
    name:"Footer"
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

            > span {
              display: block;
              padding-top:5px;
            }
          }
    }
</style>

