<template>
  <div id="selector">
    <el-select v-model="changeSelected">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'selector',
  props: ['selected'],
  data() {
    return {
      options: [
        {
          value: '食堂1',
          label: '东区一食堂'
        },
        {
          value: '食堂2',
          label: '东区二食堂'
        },
        {
          value: '食堂3',
          label: '东区三食堂'
        },
        {
          value: '食堂4',
          label: '东区四食堂'
        },
        {
          value: '食堂5',
          label: '东区五食堂'
        },
        {
          value: '食堂6',
          label: '东区六食堂'
        }
      ],
      changeSelected: this.selected
    }
  },
  methods: {},
  watch: {
    changeSelected: function() {
      console.log(this.changeSelected + 'sss')
      this.$emit('changeSelected', this.changeSelected)
      // document.getElementsByTagName('button').click()
    }
  }
}
</script>
<style scoped>
#selector {
  margin: 10px 0 10px 0;
  text-align: center;
}
</style>
