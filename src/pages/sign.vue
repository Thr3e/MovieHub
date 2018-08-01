<template>
    <div class="content">
        <div class="title">
            <h1 class="sign-title">欢迎来到放映厅</h1>
        </div>
        <form class="input-wrap">
            <i-input placeholder="账号" @click.native="clearIpt" type="text" :clearable="true"></i-input>
            <i-input placeholder="密码" @click.native="clearIpt" type="password" :clearable="true"></i-input>
            <i-input placeholder="确认密码" @click.native="clearIpt" type="password" :clearable="true"></i-input>
            <i-input placeholder="电话" @click.native="clearIpt" type="text" :clearable="true"></i-input>
            <i-input placeholder="邮箱" @click.native="clearIpt" type="email" :clearable="true"></i-input>
        </form>
        <button type="button" class="singin-btn">注册</button>

        <div class="linkinfo signup-link">
            <router-link to="/signup">注册账号</router-link>
            <span>|</span>
            <router-link to="/signup">忘记密码</router-link>
        </div>
        <div class="linkinfo other-link">
            <router-link to="/signup">微博登录</router-link>
            <span>|</span>
            <router-link to="/signup">微信登录</router-link>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'Sign',
    data(){
        return{}
    },
    methods:{
        clearIpt(e){
            if(e.target.nextElementSibling)
                e.target.nextElementSibling.value = '';
        }
    }
}
</script>

<style>
.input-wrap{
    width: 80%;
    margin: 0 auto;
    border: 1px solid #dcdee2;
    border-radius: 5px;
    overflow: hidden;
}
.content .input-wrap .ivu-input{
    border-radius: 0;
    border: 0;
}

.content .input-wrap .ivu-input{
    border-bottom: 1px solid #dcdee2;
}

.singin-btn{
    margin: 10px 0;
    width: 80%;
    line-height: 30px;
    background: #333;
    outline: 0;
    border: 0;
    color: #f9f7f7;
    border-radius: 5px;
    letter-spacing: 3px;
    font-size: 14px;
}

.signup-link a{
    display: inline-block;
    margin: 0 20px;
    color: #dcdee2;

}

.other-link a {
    display: inline-block;
    margin: 0 20px;
    color: #dcdee2;
}
</style>