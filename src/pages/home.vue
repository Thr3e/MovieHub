<template>
    <div class="content">
        Home
        <button type="button" @click="get">获取数据</button>
        <router-link to="/detail">前往详情页</router-link>
    </div>
</template>

<script>
export default {
    name:'Home',
    data(){
        return{}
    },
    methods:{
        get(){
        this.$axios.get(this.HOST + '/movie/in_theaters', {
            params: {
                apikey:'0b2bdeda43b5688921839c8ecb20399b',
                city:'成都',
                start:1,
                count:0
            }
        })
        .then(res => {
            console.log(res['data']['subjects'])
        })
        .catch(error => {
            console.log(error);
        })
    }
    }
}
</script>

<style scoped>

</style>