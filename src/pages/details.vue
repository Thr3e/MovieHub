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
                    <p>上映时间: {{this.details['mainland_pubdate']}}(中国大陆)</p>
                    <p>片长:{{this.details['durations'][0]}}</p>
                </div>
                <div class="rating-info">
                    <p>豆瓣评分</p>
                    <Starbox :rating="this.details['rating']"/>
                    <p>{{this.details['ratings_count']}}人</p>
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
                <div class="comment-box">
                     <Tabs>
                        <TabPane label="评论">
                            <div v-for="item in this.details['popular_comments']" :key="item['author'].id">
                                <img :src="item['author'].avatar">
                                <span class="name">{{item['author'].name}}</span>
                                <div class="star-wrap">
                                    <Icon v-for="(val, index) in 5" :key="index + 1" :type="val > item['rating'].value ? 'ios-star-outline' : 'ios-star'"></Icon>
                                </div>
                                <p class="comment">{{item.content}}</p>
                            </div>
                        </TabPane>
                        <TabPane label="影评">
                            <div v-for="item in this.details['popular_reviews']" :key="item.id">
                                <p class="title">{{item.title}}</p>
                                <img :src="item['author'].avatar">
                                <span class="name">{{item['author'].name}}</span>
                                <div class="star-wrap">
                                    <Icon v-for="(val, index) in 5" :key="index + 1" :type="val > item['rating'].value ? 'ios-star-outline' : 'ios-star'"></Icon>
                                </div>
                                <p class="comment">{{item.summary}}</p>
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from '../components/loading'
import Starbox from '../components/starbox'
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
        swiperSlide,
        Starbox
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

.worker-info img{
    width: 100%;
}

</style>