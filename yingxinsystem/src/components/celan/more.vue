<template>
<div>
<p class="title1">更多信息</p>
<div class="more">
  <el-table
    :data="tableData"
    style="width: 70%"
    max-height="600">
    <el-table-column
      fixed
      prop="date"
      label="发布日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="title"
      label="信息标题"
      width="120">
    </el-table-column>
    <el-table-column
      prop="type"
      label="类型"
      width="120">
    </el-table-column>
        <el-table-column
      prop="author"
      label="发布人"
      width="80">
    </el-table-column>
    <el-table-column
      prop="number"
      label="浏览数"
      width="100">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</div>
</template>

<script>
  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData: [{
          date: '2020-03-03',
          author: 'xjx',
          number: '1200',
          type: '帖子',
          title:'疫情期间我们该注意什么？'
          
        },
        {
          date: '2020-1-03',
          author: '教务处',
          number: '10000',
          type: '通知',
          title:'关于2017级学生寒假放假通知'
        },
        {
            date: '2020-05-03',
          author: '李海铭',
          number: '160',
          type: '帖子',
          title:'到底什么时候开学啊！！！！！'
        },
        {
            date: '2019-11-11',
          author: 'zjt啦啦啦啦啦',
          number: '6549',
          type: '帖子',
          title:'今年的双十一攻略来了！！！速看'
        },
        {
            date: '2020-05-20',
          author: '知名人士胡爽',
          number: '894',
          type: '帖子',
          title:'520很烦！！'
        },
        {
            date: '2020-05-16',
          author: '四川师范大学',
          number: '20548',
          type: '通知',
          title:'关于四川师范大学非毕业年级返校通知'
        }]
      }
    }
  }
</script>
<style>
    .more{
        margin-top: 20px;
        margin-left: 10%;
    }
    .title1{
	  margin-left: 40%;
	  font-size:x-large;
	  color: rgb(21, 179, 0);
    }
</style>
