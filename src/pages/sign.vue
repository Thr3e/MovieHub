<template>
    <div>
        <h1 class="sign-title">{{title}}</h1>
        <Signin v-if="isSignin" @getData="setData"/>
        <Signup v-else @getData="setData"/>
        <div class="pwdserve-btns">
            <button type="button" @click="changePage">{{regTitle}}</button>
            <span>|</span>
            <button type="button">忘记密码</button>
        </div>
        <div class="thirdsign-btns">
            <button type="button">
                微博登录
            </button>
            <span>|</span>
            <button type="button">
                微信登录
            </button>
        </div>
    </div>
</template>

<script>
import Signin from '../components/signin'
import Signup from '../components/signup'

export default {
    name:"Sign",
    data(){
        return{
            isSignin:true,
            title:'欢迎来到电影坞',
            regTitle:"注册账号"
        }
    },
    components:{
        Signin,
        Signup
    },
    methods:{
        changePage(e){
            this.isSignin = !this.isSignin;
            if (this.isSignin){
                this.title = '欢迎来到电影坞';
                this.regTitle = '注册账号'
            }else {
                this.title = '欢迎加入电影坞';
                this.regTitle = '返回登录'
            }
        },
        setData(data){
            console.log(data);
        }
    }
}
</script>

<style>
.sign-title{
    margin: 80px auto 40px;

}
.input-box{
    width: 80%;
    margin: 10px auto;
    border: 1px solid #112d4e77;
    border-radius: 5px;
    overflow: hidden;
    border-bottom: 0;
}
.mint-cell-wrapper{
    border-bottom: 1px solid #112d4e77;
}
.sign-btn{
    width: 80%;
    line-height: 40px;
    background: #112d4e;
    color: #f9f7f7;
    letter-spacing: 5px;
    outline: 0;
    border: 0;
    border-radius: 5px;
    font-size: 1.3rem;
    margin-bottom: 20px;
}

.pwdserve-btns{
    position: relative;
    z-index: 3;
}

.thirdsign-btns{
    width: 100%;
    line-height: 50px;
    font-size: 1.2rem;
    position: fixed;
    bottom: 0;
    left: 0;
    color: lightgray;
}
.thirdsign-btns button {
    display: inline-block;
    color: gray;
    margin: 0 30px;
    background: #f9f7f7;
    outline: 0;
    border: 0;
}
.thirdsign-btns button:active{
    color: darkgray;
}

.pwdserve-btns button{
    background: #f9f7f7;
    outline: 0;
    border: 0;
}
</style>