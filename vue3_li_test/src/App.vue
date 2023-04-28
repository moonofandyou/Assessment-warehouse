<template>
  <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {ref,reactive,computed} from 'vue'
import Login from '@/views/Login.vue'
export default {
  components: { Login },
  name: 'App',
  setup(){
    let name = ref('wuyue')
    let age = '19'
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
