<template>
    <mt-swipe :auto="2000" class="newmovie-content">
        <mt-swipe-item v-for="(item, index) in this.movieInfo" :key="index">
		    <div class="avatar">
                <img :src="item['images']['medium']" width="50%"/>
            </div>
            <div class="back">
                <img width="100%" :src="item['images']['medium']"/>
            </div>
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {
    name:"NewMovie",
    data(){
        return{
            data:{},
            movieInfo:[]
        }
    },
    created(){
        this.$axios.get(this.HOST + '/movie/new_movies', {
            params: {
                apikey:'0b2bdeda43b5688921839c8ecb20399b',
                start:0,
                count:5
            }
        })
        .then(res => {
            this.data = res['data'];
            this.movieInfo = this.data['subjects']
        })
        .catch(error => {
            console.log(error);
        })
    },
    methods:{
        
    }
}
</script>

<style scope>
.newmovie-content{
    width: 100%;
    height: calc(100% - 36px);
    position: relative;
    overflow: hidden;
    background-color: rgba(7,17,27,0.5);
}
.back{
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 0;
    transform: translateY(-50%);
    width: 100%;
    filter: blur(10px);
}
.avatar{
    margin:20px auto;
    position: relative;
    z-index: 3;
}
</style>