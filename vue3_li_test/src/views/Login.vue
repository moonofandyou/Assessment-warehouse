<template>
  <div class="container">
    <div class="view">
        <div class="show">
            <label class="users"><span>用户名：</span><input type="text" v-model="username" /></label>
            <label class="pwd"><span>密码：</span><input type="password" v-model="password" /></label>
            <button class="btn" @click="login" >登录</button>
        </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router'
export default {
    name:'Login',
    setup(){
        const router = useRouter()  //编程式导航
        let username = ref('shitian')
        let password = ref('123')
        function login(){  //登录函数
            axios.post('api/login',{
                username:username.value,
                password:password.value
            }).then((res)=>{
                console.log(res.data)
                localStorage.setItem('token',res.data.token)  //成功后本地存储保存token
                router.push('card')
            }).catch((error)=>{
                console.log(error)
            })
        }
        return {
            username,
            password,
            login
        }
    }
}
</script>

<style scoped>
    .view{
        width: 400px;
        height: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        border: 1px solid black;
        border-radius: 10px;
        background-color: pink;
    }
    .show{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-75%,-50%);
        width: 200px;
        height: 200px;
        font-size: 18px;
        font-weight: 600;
        }
    .users{
        height: 33.3%;
        width: 300px;
        display: flex;
        align-items: center;
    }
    .users>input{
        height: 50%;
        flex: 3;
    }
    .user>span{
        flex: 1;
    }
    .pwd{
        height: 33.3%;
        width: 300px;
        display: flex;
        align-items: center;
    }
    .pwd>input{
        height: 50%;
        flex: 3;
    }
    .pwd>span{
        flex: 1;
    }
    .btn{
        display: inline-block;
        height: 20%;
        width: 50%;
        margin-top: 10px;
        margin-left: 100px;
        border-radius: 5px;
    }
</style>