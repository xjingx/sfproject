<template>
  <div>
    <h3>查看通知公告</h3>
    <el-divider></el-divider>
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label">
          <i class="el-icon-date"></i> 最新公告
        </span>
        <div v-html="test"></div>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <i class="el-icon-tickets"></i> 历史公告一览
        </span>
        <el-table :data="notice" style="width: 100%">
          <el-table-column type="index" :index="indexMethod"></el-table-column>
          <el-table-column prop="ntitle" label="标题" width="950"></el-table-column>
          <el-table-column fixed="right" width="100">
            <template slot-scope="scope">
              <el-button type="primary" icon="el-icon-more" @click="openDialog(scope.$index)" circle></el-button>
            </template>
          </el-table-column>
        </el-table>
		<!-- 这里是弹出框 -->
        <el-dialog title="详情" :visible.sync="centerDialogVisible" width="50%" center>
          <div v-html="dialog.dialogmessage"></div>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="centerDialogVisible = false">返回</el-button>
          </span>
        </el-dialog>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      //测试输入HTML看页面能否正常显示之后删掉
      test:
        "<p>seize	v.抓住；捉拿；夺；没收<br>interaction	n.相互作用；【航】干扰 互动；交互；交互作用",
      notice: [
        {
          ntitle: "四川师范大学通告" //demo，这里是从数据只拿标题出来
        },
        {
          ntitle: "ertert"
        }
      ],
      centerDialogVisible: false,
      //弹出框显示具体通知
      dialog:{
        dialogmessage:''
      }
    };
  },
  mounted() {
    this.queryNotice();
    this.queryAllNotice();
    this.updateVisited()
  },
  methods: {
    async openDialog(index) {
      await axios({
        method: 'post',
        url: '/api/notice/queryContent',
        data: {
          ntitle: this.notice[index].ntitle
        }
      })
      .then(res => {
        console.log("res",res.data.error)
        if(res.data.error === 0){
          this.centerDialogVisible = true;
          let content = res.data.data[0].ncontent
          this.dialog.dialogmessage = content
        }
      })
    },
    async queryNotice() {
      await axios({
        method: 'post',
        url: '/api/notice/queryNotice',
      })
      .then(res => {
        if(res.data.error === 0){
          let content = res.data.data[0].ncontent
          this.test = content
        }
      })
    },
    async queryAllNotice() {
      await axios({
        method: 'post',
        url: '/api/notice/queryAllNotice',
      })
      .then(res => {
        console.log("res",res.data.error)
        if(res.data.error === 0){
          this.notice = res.data.data
        }
      })
    },
    updateVisited() {
      axios({
        method: "post",
        url: "/api/visit/updatesecondVisitedNumber"
      }) //接口
    },
  }
};
</script>

<style>
</style>
