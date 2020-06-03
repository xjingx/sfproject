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
        1,2,3,4,5,6
      ]
    };
  },
  mounted() {
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
          data: [
            "信息发布与查询",
            "信息与公告",
            "个人信息",
            "报到进度",
            "绿色通道",
            "财务缴费"
          ]
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


      //下面的请求里面包含了这一部分到时候请求写好了就可以删了
      mychart.setOption({
        title: { text: "页面停留时间" },
        tooltip: {},
        series: [
          {
            name: "秒",
            type: "pie", // 设置图表类型为饼图
            radius: "65%", // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
            roseType: "angle",
            data: [
              //数据数组，name 为数据项名称，value 为数据项值
              { value: 235, name: "信息发布与查询" },
              { value: 274, name: "信息与公告" },
              { value: 310, name: "个人信息" },
              { value: 335, name: "报到进度" },
              { value: 400, name: "绿色通道" },
              { value: 400, name: "财务缴费" }
            ]
          }
        ]
      });
      //饼状图请求demo，柱状图的没有写，因为饼状图必须是value-name形式 而柱状图只需要一组数据就行了
      //就相当于柱状图没有写在请求里面，这个网上的实例饼状图是直接写在请求里面的
      /*axios
        .get(
          "" //请求url
        )
        .then(res => {
          this.pageview = res.data.data.results[0];
          var value1 = this.pageview.first_number;//这里 将从后台传来的信息发布于查询页面的相关数据赋值给value1，以此类推
          var value2 = this.pageview.second_number;
          var value3 = this.pageview.third_number;
          var value4 = this.pageview.fourth_number;
          var value5 = this.pageview.fifth_number;
          var value6 = this.pageview.sixth_number;
          var name1 = "信息发布与查询";
          var name2 = "信息与公告";
          var name3 = "个人信息";
          var name4 = "报到进度";
          var name5 = "绿色通道";
          var name6 = "财务缴费"
          var arr = [];//新建一个数组，将名字与数据对应起来
          arr.push({ value: value1, name: name1 });
          arr.push({ value: value2, name: name2 });
          arr.push({ value: value3, name: name3 });
          arr.push({ value: value4, name: name4 });
          arr.push({ value: value5, name: name5 });
          arr.push({ value: value6, name: name6 });
          mychart.setOption({
            series: [
              {
                name: "",//单位
                type: "pie",
                radius: "70%",
                data: arr,
                // itemStyle 设置饼状图扇形区域样式
                itemStyle: {
                  // emphasis：设置鼠标放到哪一块扇形上面的时候，扇形样式、阴影
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(30, 144, 255，0.5)"
                  }
                }
              }
            ]
          });
        });*/
    }
  }
};
</script>