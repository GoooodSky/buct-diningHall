<template>
  <div id="navigator">
    <el-menu :default-active="activeIndex" background-color="#545c64" text-color="#fff" active-text-color="#409EFF" class="el-menu-demo tab" mode="horizontal">
      <el-menu-item class='tab-item' index="1">
        <router-link to="/recommend">口味推荐</router-link>
      </el-menu-item>
      <el-menu-item class='tab-item' index="2">
        <router-link to="/gauge">实时流量</router-link>
      </el-menu-item>
      <el-menu-item class='tab-item' index="3">
        <router-link to="/history">历史流量</router-link>
      </el-menu-item>
      <el-menu-item class='tab-item' index="4">
        <router-link to="/ranking">今日排行</router-link>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'navigator',
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    computeactiveIndex: function() {
      if (this.$route.path === '/recommend') {
        this.activeIndex = '1'
        // 数字必须是字符串，否则报错
      } else if (this.$route.path === '/gauge') {
        this.activeIndex = '2'
      } else if (this.$route.path === '/history') {
        this.activeIndex = '3'
      } else if (this.$route.path === '/ranking') {
        this.activeIndex = '4'
      }
      // console.log(this.$route.path)
      // console.log(window.location.href)
    }
  },
  mounted() {
    this.computeactiveIndex()
  }
}
</script>

<style lang="stylus" rel='stylesheet/stylus' scoped>
#navigator
  text-align center
  width 100%
  height 60px
  position fixed
  bottom 0px
  z-index 1

.tab
  display flex
  width 100%

.tab-item
  flex 1
  text-align center

a
  text-decoration none

.el-menu-item
  padding 0
</style>
