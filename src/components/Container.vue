<template>
  <div class="Container">
    <section>
      <div id="test">
        test
        <Top></Top>
      </div>
      
    </section>
    <Loading v-if="isLoading"></Loading>
    
    
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Loading from './Loading'
import Top from './Top'
export default {
  name: 'Container',
  components:{
    Loading,
    Top
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
