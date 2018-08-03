<template>
    <div class="content">
        <div class="head-wrap">
            <div class="user-info">
                <div class="user-icon">
                    <router-link to="/sign">
                        <img src="../assets/logo.png" alt="">
                    </router-link>
                </div>
                <h1 class="user-name">Thr3e</h1>
                <p class="signature">用户签名</p>
                <div class="back-image">
                    <img src="../assets/user_back.jpg" alt="">
                </div>
            </div>
            <div class="account-info">
                <div class="account-cell">
                    <p class="title">等级</p>
                    <p class="value">vip1</p>
                </div>
                <span>|</span>
                <div class="account-cell">
                    <p class="title">积分</p>
                    <p class="value">1200</p>
                </div>
                <span>|</span>
                <div class="account-cell">
                    <p class="title">电影币</p>
                    <p class="value">30</p>
                </div>
            </div>
        </div>
        <div class="setting-cell">
            <mt-cell title="会员认证"> 
                <span style="color: green">已认证</span>
            </mt-cell>
            <mt-cell title="我的最爱" to="/Mine" is-link></mt-cell>
            <mt-cell title="我的收藏" to="/Mine" is-link></mt-cell>
            <mt-cell title="个人信息" to="/Mine" is-link></mt-cell>
        </div>
        <div class="setting-cell">
            <mt-cell title="设置" to="/Mine" is-link></mt-cell>
            <mt-cell title="关于" to="/Mine" is-link></mt-cell>
        </div>
    </div>
</template>

<script>
export default {
    name:'Mine',
    data(){
        return{}
    }
}
</script>

<style>
.user-info{
    width: 100%;
    height: 200px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    color: #f9f7f7;
}
.user-info img{
    display: block;
    width: 100%;
}
.user-icon{
    width: 72px;
    height: 72px;
    margin: 40px auto 12px;
    border: 3px solid#f9f7f7;
    background: #d4d6d6;
    border-radius: 50%;
    overflow: hidden;
}
.back-image{
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1
}

.back-image img{
    filter: blur(3px)
}

.account-info{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid #dbe2ef;
    border-left: 0;
    border-right: 0;
}

.account-cell{
    margin: 10px auto;
}


.account-cell .title{
    font-size: 14px;
}

.account-cell .value{
    color: rgb(245, 102, 102)
}

.account-info span{
    line-height: 350%;
    width: 1px;
    background: #dbe2ef;
    overflow: hidden;
    color: #dbe2ef
}

.setting-cell{
    margin-top: 20px;
    text-align: left;
    border-top: 1px solid #dbe2ef;
}

.setting-cell .mint-cell-wrapper{
    font-size: 13px;
    border-bottom: 1px solid #dbe2ef;
}
</style>
