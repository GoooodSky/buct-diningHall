<template>
    <div id="rankings">
        <div id="ranking1">
            <span class="title">最受欢迎食堂<br>Top3</span>
            <div class="dininghallRanking">
                <div class="top3">
                    <img src="../assets/img/silver.png" alt="silver">
                    <span>东一</span>
                    <span>热度：1233</span>
                </div>
                <div class="top3">
                    <img src="../assets/img/gold.png" alt="gold">
                    <span>东二</span>
                    <span>热度：1233</span>

                </div>
                <div class="top3">
                    <img src="../assets/img/bronze.png" alt="bronze">
                    <span>东三</span>
                    <span>热度：1233</span>

                </div>
            </div>
        </div>
        <div id="ranking2">
            <span class="title">最受欢迎窗口<br>Top5</span>
            <div class="windowRanking">
                <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
                    <el-table-column type="index" label="排名">
                        <template slot-scope="scope">
                            <!-- v-if是惰性的，如果初始条件为假，则什么也不做 -->
                            <img v-if="scope.$index == 0" src="../assets/img/1.png" alt="gold">
                            <img v-if="scope.$index == 1" src="../assets/img/2.png" alt="silver">
                            <img v-if="scope.$index == 2" src="../assets/img/3.png" alt="bronze">
                            <span v-if="scope.$index > 2">{{ scope.$index + 1 }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="date" label="食堂">
                    </el-table-column>
                    <el-table-column prop="name" label="窗口">
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <div id="ranking3">
            <span class="title">最受欢迎菜品<br>Top10</span>
            <div class="foodRanking">
                <el-table :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName">
                    <el-table-column type="index" label="排名">
                        <template slot-scope="scope">
                            <!-- v-if是惰性的，如果初始条件为假，则什么也不做 -->
                            <img v-if="scope.$index == 0" src="../assets/img/1.png" alt="gold">
                            <img v-if="scope.$index == 1" src="../assets/img/2.png" alt="silver">
                            <img v-if="scope.$index == 2" src="../assets/img/3.png" alt="bronze">
                            <span v-if="scope.$index > 2">{{ scope.$index + 1 }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="date" label="食堂">
                    </el-table-column>
                    <el-table-column prop="name" label="窗口">
                    </el-table-column>
                    <el-table-column prop="address" label="菜品">
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    tableRowClassName({ row, rowIndex }) {
      //   if (rowIndex === 0) {
      //     return 'first'
      //   } else if (rowIndex === 1) {
      //     return 'second'
      //   } else if (rowIndex === 2) {
      //     return 'third'
      //   }
      if (rowIndex < 3) return 'black'

      return ''
    }
  },
  data() {
    return {
      tableData: [
        {
          date: '东区一食堂',
          name: '面食窗口'
        },
        {
          date: '东区二食堂',
          name: '盖饭窗口'
        },
        {
          date: '东区三食堂',
          name: '西北菜窗口'
        },
        {
          date: '东区四食堂',
          name: '早点窗口'
        },
        {
          date: '东区五食堂',
          name: '甜点窗口'
        }
      ],
      tableData2: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
#rankings
    .title
        display block
        text-align center
        font-size 14px
        margin-bottom 20px
        color #409EFF

    > div
        background-color white
        padding-top 20px
        margin 10px

    #ranking1
        .dininghallRanking
            width 100%
            display flex

            .top3
                display inline-block
                flex 1

                span
                    font-size 10px
                    display block
                    text-align center
                    margin 10px 0

                img
                    width 60%
                    margin 0 20%

    #ranking2
        .windowRanking
            img
                width 100%
                height 100%

            span
                display block
                text-align center

    #ranking3
        .foodRanking
            img
                width 100%
                height 100%

            span
                display block
                text-align center
</style>
