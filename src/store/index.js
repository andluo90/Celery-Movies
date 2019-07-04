import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
      isLoading:false,
      currentTab:'top'
    },
    mutations:{
      toggleTab(state,payload){
        state.currentTab = payload.tab
      }
    }
})
