<!-- 这里是管理员的第一个界面：查看学生报到情况 -->
<template>
  <div>
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width:100%"
      border
    >
      <el-table-column label="学号" prop="sno"></el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="专业" prop="major"></el-table-column>
      <el-table-column label="学院" prop="collge"></el-table-column>
      <el-table-column label="报道状态" prop="report">
        <template scope="scope">
          <span v-if="scope.row.report === '未报道'" style="color:red">未报道</span>
          <span v-else style="color:green;font-weight:bolder">已报道</span>
        </template>
      </el-table-column>
    </el-table>

<!-- 分页设置
layout:设置分页显示的内容
total:总页数
prev:上一页
pager:页码列表
next:下一页
jumper:跳页
page-size:每页数据条数
current-page:起始页
 -->
    <el-pagination
      small
      layout="total,prev,pager,next,jumper"
      :total="tableData.length"
      :page-size="pagesize"
      :current-page="currentPage"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pagesize: 8, //每页的数据条数
      currentPage: 1, //开始页面
      tableData: [
        {
          sno: "2017110411",
          name: "胡爽",
          major: "软件工程",
          collge: "计算机科学学院",
          report: "已报道"
        },
        {
          sno: "2017110344",
          name: "徐靖翔",
          major: "软件工程",
          collge: "计算机科学学院",
          report: "已报道"
        },
        {
          sno: "2017110321",
          name: "李海铭",
          major: "软件工程",
          collge: "计算机科学学院",
          report: "已报道"
        },
        {
          sno: "2017110407",
          name: "邓宇",
          major: "软件工程",
          collge: "计算机科学学院",
          report: "已报道"
        },
                {
          sno: "2017110411",
          name: "胡爽",
          major: "软件工程",
          collge: "计算机科学学院",
          report: "已报道"
        },
        {
          sno: "2017110344",
          name: "徐靖翔",
          major: "软件工程",
          collge: "计算机科学学院",
          report: "已报道"
        },
        {
          sno: "2017110321",
          name: "李海铭",
          major: "软件工程",
          collge: "计算机科学学院",
          report: "已报道"
        },
        {
          sno: "2017110407",
          name: "邓宇",
          major: "软件工程",
          collge: "计算机科学学院",
          report: "已报道"
        },
                {
          sno: "2017110411",
          name: "胡爽",
          major: "软件工程",
          collge: "计算机科学学院",
          report: "已报道"
        },
        {
          sno: "2017110344",
          name: "徐靖翔",
          major: "软件工程",
          collge: "计算机科学学院",
          report: "已报道"
        },
        {
          sno: "2017110321",
          name: "李海铭",
          major: "软件工程",
          collge: "计算机科学学院",
          report: "已报道"
        },
        {
          sno: "2017110407",
          name: "邓宇",
          major: "软件工程",
          collge: "计算机科学学院",
          report: "已报道"
        }
      ]
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
    }
  }
};
</script>

<style>
</style>