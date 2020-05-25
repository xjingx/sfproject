<!-- 这是侧栏第六个页面：财务缴费 -->
<template>
  <div>
    <el-container v-if="payoff">
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
                <div class="font-setting" id="amountMoney">
                  <p>应缴金额：{{ payOff.tuition }}</p>
                  <p>
                    已缴金额：
                    <label>{{ hasPayOff.tuition }}</label>
                  </p>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <p>住宿费</p>
                <div class="font-setting">
                  <p>应缴金额：{{ payOff.hotelExpense }}</p>
                  <p>
                    已缴金额：
                    <label>{{ hasPayOff.hotelExpense }}</label>
                  </p>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <p>教材款</p>
                <div class="font-setting">
                  <p>应缴金额：{{ payOff.textbook }}</p>
                  <p>
                    已缴金额：
                    <label>{{ hasPayOff.textbook }}</label>
                  </p>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <p>基本医疗保险</p>
                <div class="font-setting">
                  <p>应缴金额：{{ payOff.basicMedical }}</p>
                  <p>
                    已缴金额：
                    <label>{{ hasPayOff.basicMedical }}</label>
                  </p>
                </div>
              </div>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <p>校园一卡通预存款</p>
                <div class="font-setting">
                  <p>应缴金额：{{ payOff.oneCard }}</p>
                  <p>
                    已缴金额：
                    <label>{{ hasPayOff.oneCard }}</label>
                  </p>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <p>新生代管费</p>
                <div class="font-setting">
                  <p>应缴金额：{{ payOff.administration }}</p>
                  <p>
                    已缴金额：
                    <label>{{ hasPayOff.administration }}</label>
                  </p>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="margin-setting">
          <p v-if="hasPayOff.tuition === 0">
            缴费情况：
            <label style="color: red">未缴费</label>
          </p>
          <p v-if="hasPayOff.tuition !== 0">
            缴费情况：
            <label style="color: green">已缴费</label>
          </p>
        </div>
        <div>
          <el-button type="primary" @click="payCharge()">在线缴费</el-button>
        </div>
      </el-main>
    </el-container>
    <div v-if="!payoff" class="second">您已缴费成功！</div>
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

.second {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(0, -50%);
  -moz-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  -o-transform: translate(0, -50%);
  transform: translate(0, -50%);

  font-size: 30px;
  border-radius: 0px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color:#339900;
  color: white;
}
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      payOff: {
        tuition: 0,
        textbook: 0,
        hotelExpense: 0,
        basicMedical: 0,
        oneCard: 0,
        administration: 0,
      },
      hasPayOff: {
        tuition: 0,
        textbook: 0,
        hotelExpense: 0,
        basicMedical: 0,
        oneCard: 0,
        administration: 0,
      },
      payoff: true
    };
  },
  async mounted() {
    await this.queryPayOff()
    await this.queryCharge()
  },
  methods: {
    async queryPayOff() {
      await axios({
        method: "post",
        url: "/api/pay/queryPayOff",
        data: {
          snumber: localStorage.getItem("userNumber"),
          sname: localStorage.getItem("userName")
        }
      }).then(res => {
        console.log("res", res.data.error);
        if (res.data.error === 0) {
          this.payOff = res.data.data[0]
        }
      });
    },
    async queryCharge() {
      await axios({
        method: "post",
        url: "/api/pay/selectPay",
        data: {
          snumber: localStorage.getItem("userNumber"),
          sname: localStorage.getItem("userName")
        }
      }).then(res => {
        console.log("res", res.data.error);
        if (res.data.error === 0) {
          console.log(res.data)
          if(res.data.data[0].pay === 'true'){
            //this.payoff = false;
            this.hasPayOff = this.payOff
          } else {
            return ;
          }
        }
      });
    },
    async payCharge() {
      await axios({
        method: "post",
        url: "/api/pay/payCharge",
        data: {
          snumber: localStorage.getItem("userNumber"),
          sname: localStorage.getItem("userName")
        }
      }).then(res => {
        console.log("res", res.data.error);
        if (res.data.error === 0) {
          alert("缴费成功");
          //this.payoff = false
          this.hasPayOff = this.payOff
        }
      });
    }
  }
};
</script>


