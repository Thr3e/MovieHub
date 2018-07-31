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
                    <p>{{getInfoStr([this.details['year'], this.details['countries'][0], this.details['tags'][0], this.details['tags'][1]])}}</p>
                    <p>上映时间: <span>{{this.details['mainland_pubdate']}}</span>(中国大陆)</p>
                    <p>片长:<span>{{this.details['durations'][0]}}</span></p>
                </div>
                <div class="rating-info">
                    <p>豆瓣评分</p> 
                    <div class="star-box">
                        <p v-if="this.details['rating']['average'] === 0">暂无评分</p>
                        <div v-else>
                            <span>{{this.details['rating']['average']}}</span>
                            <Icon 
                            v-for="index in 5" :key="index" 
                            :type="getIconType(index)"></Icon>
                            <p><span>{{this.details['ratings_count']}}</span>人</p>
                        </div>
                    </div>
                </div>
                <div class="btn-box">
                    <Button type="warning" ghost>想看</Button>
                    <Button type="warning" ghost>
                        看过
                        <Icon v-for="idx in 5" :key="idx" type="ios-star-outline"></Icon>
                    </Button>
                </div>
                <div class="summary-box">
                    <p>剧情简介</p>
                    <p class="summary">{{this.details['summary']}}</p>
                </div>
                <div class="worker-info">
                    <p class="title">影人</p>
                    <swiper :options="swiperOption">
                        <swiper-slide v-for="(item, index) in this.details['directors']" :key="index + 1">
                            <img :src="item['avatars']['small']" alt="">
                            <p>{{item['name']}}</p>
                            <span>导演</span>
                        </swiper-slide>
                        <swiper-slide v-for="(item, index) in this.details['casts']" :key="index + 100">
                            <img :src="item['avatars']['small']" alt="">
                            <p>{{item['name']}}</p>
                            <span>演员</span>
                        </swiper-slide>
                        <swiper-slide>更多</swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from '../components/loading'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name:'Detail',
    data(){
        return{
            details:{},
            isLoading:true,
            swiperOption: {
                slidesPerView: 4,
                spaceBetween: 3,
                freeMode: true
            }
        }
    },
    components:{
        Loading,
        swiper,
        swiperSlide
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
        },
        getIconType(idx){
            let stars = this.details['rating']['stars'] / 10;
            if (idx <= stars) {
                return 'ios-star'
            }else if (idx > stars && idx < stars + 1){
                return 'ios-star-half'
            }else if (idx >= stars + 1){
                return 'ios-star-outline'
            }
        },
    }
}
</script>

<style scoped>
.content{
    padding: 10px 20px 50px;
}

.title-wrap{
    text-align: left;
}

</style>