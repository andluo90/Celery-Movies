<template>
  <div class="Container">
    <section>
      <div id="test">
        test...
      </div>
      
    </section>
    
    <div class="loading" v-if="isLoading">
        <span class="iconfont icon-Loading"></span>
    </div>
    
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Container',
  
  computed:{
    ...mapState(['isLoading'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
    .Container {
        position: relative;

        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform:rotate(360deg);
            }
        }

        > .loading {
            position: absolute;
            top: calc(50vh - 50px);
            left: 50%;
            transform: translateX(-50%);  

            .iconfont {
              display: inline-block;
              font-size: 3em;
              color:lightpink;
              animation: 1s rotate linear infinite;
            }
        }


        #test {
          height: 2000px;
        }

        >section {
          
          overflow:scroll;
          -webkit-overflow-scrolling: touch;

        }
        
        

    }
</style>
