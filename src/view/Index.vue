<template>
  <div class="mian-page">
    <img src="http://qdgv54vzx.bkt.clouddn.com/b24.jpg" style="z-index: -1 ; height: 100vh ;position: fixed ;width: 100%;background-repeat: no-repeat;">
    <el-container>
      <el-header>
        <Header class="main-header">
          <el-row :gutter="20" class="main-header-row">
            <el-col :span="1">
              <el-button id="elbtn" @click="collapseChage" type="primary">
                <i v-if="!isCollapse" class="el-icon-s-fold"></i>
                <i v-else class="el-icon-s-unfold"></i>
              </el-button>
            </el-col>
            <el-col :span="9" style="min-height: 1px ;">
            </el-col>
            <el-col :span="8">
              <div class="jpheader">
                ywyqqq
              </div>
            </el-col>
            <el-col :span="5" class="grid-content" style="text-align: right ;">
              <router-link to="/about">
                  <span style="text-align: right ; color: white ;">关于</span>
              </router-link>
            </el-col>
          </el-row>
        </Header>
      </el-header>
      <el-container>
        <div class="navigation" style="opacity: 0.6">
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" >
            <router-link to="/">
              <el-menu-item index="0">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
              </el-menu-item>
            </router-link>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">归档</span>
              </template>
              <el-menu-item index="1-1" style="text-align: left ; margin-left: 2rem ;">标签</el-menu-item>
              <el-menu-item index="1-2" style="text-align: left ; margin-left: 2rem ;">分类</el-menu-item>
              <el-menu-item index="1-3" style="text-align: left ; margin-left: 2rem ;">时间线</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">文章</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">留言</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-setting"></i>
              <span slot="title">关于</span>
            </el-menu-item>
          </el-menu>
        </div>
        <el-container style="min-height: 800px ;">
          <el-main class="main-style">
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      isCollapse: true,
      pd: true,
      dialogTableVisible: false,
      menu: []
    }
  },

  methods: {
    collapseChage () {
      this.isCollapse = !this.isCollapse
    },

    signout () {
      localStorage.removeItem('information')
      localStorage.removeItem('Token')
      this.$router.push('/login')
    },

    adduser () {
      this.$router.push('/user')
    },

    handleOpen (key, keyPath) {
      // console.log(key, keyPath);
    },

    handleClose (key, keyPath) {
      // console.log(key, keyPath);
    }
  },

  created () {
  }
}
</script>

<style scoped>
  .mian-page {
    width: 100%;
    height: 100%;
  }

  .jpheader {
    font-weight: 700;
    color: white;
    font-size: 1rem;
    text-align: left;
    margin-left: 0.5rem;
  }

  .navigation>>>.el-menu {
    border-right: none;
  }

  .navigation>>>.el-submenu .el-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0;
    min-width: 10px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 9rem;
    text-align: left;
  }
  .el-header,
  .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0;
  }

  .main-header {
    margin-left: 0;
    margin-right: 0;
    background: #4c5e6a;
    opacity: 0.9;
    height: 8vh;
  }
  .el-button--primary{
    background-color: #4c5e6a;
    border: 0 ;
  }
  #elbtn {
    font-size: 20px ;
  }
  #elbtn  button:focus{
    outline: inherit;
  }
  .main-header-row {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .main-style {
    border-bottom: 1px solid #b3c0d1;
    /*border-left: 1px solid #b3c0d1;*/
    /*border-bottom: 1px solid #b3c0d1;*/
  }

  a {
    text-decoration: none;
  }

  .router-link-active {
    text-decoration: none;
  }

  >>>.el-menu-item:focus,
  .el-menu-item:hover {
    background-color: white;
  }

  >>>.el-dialog {
    width: 65%;
  }

  .el-button+.el-button {
    margin-left: 0;
  }

  >>>.el-submenu__icon-arrow {
    right: 3px;
  }

  .grid-content {
    min-height: 30px;
  }

  .user-setting {
    text-align: right;
    display: block;
    right: 15px;
  }

  .user-setting-family {
    font-weight: 700;
    color: white;
  }
</style>
