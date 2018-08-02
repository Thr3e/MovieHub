<template>
    <div class="main-body" :style="{'-webkit-overflow-scrolling': scrollMode}">
        <mt-loadmore :top-method="loadTop" ref="loadmore" @top-status-change="handleTopChange">
            <div class="movie-tag" v-for="(val, idx) in this.theaters" :key="idx">
                <img :src="val['images']['small']" class="image"/>
                <div class="movie-info small-font">
                    <h2 class="movie-title">{{val['original_title']}}</h2>
                    <Starbox :rating="val['rating']"/>
                    <p class="directors">导演:{{getNameList(val['directors'])}}</p>
                    <p class="casts">主演:{{getNameList(val['casts'])}}</p>
                </div>
                <div class="btn-box">
                    <p>{{getCollectCount(val['collect_count'])}}人看过</p>
                    <button class="detail-btn" @click="goDetail" type="button" :data-id="val['id']">详情</button>
                </div> 
            </div>
            <div slot="top" class="mint-loadmore-top">
                <Loader :isAnimation="topStatus === 'loading' ? true : false"/>
            </div>
        </mt-loadmore>
    </div>
</template>

<script>
import Loader from '../components/loading'
import Starbox from '../components/starbox'
export default {
    name:'Coming',
    components:{
        Loader,
        Starbox
    },
    created(){
        this.getData(() => {
            setTimeout(() => { 
                this.$emit("getCData", true)
            }, 1500);
        });
    },
    data () {
        return {
            theaters:[],
            isLoading:false,
            scrollMode:"touch", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
            topStatus:''
        }
    },
    methods:{
        handleTopChange(status) {
            this.topStatus = status;
        },
        getData(success){
            this.isLoading = true;
            this.$axios.get(this.HOST + '/movie/coming_soon', {
                params: {
                    apikey:'0b2bdeda43b5688921839c8ecb20399b',
                    city:'成都',
                    start:0,
                    count:0
                }
            })
            .then(res => {
                console.log(res['data']['subjects'])
                this.theaters = res['data']['subjects'];
                this.isLoading = false;
                success && success();
            })
            .catch(error => {
                console.log(error);
            })
        },
        loadTop() {
            this.getData(() => {
                setTimeout(() => {
                    this.$refs.loadmore.onTopLoaded()
                }, 1500);
            });
        },
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
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap; 
}

.movie-info{
    width: 50%;
    color: gray;
}

.movie-info .casts{
    height: 2.4rem;
    line-height: 1.2rem;
    white-space:pre-wrap;

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

.ivu-tabs-bar {
  background: #dbe2ef;
}
</style>