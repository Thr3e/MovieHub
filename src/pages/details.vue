<template>
    <div class="content">
        <Loading :isAnimation="true" v-if="isLoading"/>
        <div v-else>
            <div class="image">
                <img :src="this.details['images']['medium']">
            </div>
            <div class="title-wrap">
                <h1 class="title">{{this.details['title']}}</h1>
                <div class="time-info">
                    <p>{{getInfoStr([this.details['year'], this.details['year']])}}</p>
                    <p>上映时间: <span>{{this.details['mainland_pubdate']}}</span>(中国大陆)</p>
                    <p>片长:<span>{{this.details['durations'][0]}}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from '../components/loading'
export default {
    name:'Detail',
    data(){
        return{
            details:{},
            isLoading:true
        }
    },
    components:{
        Loading,
    },
    created(){
        this.$axios.get(this.HOST + '/movie/subject/' + this.$route.params.movieId, {
            params:{
                apikey:'0b2bdeda43b5688921839c8ecb20399b',
            }
        })
        .then(res => {
            console.log(res.data)
            this.isLoading = false;
            this.details = res['data'];
        })
        .catch(error => {
            console.log(error);
        })
    },
    methods:{
        getInfoStr(arr){
            return arr.join('/');
        }
    }
}
</script>

<style scoped>
.content{
    padding: 10px 20px 50px;
}
#loader{
    margin: 0 auto;
}

.title-wrap{
    text-align: left;
}

</style>