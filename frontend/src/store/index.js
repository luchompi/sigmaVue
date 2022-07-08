import { createStore } from 'vuex'

export default createStore({
  state: {
    access:null,
    refresh:null,
  },
  getters: {
  },
  mutations: {
    initializeStore(state){
        if(localStorage.getItem('access')){
            state.access = localStorage.getItem('access')
        }
        else{
          state.access = null
        }
    },
    setAccess(state, access){
        state.access = access
        localStorage.setItem('access', access)
    }
  },
  actions: {
  },
  modules: {
  }
})
