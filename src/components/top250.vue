<template>
    <div>
        <h2 class="title">{{data.title}}</h2>
        <div class="movie-content">
            <mt-cell :title="item.title" v-for="(item, index) in movieInfo" :key="index">
                <div class="sub-wrap">
                    <Starbox :rating="item['rating']"/>
                    <button class="detail-btn" @click="goDetail" type="button" :data-id="item['id']">详情</button>
                </div>
                <img slot="icon" :src="item['images']['small']" width="28">
            </mt-cell>
        </div>
    </div>
</template>

<script>
import Starbox from './starbox'
export default {
    name:"Top250",
    data(){
        return{
            data:{},
            movieInfo:[]
        }
    },
    components:{
        Starbox
    },
    created(){
        this.$axios.get(this.HOST + '/movie/top250', {
            params: {
                apikey:'0b2bdeda43b5688921839c8ecb20399b',
                start:0,
                count:5
            }
        })
        .then(res => {
            this.data = res['data'];
            this.movieInfo = this.data['subjects']
            console.log(this.movieInfo)
        })
        .catch(error => {
            console.log(error);
        })
    },
    methods:{
        goDetail(e){
            this.$router.push({
                name:"Detail",
                params:{movieId:e.target.dataset.id}
            });
        }
    }
}
</script>

<style>
.mint-cell-title{
    text-align: left;
    padding: 10px 0;

}

</style>