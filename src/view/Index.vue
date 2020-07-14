<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">ywyqqq</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">首页</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item href="#">留言板</b-nav-item>
            <b-nav-item href="#">文章</b-nav-item>
          </b-navbar-nav>
          <b-nav-item-dropdown text="归档" right>
            <b-dropdown-item href="#">时间线</b-dropdown-item>
            <b-dropdown-item href="#">分类</b-dropdown-item>
            <b-dropdown-item href="#">标签</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="#">关于</b-nav-item>
          <b-img src="https://upload.jianshu.io/users/upload_avatars/13891058/6ef650bb-abb8-482e-951c-afe078bfddf7.png"
                 style="width: 2rem ; height: 2rem ; "
                 rounded="circle"
                 fluid alt="Responsive image"/>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-img src="http://qdgv54vzx.bkt.clouddn.com/b3.jpg" fluid-grow alt="Fluid-grow image" style="z-index: -1"></b-img>

  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      navIndex: 0,
      menuName: '首页'
    }
  },
  methods: {
  }
}
</script>
<style scoped>
</style>
