import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/home.vue';
import Search from '../pages/search.vue';
import Mine from '../pages/mine.vue';
import Detail from '../pages/details.vue';
import Sign from '../pages/sign.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/detail/:movieId',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/sign',
      name: 'Sign',
      component: Sign
    }
  ]
})
