<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Footer ></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components:{
    Footer
  },
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
</style>
