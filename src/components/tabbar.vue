<template>
    <div id="tab-bar">
        <div class="menu-wrap">
            <ul class="menu-list">
                <li v-for="(link, idx) in links" :key="idx" @click="curIdx = idx">
                    <router-link :to="link.href" exact>
                        {{link.title}}
                    </router-link>
                    <Icon :type="iconType[idx]" class="iconfont"></Icon>
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
                {title:'搜索', href:'/search'},
                {title:'我的', href:'/mine'}
            ],
            routePath : {
                '/':'主页',
                '/search':'搜索',
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
            if((to.fullPath).match('/detail')) {
                this.$store.commit('changeTbState', false)
            }else{
                this.$store.commit('changeTbState', true)
            }
        }
    }
}
</script>

<style scoped>
.menu-wrap{
    width: 100%;
    background: mediumpurple;
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
    color: azure;
    width: 100%;
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
    background: orangered;
    transition: left .5s linear
}

.iconfont{
    position: absolute;
    z-index: 8;
    overflow: hidden;
    top: 4px;
    left: 50%;
    transform: translateX(-50%);
    color:azure;
    font-size: 25px;
}
</style>