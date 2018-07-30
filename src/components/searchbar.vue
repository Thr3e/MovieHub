<template>
    <div id="search-bar">
        <i-input class="search-box" icon="ios-search" placeholder="电影/导演/演员" style="width: 60%"></i-input>
    </div>
</template>

<script>
export default {
    name:'SearchBar',
    data(){
        return{}
    },
}
</script>

<style scoped>

#search-bar{
    width: 100%;
    height: 64px;
    background: olivedrab;
}

.search-box{
    
}
</style>