<template>
    <div class="content">
        <Tabs>
            <TabPane label="标签一">
                <Loader :isAnimation="isLoading"/>
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
            </TabPane>
            <TabPane label="标签二">标签二的内容</TabPane>
        </Tabs>
        
    </div>
</template>

<script>
import Loader from '../components/loading'
export default {
    name:'Home',
    data(){
        return{
            theaters:[],
            isLoading:true
        }
    },
    components:{
        Loader
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
            this.isLoading = false;
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
    border-bottom: 1px solid #ece9e9;
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
    width: 50%;
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
    color: #de5b7b;
}

.btn-box{
    text-align: center;
    color: #ec9e69;
    width: 25%;
    padding-top: 20px;
}

.btn-box .detail-btn{
    display: block;
    width: 72%;
    margin: 5px auto;
    color: #ec9e69;
    outline: 0;
    border: 1px solid #ec9e69;
    background: #f9f7f7;
    border-radius: 3px;
    letter-spacing: 5px;
}

.btn-box .detail-btn:active{
    color: #f9f7f7;
    background: #ec9e69;
}

#loader{
    margin: 10px auto;
}
</style>