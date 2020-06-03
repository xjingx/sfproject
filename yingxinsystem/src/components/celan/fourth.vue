<!-- 这是第四个页面：卧具选择 -->
<template>
  <div class="page">
	  <p class="p">报到进度</p>
   <el-steps :active="active" finish-status="success">
     <el-step title="登录迎新系统"></el-step>
     <el-step title="个人信息查看" description="核对信息是否正确"></el-step>
     <el-step title="财务缴费" ></el-step>
	 <el-step title="报到成功" description="四川师范大学欢迎你!!!"></el-step>
   </el-steps>
   <div align="center">
	    <el-button style="margin-top: 12px;" @click="next">{{msg}}</el-button>
   </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        active: 1,
        msg: "下一步",
        pay: null
      };
    },
    mounted() {
      this.selectFinish()
      this.selectPay()
      this.updateVisited()
    },
    methods: {
      next() {
        if (this.active >= 4){
          alert("你已经报道过了")
          return 
        }
        if( this.active === 2) {
          if( this.pay === null ){
            alert("请先缴费")
            return
          }
        }
        this.active++;
        if (this.active > 3) {
          this.msg = "完成"
        }
        if (this.active >3) {
          this.updateFinish()
        }
      },
    updateFinish() {
      axios({
        method: 'post',
        url: '/api/check/updateFinish',
        data: {
          snumber: localStorage.getItem('userNumber'),
          sname: localStorage.getItem('userName'),
        }
      })
      .then(res => {
        if(res.data.error === 0){
          alert("报道成功")
        }
      })
    },
    selectPay(){
      axios({
        method: 'post',
        url: '/api/pay/selectPay',
        data: {
          snumber: localStorage.getItem('userNumber'),
          sname: localStorage.getItem('userName'),
        }
      })
      .then(res => {
        console.log("Res",res)
        res = res.data.data[0]
        this.pay = res.pay
      })
    }, 
    selectFinish() {
      axios({
        method: 'post',
        url: '/api/check/selectFinish',
        data: {
          snumber: localStorage.getItem('userNumber'),
          sname: localStorage.getItem('userName'),
        }
      })
      .then(res => {
        res = res.data.data[0]
        if (res.finish !== null) {
          this.msg = "完成"
          this.active = 4
        }
      })
    },
    updateVisited() {
      axios({
        method: "post",
        url: "/api/visit/updatefourthVisitedNumber"
      }) //接口
    },    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page{
	margin-top: 5%;
}
  .p{
	  margin-bottom: 20%;
	  margin-left: 40%;
	  font-size:x-large;
	  color: #0056B3;
  }
</style>