<template>
    <div class="content">
        <div class="movie-tag" v-for="(val, idx) in theaters" :key="idx">
            <img :src="val['images']['small']" class="image"/>
            <div class="movie-info">
                <h2 class="movie-title">{{val['original_title']}}</h2>
                <div class="star-box">
                    <p v-if="val['rating']['average'] === 0">暂无评分</p>
                    <div v-else>
                        <Icon v-for="index in 5" :key="index" :type="getIconType(index, val['rating']['stars'] / 10)"></Icon>
                        <span>{{val['rating']['average']}}</span>
                    </div>
                </div>
                <p class="directors">导演:<span>{{getNameList(val['directors'])}}</span></p>
                <p class="casts">主演:<span>{{getNameList(val['casts'])}}</span></p>
            </div>
            <div class="btn-box">
                <p><span>{{getCollectCount(val['collect_count'])}}</span>人看过</p>
                <button class="detail-btn" @click="goDetail" type="button" :data-id="val['id']">详情</button>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    name:'Home',
    data(){
        return{
            theaters:[]
        }
    },
    created(){
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
                this.theaters = res['data']['subjects'];
            })
            .catch(error => {
                console.log(error);
            })
    },
    methods:{
        getNameList(arr){
            let nameArr = [];
            arr.forEach((val) => {
                if(val['name']) nameArr.push(val['name'])
            })
            return nameArr.join('/')
        },
        getIconType(idx, stars){
            if (idx <= stars) {
                return 'ios-star'
            }else if (idx > stars && idx < stars + 1){
                return 'ios-star-half'
            }else if (idx >= stars + 1){
                return 'ios-star-outline'
            }
        },
        getCollectCount(count){
            if (count < 10000) {
                return count
            } else if (count >= 10000 && count < 100000){
                return (count / 10000).toFixed(2) + '万'
            } else if (count >= 100000 && count < 1000000) {
                return (count / 10000).toFixed(1) + '万'
            } else {
                return (count / 10000).toFixed(0) + '万'
            }
        },
        goDetail(e){
            this.$router.push({
                name:"Detail",
                params:{movieId:e.target.dataset.id}
            });
        }
    }
}
</script>

<style scoped>
.movie-tag{
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    /* background: orangered; */
    text-align: left;
    border-bottom: 1px solid lightgray;
    padding: 10px 0;
}

.movie-tag .image{
    display: block;
    width: 20%;
    margin: 0 10px;
}

.movie-tag p{
    font-size: .6rem;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
}

.movie-info{
    width: 45%;
    color: gray;
}

.movie-info .casts{
    height: 2.4rem;
    line-height: 1.2rem;
    white-space:pre-wrap
}

.movie-info .movie-title{
    color: #333333;
}

.movie-info .star-box{
    color: orange;
}

.btn-box{
    text-align: center;
    color: red;
    width: 33%;
    padding-top: 20px;
}

.btn-box .detail-btn{
    display: block;
    width: 80%;
    margin: 5px auto;
    color: red;
    outline: 0;
    border: 1px solid red;
    background: #ffffff;
    border-radius: 3px;
    letter-spacing: 5px;

}

</style>

/**
alt:"https://movie.douban.com/subject/25882296/"
casts:(3) [{…}, {…}, {…}]
collect_count:70299
directors:[{…}]
durations:["132分钟"]
genres:(3) ["动作", "悬疑", "古装"]
has_video:false
id:"25882296"
images:{small: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2526405034.jpg", large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2526405034.jpg", medium: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2526405034.jpg"}
mainland_pubdate:"2018-07-27"
original_title:"狄仁杰之四大天王"
pubdates:["2018-07-27(中国大陆)"]
rating:{max: 10, average: 6.6, details: {…}, stars: "35", min: 0}
subtype:"movie"
title:"狄仁杰之四大天王"
year:"2018" 
*/