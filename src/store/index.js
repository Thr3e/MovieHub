import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isFirstLevel:true,
    left:0,
    title:'电影'
  },
  mutations:{
    changeTbState(state, isShow){
        state.isFirstLevel = isShow;
    },
    changeLeft(state, left){
        state.left = left;
    }
  }
})