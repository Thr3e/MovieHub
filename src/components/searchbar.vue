<template>
    <div id="search-bar">
        <div class="locat-wrap">
            <p class="location">{{locate}}</p>
            <Icon type="ios-arrow-down"></Icon>
        </div>
        <i-input class="search-box" icon="ios-search" placeholder="电影/导演/演员" style="width: 72%"></i-input>
    </div>
</template>

<script>
export default {
    name:'SearchBar',
    data(){
        return{
            locate:"成都"
        }
    },
}
</script>

<style scoped>

#search-bar{
    width: 100%;
    height: 64px;
    background: olivedrab;
}

.locat-wrap{
    width: 15%;
    float: left;
    margin: 10px 0;
    line-height: 22px;
}

.location{
    display: inline-block;
}

.search-box{
    margin: 10px auto;
}

.search-box input{
    outline: 0;
    height: 22px;
    float: left;
}
</style>