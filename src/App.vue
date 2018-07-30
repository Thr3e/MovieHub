<template>
  <div id="app">
    <SearchBar/>
    <div class="router">
      <transition name="slide">
        <router-view/>
      </transition>
    </div>
    <TabBar v-show="this.$store.state.isShowTabbar"/>
  </div>
</template>

<script>
import TabBar from './components/tabbar'
import SearchBar from './components/searchbar'
export default {
  name: 'App',
  components:{
    TabBar,
    SearchBar
  }
}
</script>

<style>
.router{
  width: 100%;
  height: 800px;
  position: relative;
  z-index: 10;
}

.content{
  height: calc(100% - 49px - 64px);
  width: 100%;
  padding-top: 50px;
  position: absolute;
  left: 0;
  top: 0;
}

.view-box-enter-active{
  transition: transform .5s linear;
}

.view-box-enter{
  transform: translate(-100%)
}
</style>
