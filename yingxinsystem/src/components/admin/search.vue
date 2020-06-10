<!-- 这里是管理员的第一个界面：查看学生报到情况 -->
<template>
  <div>
    <div id="searchhead">
      <h3>全文搜索</h3>
      <el-divider></el-divider>
      <el-col :span="10">
        <el-input placeholder="请输入内容" v-model="query">
          <el-button slot="append" icon="el-icon-search" @click="inquire"></el-button>
        </el-input>
      </el-col>
    </div>
    <!-- <div id="showres">
      <el-table :data="results" style="width: 100%">
        <el-table-column type="index" :index="indexMethod"></el-table-column>
        <el-table-column prop="content" label="搜索结果" width></el-table-column>
      </el-table>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.headers.post['Content-Type'] = 'application/json';
export default {
  data() {
    return {
      query: "", //查询的关键字
      resluts: [
        {
          //title: "", //返回的结果的标题
          //content: "无" //返回结果的内容
        }
      ]
    };
  },
  mounted() {
    this.inquire;
  },
  methods: {
    inquire() {
      var body = '{"query": {"match_all": {}}}'
      console.log(this.query);
      axios
        .post("http://localhost:9200/swproject_db/_search" + this.body)
        .then((res)=>{
    console.log(res.data.hits.hits);
    this.resluts = res.data.hits.hits;
  })
    },
    indexMethod(index) {
      return index + 1;
    }
  }
};
</script>

<style>
</style>