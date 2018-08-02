<template>
    <div>
        <!-- <mt-popup
        v-model="popupVisible"
        popup-transition="popup-fade">
        ...
        </mt-popup> -->
        <form action="javascript:;" class="input-box">
            <mt-field 
            placeholder="请输入用户名" 
            v-model="username" 
            :state="state['username']" 
            @blur.native.capture="verify(username, /^[a-zA-Z_].{5,19}$/, 'username')"
            ></mt-field>
            <mt-field 
            placeholder="请输入密码" 
            type="password" 
            v-model="password"
            :state="state['password']" 
            @blur.native.capture="verify(password, /^.{6,20}$/, 'password')"
            ></mt-field>

        </form>
        <button type="button" @click="sendData" class="sign-btn">登录</button>
    </div>
</template>

<script>
    export default {
        name:"Signin",
        data(){
            return{
                username:'',
                email:'',
                password:'',
                confpwd:'',
                tel:'',
                state:{
                    username:'',
                    password:'',
                    confpwd:'',
                    email:'',
                    tel:''
                }
            }
        },
        methods:{
            verify(data, rexg, type){
                if(data.match(rexg))
                this.state[type] = 'success'
                else
                this.state[type] = 'error'
            },
            sendData(){
                this.$emit('getData',{
                    username:this.username,
                    password:this.password,
                    confpwd :this.confpwd,
                    email   :this.email,
                    tel     :this.tel
                })
            }
        }
    }
</script>

<style scoped>

</style>