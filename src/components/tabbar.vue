<template>
    <div id="tab-bar">
        <div class="menu-wrap">
            <ul class="menu-list">
                <li v-for="(link, idx) in links" :key="idx" @click="curIdx = idx">
                    <router-link :to="link.href" exact>
                        {{link.title}}
                        <Icon :type="iconType[idx]" class="iconfont"></Icon>
                    </router-link>
                </li>
            </ul>
            <div class="back-box" :style="{left : this.$store.state.left}"></div>
        </div>
    </div>
</template>

<script>
export default {
    name:'TabBar',
    data(){
        return{
            curIdx:0,
            left:0,
            links:[
                {title:'主页', href:'/'},
                {title:'排行榜', href:'/search'},
                {title:'我的', href:'/mine'}
            ],
            routePath : {
                '/':'主页',
                '/search':'排行榜',
                '/mine':'我的',
                '/detail':'详情'
            },
            iconType:[
                'ios-home',
                'ios-film',
                'ios-person'
            ]
        }
    },
    watch:{
        curIdx(newVal){
            this.$store.commit('changeLeft', parseFloat(newVal) * 100 / 3 + '%')
        },
        $route(to, from){
            let fullPath = to.fullPath;
            if((to.fullPath).match('/detail') || (to.fullPath).match('/sign')) {
                this.$store.commit('changeTbState', false)
            }else{
                this.$store.commit('changeTbState', true)
            }
        }
    },
    methods:{
        a(){
            console.log(10)
        }
    }
}
</script>

<style scoped>
.menu-wrap{
    width: 100%;
    background: #3f72af;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
}
.menu-list{
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
}
.menu-list li{
    width: calc(100% / 3);
    height: 100%;
    overflow: hidden;
    position: relative;
}
.menu-list a{
    display: block;
    color: #f9f7f7;
    width: 100%;
    height: 49px;
    line-height: 20px;
    padding-top: 29px;
    position: relative;
    z-index: 5;
    font-size: 14px;
}

.menu-wrap .back-box{
    width: calc(100% / 3);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #112d4e;
    transition: left .5s linear
}

.iconfont{
    position: absolute;
    z-index: 8;
    overflow: hidden;
    top: 4px;
    left: 50%;
    transform: translateX(-50%);
    color:#f9f7f7;
    font-size: 25px;
}
</style>