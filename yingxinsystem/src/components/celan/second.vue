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
        dialogmessage:'<p>seize	v.抓住；捉拿；夺；没收<br>interaction	n.相互作用；【航】干扰 互动；交互；交互作用<br>facilitate	v.促进；使容易<br>irrigate v.灌溉；冲洗（伤口或身体部位）<br>severe adj.极为恶劣的；十分严重的；严厉的；苛刻的<br>dramatic	adj.突然的；巨大的；令人吃惊的；激动人心的<br>alleviate	v.减轻；缓解；缓和<br>campaign	n.战役；运动<br>engage	v.啮合；雇用；聘用；吸引住（注意力、兴趣）                                                               <br>insightful adj.有深刻了解的；富有洞察力的<br>perceptive adj.理解力强的；有洞察力的；思维敏捷的；感知的<br>arouse v.激发；引起；唤醒；睡醒<br>sufficient adj.足够的；充足的<br>mentality n.心态；思想状况；思想方法<br>destination n.目的地；终点<br>endeavor n.努力 v.努力<br>distinction n.区别；区分；差别；卓越<br>distinct adj.清晰的；清楚的；明白的；明显的<br>readily adv.欣然地；乐意地；快捷地；轻而易举地<br>fatal adj.致命的；灾难性的；毁灭性的；导致失败的<br>it occurs to sb.“某人想到”<br>trend n.趋势；动向；趋向；动态 v.走向；趋向<br>demonstrate v.演示；证明；说明；示范<br>intently adv.聚精会神地；一心一意地<br>intent n.意图；目的；意向 adj.专注；专心；热切的；专注的<br>diminish v.减少；削弱；减小；贬低<br>guilty adj.感到内疚的；感到惭愧的；犯有罪的；有过失的<br>exaggerate v.夸大；夸张；言过其实&nbsp;<br></p>'
      }
    };
  },
  mounted() {
    this.queryNotice();
    this.queryAllNotice()
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
  }
};
</script>

<style>
</style>
