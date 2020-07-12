<template>
  <div id="header" class="">
    <div class="header-nav container hidden-xs">
      <div>
        aaaaaaaaa
      </div>
    </div>
    <div class="header-nav-m container-fuild visible-xs">
      <div class="header-nav-m-menu text-center">
        {{menuName}}
        <div
          class="header-nav-m-menu-wrapper"
          data-toggle="collapse"
          data-target="#menu"
          @click="menuClick"
        >
          <span :class="menuClass"></span>
        </div>
        <!-- 导航内容 -->
        <div id="menu" class="header-nav-m-wrapper collapse">
          bbb
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      navIndex: 0,
      menuName: '首页',
      menuClass: 'glyphicon glyphicon-menu-down'
    }
  },
  methods: {
    navClick (index, name) {
      this.navIndex = index
      this.menuName = name
    },
    menuClick () {
      if (this.menuClass === 'glyphicon glyphicon-menu-down') {
        this.menuClass = 'glyphicon glyphicon-menu-up'
      } else {
        this.menuClass = 'glyphicon glyphicon-menu-down'
      }
    }
  }
}
</script>
<style scoped>
#header .header-top span {
  margin: 0 8px;
}
#header .header-nav {
  height: 110px;
}
@media screen and (max-width: 997px) {
  #header .header-nav-m {
    position: relative;
  }
  #header .header-nav-m .header-nav-m-menu {
    color: #fff;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    background: #474747;
    position: relative;
  }
  #header .header-nav-m .header-nav-m-menu-wrapper {
    position: absolute;
    top: 50%;
    right: 20px;
    margin-top: -20px;
    width: 50px;
    height: 40px;
    color: #fff;
    z-index: 999999;
    font-size: 12px;
  }
  #header .header-nav-m .header-nav-m-wrapper {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background: #474747;
    z-index: 9999999;
  }
}
</style>
