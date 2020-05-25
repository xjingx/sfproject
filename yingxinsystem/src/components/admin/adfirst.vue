<!-- 这里是管理员的第一个界面：查看学生报到情况 -->
<template>
  <div>
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width:100%"
      border
    >
      <el-table-column label="学号" prop="snumber"></el-table-column>
      <el-table-column label="姓名" prop="sname"></el-table-column>
      <el-table-column label="专业" prop="major"></el-table-column>
      <el-table-column label="学院" prop="department"></el-table-column>
      <el-table-column label="报道状态" prop="finish">
        <template slot-scope="scope">
          <span v-if="scope.row.finish === null" style="color:red">未报道</span>
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
import axios from 'axios'
export default {
  data() {
    return {
      pagesize: 8, //每页的数据条数
      currentPage: 1, //开始页面
      tableData: [
        {
          snumber: "2017110411",
          sname: "胡爽",
          major: "软件工程",
          department: "计算机科学学院",
          finish: null
        },
        {
          snumber: "2017110344",
          sname: "徐靖翔",
          major: "软件工程",
          department: "计算机科学学院",
          finish: "true"
        },
        {
          snumber: "2017110321",
          sname: "李海铭",
          major: "软件工程",
          department: "计算机科学学院",
          finish: null
        },
        {
          snumber: "2017110407",
          sname: "邓宇",
          major: "软件工程",
          department: "计算机科学学院",
          finish: "true"
        },
                {
          snumber: "2017110411",
          sname: "胡爽",
          major: "软件工程",
          department: "计算机科学学院",
          finish: "true"
        },
        {
          snumber: "2017110344",
          sname: "徐靖翔",
          major: "软件工程",
          department: "计算机科学学院",
          finish: null
        },
        {
          snumber: "2017110321",
          sname: "李海铭",
          major: "软件工程",
          department: "计算机科学学院",
          finish: null
        },
        {
          snumber: "2017110407",
          sname: "邓宇",
          major: "软件工程",
          department: "计算机科学学院",
          finish: "true"
        },
                {
          snumber: "2017110411",
          sname: "胡爽",
          major: "软件工程",
          department: "计算机科学学院",
          finish: "true"
        },
        {
          snumber: "2017110344",
          sname: "徐靖翔",
          major: "软件工程",
          department: "计算机科学学院",
          finish: "true"
        },
        {
          snumber: "2017110321",
          sname: "李海铭",
          major: "软件工程",
          department: "计算机科学学院",
          finish: "true"
        },
        {
          snumber: "2017110407",
          sname: "邓宇",
          major: "软件工程",
          department: "计算机科学学院",
          finish: "true"
        }
      ]
    };
  },
  mounted() {
    this.queryStudentInfo()
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    async queryStudentInfo() {
      await axios({
        method: "post",
        url: "/api/person/selectInfoFinish",
      }).then(res => {
        console.log("res", res.data.error);
        if (res.data.error === 0) {
          console.log(res.data);
          this.tableData = res.data.data
        }
      });
    }
  }
};
</script>

<style>
</style>