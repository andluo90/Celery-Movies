<template>
  <div class="Container">
    <section>
      <div id="test">
        test...
      </div>
      
    </section>
    <Loading v-if="isLoading"></Loading>
    
    
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Loading from './Loading'
export default {
  name: 'Container',
  components:{
    Loading
  },
  computed:{
    ...mapState(['isLoading'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
    .Container {
        position: relative;

        #test {
          height: 2000px;
        }

        >section {
          overflow:scroll;
          -webkit-overflow-scrolling: touch;
        }

    }
</style>
