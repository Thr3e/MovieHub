<template>
    <div>
        <h2 class="title">{{data.title}}</h2>
        <div class="movie-content">
            <mt-cell :title="item['subject'].title" v-for="(item, index) in movieInfo" :key="index" v-if="index < 5">
                <div class="sub-wrap">
                    <Starbox :rating="item['subject']['rating']"/>
                    <button class="detail-btn" @click="goDetail" type="button" :data-id="item['subject']['id']">详情</button>
                </div>
                <img slot="icon" :src="item['subject']['images']['small']" width="28">
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
        this.$axios.get(this.HOST + '/movie/us_box', {
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