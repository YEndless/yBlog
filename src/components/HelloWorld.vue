<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/a">
      aaa
    </router-link>
    <el-button>aaa</el-button>
    <el-button type="success">成功按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
