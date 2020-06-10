<template>
  <div>
    <div id="myChart" :style="{width: '900px', height: '400px'}"></div>
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>
<script>
import axios from "axios";
// 引入基本模板
let echarts = require("echarts/lib/echarts");

export default {
  data() {
    return {
      //这个数组表示的是第一个图浏览量的数据，从后台获取，这里是demo
      pageview: [
        3,2,3,4,5,6
      ],
      tableData: [],
      tableName: ["信息发布与查询", "信息与公告", "个人信息", "报到进度", "绿色通道", "财务缴费"]
    };
  },
  async mounted() {
    await this.queryVisitedNumber()
    await this.queryVisitedTime()
    this.drawLine();  
  },
  methods: {
    drawLine() {
      // pv是页面浏览量
      var pv = echarts.init(document.getElementById("myChart"));
      var mychart = echarts.init(document.getElementById("main"));//页面停留时间
      // 绘制图表
      pv.setOption({
        title: { text: "页面浏览量统计" },
        tooltip: {},
        xAxis: {
          //这个data里面的东西就是定死的 因为 页面只有那几个
          data: this.tableName
        },
        yAxis: {},
        series: [
          {
            name: "人数",
            type: "bar",
            data: this.pageview//这里就是显示出来的数据（浏览量）
          }
        ]
      });

      mychart.setOption({
        title: { text: "页面停留时间" },
        tooltip: {},
        series: [
          {
            name: "秒",
            type: "pie", // 设置图表类型为饼图
            radius: "65%", // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
            roseType: "angle",
            data: this.tableData
          }
        ]
      });

    },
    async queryVisitedNumber() {
      await axios({
        method: "post",
        url: "/api/visit/selectVisitedNumber",
      }).then(res => {
        console.log("res", res.data.error);
        if (res.data.error === 0) {
          let arr = []
          arr = Object.keys(res.data.data[0]).map(item => {
            return res.data.data[0][item]
          })
          this.pageview = arr
        } else {
          console.log('获取失败')
        }
      });
    },
    async queryVisitedTime() {
      await axios({
        method: "post",
        url: "/api/time/selectVisitedTime",
      }).then(res => {
        console.log("res", res.data.error);
        if (res.data.error === 0) {
          let arr = []
          let data = []
          arr = Object.keys(res.data.data[0]).map(item => {
            return res.data.data[0][item]
          })
          for (let i=0;i<arr.length;i++) {
            data[i] = {
              value: arr[i],
              name: this.tableName[i]
            }
          }
          this.tableData = data
        } else {
          console.log('获取失败')
        }
      });
    },
  }
};
</script>