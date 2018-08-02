<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item, index) in this.movieInfo" :key="index">
            <img :src="item['images']['medium']" alt="">    
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
            console.log(this.data)
            console.log(this.movieInfo)
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

</style>