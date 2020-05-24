<!-- 这是侧栏第六个页面：财务缴费 -->
<template>
  <div>
    <el-container>
      <el-main height>
        <!-- 页面主体内容 -->
        <div class="title">
          <p>财务缴费</p>
        </div>
        <div class="font-setting">
          <small>缴费说明：四川师范大学新生采用“网上缴费”形式缴纳学费，点击在线缴费，按照操作流程即可完成足额缴费</small>
        </div>
        <div>
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <p>本科生学费</p>
                <div class="font-setting">
                  <p>应缴金额：{{ tuition }}</p>
                  <p>已缴金额：<label v-if="open">{{ tuition }}</label></p>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <p>住宿费</p>
                <div class="font-setting">
                  <p>应缴金额：{{ hotelExpense }}</p>
                  <p>已缴金额：<label v-if="open">{{ hotelExpense }}</label></p>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <p>教材款</p>
                <div class="font-setting">
                  <p>应缴金额：{{ textbook }}</p>
                  <p>已缴金额：<label v-if="open">{{ textbook }}</label></p>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <p>基本医疗保险</p>
                <div class="font-setting">
                  <p>应缴金额：{{ basicMedical }}</p>
                  <p>已缴金额：<label v-if="open">{{ basicMedical }}</label></p>
                </div>
              </div>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <p>校园一卡通预存款</p>
                <div class="font-setting">
                  <p>应缴金额：{{ oneCard }}</p>
                  <p>已缴金额：<label v-if="open">{{ oneCard }}</label></p>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <p>新生代管费</p>
                <div class="font-setting">
                  <p>应缴金额：{{ administration }}</p>
                  <p>已缴金额：<label v-if="open">{{ administration }}</label></p>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="margin-setting">
          <p v-if="flag">
            缴费情况：
            <label style="color: red">未缴费</label>
          </p>
          <p v-if="open">
            缴费情况：
            <label style="color: green">已缴费</label>
          </p>
        </div>
        <div>
          <el-button type="primary" @click="toggle();payCharge()">在线缴费</el-button>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<style>
.font-setting {
  margin-top: 30px;
  opacity: 0.5;
  font-size: 15px;
}

.grid-content {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  margin-top: 50px;
  padding: 30px;
  font-size: 20px;
}

.margin-setting {
  margin-top: 15px;
  font-size: 20px;
  margin-bottom: 15px;
}
/* .el-container{
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    margin :20px;
} */
.title {
  height: 30px;
  color: #218838;
  /* 		background-color: #000000; */
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      tuition: "",
      textbook: "",
      hotelExpense: "",
      basicMedical: "",
      oneCard: "",
      administration: "",
      flag: true,
      open: false
    };
  },
  methods: {
    toggle() {   //点击事件函数
      (this.flag = false), (this.open = true);
    },
    payCharge() {
      axios({
        method: "post",
        url: "/api/pay/payCharge",
        data: {
          snumber: localStorage.getItem("userNumber"),
          sname: localStorage.getItem("userName")
        }
      }).then(res => {
        console.log("res", res.data.error);
        if (res.data.error === 0) {
          alert("submit success");
        }
      });
    }
  }
};
</script>


