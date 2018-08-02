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
            <mt-field 
            placeholder="请确认密码" 
            type="password" 
            v-model="confpwd"
            :state="state['confpwd']" 
            @blur.native.capture="verify(confpwd, password, 'confpwd')"
            ></mt-field>
            <mt-field 
            placeholder="请输入邮箱" 
            type="email" 
            v-model="email" 
            :state="state['email']" 
            @blur.native.capture="verify(email, /^.+@.+\..+$/, 'email')"
            ></mt-field>
            <mt-field 
            placeholder="请输入电话" 
            type="tel" 
            v-model="tel" 
            :state="state['tel']" 
            @blur.native.capture="verify(tel, /^1[0-9]{10}$/, 'tel')"
            ></mt-field>
        </form>
        <button type="button" @click="sendData" class="sign-btn">注册</button>
        
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
                if(data.match(rexg) && rexg !== '')
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