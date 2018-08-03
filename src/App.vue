<template>
  <div id="app">
    <SearchBar/>
    <div class="router">
      <transition name="slide" mode="in-out">
        <router-view/>
      </transition>
    </div>
    <TabBar v-show="this.$store.state.isFirstLevel"/>
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
#app{
  width: 100%;
  height: 100%;
}
.router{
  width: 100%;
  height: calc(100% - 40px);
  overflow: scroll;
  position: relative;
  z-index: 10;
}

.content{
  width: 100%;
  /* height: 100%; */
  padding-bottom: 50px;
  background: #f9f7f7;;
  position: absolute;
  left: 0;
  top: 0;
}

.slide-enter-active{
  transition: transform .5s linear;
}

.slide-enter{
  transform: translate(-100%)
}

</style>
