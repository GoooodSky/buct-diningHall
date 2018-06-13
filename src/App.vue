<template>
  <div id="app">
    <div class="container">
      <selector :selected=selected v-on:changeSelected="changeSelected" v-if="$route.path!=='/recommend'&&$route.path!=='/ranking'"></selector>
      <router-view v-if="density" :density=density></router-view>
      <p v-if="$route.path!=='/recommend'&&$route.path!=='/ranking'">数据仅供参考<br>更新于: 5分钟之前</p>
    </div>
    <navigator></navigator>
  </div>
</template>

<script>
import selector from 'components/selector'
import navigator from 'components/navigator'

export default {
  name: 'App',
  data() {
    return {
      selected: '食堂1',
      densityAll: {}
    }
  },
  components: {
    selector,
    navigator
  },
  methods: {
    changeSelected: function(msg) {
      this.selected = msg
      console.log(this.selected)
    }
  },
  computed: {
    density: function() {
      return this.densityAll[this.selected]
      // console.log(this.densityAll)
    }
  },
  created() {
    this.$http.get('/api/density').then(
      response => {
        this.densityAll = response.body.data
        // console.log(this.densityAll[this.selected])
      },
      response => {
        // error callback
      }
    )
  }
}
</script>

<style lang="css" scoped>
.container {
  padding-bottom: 60px;
  margin: 0 auto;
}
.container p {
  font-size: 10px;
  text-align: center;
  color: rgb(149, 151, 153);
  letter-spacing: 1px;
}
</style>
