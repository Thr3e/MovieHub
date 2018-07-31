<template>
    <div id="search-bar">
        <div class="search-box" v-show="this.$store.state.isFirstLevel">
            <div class="locat-wrap">
                <p class="location">{{locate}}</p>
                <Icon type="ios-arrow-down"></Icon>
            </div>
            <input class="search-ipt" placeholder="电影/导演/演员" style="width: 72%"/>
        </div>
        <div class="title-box" v-show="!this.$store.state.isFirstLevel">
            <button type="button" @click="goBack"><Icon type="ios-arrow-back"></Icon></button>
            <h3>{{this.$store.state.title}}</h3>
        </div>
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
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>

#search-bar{
    width: 100%;
    background: #dbe2ef;
}

.search-box{
    height: 40px;
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

.search-ipt{
    display: inline-block;
    margin: 10px auto;
    outline: 0;
    height: 22px;
    /* float: left; */
}

.title-box{
    height: 40px;
}
</style>