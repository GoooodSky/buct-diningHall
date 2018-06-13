<template>
  <div>
    <div id="gauge"></div>
    <!-- <input type="text" v-model="density"> -->
  </div>
</template>

<script>
// let echarts = require('echarts/lib/echarts')
// require('echarts/lib/chart/gauge')
// require('echarts/lib/component/title')

export default {
  name: 'gauge',
  props: ['density'],
  data: function() {
    return {}
  },
  methods: {
    drawChart() {
      var myChart = this.$echarts.init(document.getElementById('gauge'))
      myChart.setOption(this.chartOption)
    }
  },
  computed: {
    status: function() {
      if (this.density >= 0 && this.density < 20) {
        return '座位很多，适宜就餐'
      } else if (this.density >= 20 && this.density < 50) {
        return '座位较多，适宜就餐'
      } else if (this.density >= 50 && this.density < 80) {
        return '座位较少，请尽快用餐'
      } else if (this.density >= 80 && this.density < 100) {
        return '座位较少，略拥挤'
      } else if (this.density >= 100) {
        return '爆满，一座难求'
      }
    },
    chartOption: function() {
      return {
        title: {
          text: this.status,
          left: 'center',
          bottom: 50
        },
        series: [
          {
            type: 'gauge',
            detail: { formatter: '{value}%' },
            data: [{ value: this.density, name: '当前上座率' }]
          }
        ]
      }
    }
  },
  watch: {
    density: function() {
      this.drawChart()
    }
  },
  mounted() {
    this.drawChart()
  },
  updated() {
    this.drawChart()
  }
}
</script>

<style scoped>
#gauge {
  width: 400;
  height: 400px;
  margin: auto 10px;
  background-color: white;
}
</style>
