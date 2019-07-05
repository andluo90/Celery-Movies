import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
      isLoading:false,
      currentTab:'top',
      likeList:[],
      apikey:'0b2bdeda43b5688921839c8ecb20399b',
      isShowDetail:false,
      movieId:null

    },
    mutations:{
      toggleTab(state,payload){
        state.currentTab = payload.tab
      },
      initLikeList(state,payload){
        state.likeList = payload.data
      },
      like(state,payload){
        
        state.likeList.unshift(payload)
        localStorage.setItem('douban_movies',JSON.stringify(state.likeList))
        console.log("add like done...")
      },
      unlike(state,payload){
        console.log(payload)
        let {likeList} = state
        let movie_index = null;
        for(let [index,movie] of likeList.entries()){
            if(payload.id === movie.id){
                movie_index = index
                break;
            }
        }
        likeList.splice(movie_index,1)
        localStorage.setItem('douban_movies',JSON.stringify(likeList))
        console.log('remove like done...')
      },
      setLoading(state,payload){
        state.isLoading = payload.status
      },
      setIsShowDetail(state,payload){
        state.isShowDetail = payload.isShowDetail
        state.movieId = payload.id
      }
    }
})
