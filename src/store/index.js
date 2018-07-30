import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowTabbar:true,
    left:0
  },
  mutations:{
    changeTbState(state, isShow){
        state.isShowTabbar = isShow;
    },
    changeLeft(state, left){
        state.left = left;
    }
  }
})