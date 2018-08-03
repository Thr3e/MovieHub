<template>
    <div id="search-bar">
        <div class="search-box" v-show="this.$store.state.isFirstLevel">
            <div class="locat-wrap" @click="popupVisible = !popupVisible">
                <p class="location">{{locate}}</p>
                <Icon type="ios-arrow-down"></Icon>
            </div>
            <input class="search-ipt" placeholder="电影/导演/演员" style="width: 72%"/>
        </div>
        <div class="title-box" v-show="!this.$store.state.isFirstLevel">
            <button class="back-btn" type="button" @click="goBack"><Icon type="ios-arrow-back"></Icon></button>
            <h3>{{this.$store.state.title}}</h3>
        </div>
        <mt-popup
        v-model="popupVisible"
        position="bottom">
            <div class="locate-picker">
                <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
            </div>
        </mt-popup>
    </div>
</template>

<script>
export default {
    name:'SearchBar',
    data(){
        return{
            locate:"成都",
            popupVisible:false,
            locateData:[],
            slots: [{
                flex: 1,
                values: [],
                className: 'slot1',
                textAlign: 'center'
            }, {
                divider: true,
                content: '-',
                className: 'slot2'
            }, {
                flex: 1,
                values: [],
                className: 'slot3',
                textAlign: 'center'
            }]
        }
    },
    created(){
        this.$axios.get('../../static/data/cityInfo.json').then(res => {
            let data = res['data'],
                province = [];
            
            data.forEach(element => {
                province.push(element['province'])
            });
            this.slots[0]['values'] = province;
            this.slots[2]['values'] = data[0]['citys']

        }).catch(err => {console.log(err)})
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        },
        onValuesChange(picker, values) {
            
        }
    }
}
</script>

<style>

#search-bar{
    width: 100%;
    background: #dbe2ef;
    overflow: hidden;
}

.search-box{
    height: 40px;
}

.locat-wrap{
    width: 15%;
    float: left;
    margin: 10px 0;
    line-height: 22px;
}

.location{
    display: inline-block;
}

.search-ipt{
    display: inline-block;
    margin: 10px auto;
    outline: 0;
    height: 22px;
}

.title-box{
    height: 40px;
    position: relative;
    line-height: 40px;
}

.back-btn{
    outline: 0;
    border: 0;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: #dbe2ef;
}

.mint-popup-bottom{
    width: 100%;
}
</style>