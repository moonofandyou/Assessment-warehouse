<template>
    <div class="container">
        <div class="show">
            <textarea placeholder="请输入要发送的信息" class="message" v-model="content"></textarea>
            <button class="btn1" @click="send(second)">立即发送信息</button>
             <div class="timeset">
                <label class="second"><input type="text" class="set" placeholder="1" v-model="second"/><span>秒后</span></label>
                <button class="btn2" @click="send(second)">延时发送信息</button>
             </div>
            
        </div>
    </div>
</template>

<script>
import {ref,reactive} from 'vue'
import axios from 'axios'
export default {
    name:'Card',
    setup(){
        let content = ref('')
        let second = ref(0)
        function send(second){  //发送消息函数
            setTimeout(()=>{
                axios.post('api/httpclient/sendCard',
                {
                    text:content.value,
                },{
                    headers:{
                    'Content-Type':'application/x-www-form-urlencoded',
                    'Authorization':`Bearer ${localStorage.getItem('token')}`  //从本地存储中取出token
                    }
                }).then((res)=>{                  //请求成功
                console.log(res.data.data)
                }).catch((error)=>{               //请求失败
                console.log(error)
                })
            },second*1000)
        }
        function delay(){
            
        }

        return{
            content,
            second,
            send,
            delay
        }
    }
}
</script>
    
<style scoped lang="less">
    .container{
        width: 300px;
        height: 300px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        border: 1px solid black;
        border-radius: 10px;
        background-size: cover;
        .show{
            height: 100%;
            display: flex;
            flex-direction: column;
            background-color: pink;
            .message{
                height: 30%;
                border-radius: 10px;
                text-align: center;
            }
            .btn1{
                height: 15%;
                width: 50%;
                margin: 20px auto;
                margin-bottom: 0;
            }
            .timeset{
                height: 15%;
                width: 50%;
                margin: 20px auto;
               

                // background-color: red;
                .second{
                    width: 50%;
                    display: flex;
                    margin: 0 auto;
                    // background-color: green;
                    .set{
                        display: inline-block;
                        width: 20%;
                        flex: 1;
                        text-align: center;
                    }
                    span{
                        flex: 1;
                        font-weight: 300;
                    }
                }
                .btn2{
                    width: 100%;
                    height: 90%;
                    margin-top: 10px;
                }
            }
             .cart-list-con5 {
            width: 12.5%;

            .mins {
              border: 1px solid #ddd;
              border-right: 0;
              float: left;
              color: #666;
              width: 6px;
              text-align: center;
              padding: 8px;
            }

            input {
              border: 1px solid #ddd;
              width: 40px;
              height: 32px;
              float: left;
              text-align: center;
              font-size: 14px;
            }

            .plus {
              border: 1px solid #ddd;
              border-left: 0;
              float: left;
              color: #666;
              width: 6px;
              text-align: center;
              padding: 8px;
            }
          }

        }
    }
</style>