<template>
  <div>
    <div class="header">
      <el-row>
        <el-col :span="2"><div class="header-content"></div></el-col>
        <el-col :span="4"><div class="header-content">ywyqqq</div></el-col>
        <el-col :span="6"><div class="header-content"></div></el-col>
        <el-col :span="2">
          <router-link to="/timeline">
            <div class="header-content">首页</div>
          </router-link>
        </el-col>
        <el-col :span="2">
          <router-link to="/timeline">
            <div class="header-content">博客</div>
          </router-link>
        </el-col>
        <el-col :span="2">
          <router-link to="/board">
            <div class="header-content">留言板</div>
          </router-link>
        </el-col>
        <el-col :span="2">
          <router-link to="/timeline">
            <div class="header-content">时间线</div>
          </router-link>
        </el-col>
        <el-col :span="2">
          <router-link to="/aboutme">
            <div class="header-content">关于</div>
          </router-link>
        </el-col>
        <el-col :span="2"><div class="header-content">aaa</div></el-col>
      </el-row>
    </div>
    <div style="margin-top: 1rem;">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.header{
  border-bottom: 1px solid black;
  padding-bottom: 1rem;
}
.header-content{
  font-size: 1rem ;
  font-weight: 700 ;
  min-height: 1rem;
}
a {
  text-decoration: none;
  color: black;
}

.router-link-active {
  text-decoration: none;
}
</style>
