<!-- 这是第三个页面：信息采集 -->
<template>
  <div>
	  <div>
		  <p class="p">信息发布与查询</p>
	  </div>
    <div class="infclass">
      <el-form :inline="true">
        <el-form-item label="学号:">
          <p>{{form.snumber}}</p>
        </el-form-item>
        <el-form-item label="姓名:">
          <p>{{form.sname}}</p>
        </el-form-item>
        <el-form-item label="性别:">
          <p>{{form.ssex}}</p>
        </el-form-item>
        <el-form-item label="电话:">
          <p>{{form.stestnumber}}</p>
        </el-form-item>
        <br />
        <el-form-item label="身份证号码:">
          <p>{{form.sidnumber}}</p>
        </el-form-item>
        <el-form-item label="学院:">
          <p>{{form.sdepartment}}</p>
        </el-form-item>
        <el-form-item label="专业:">
          <p>{{form.smajor}}</p>
        </el-form-item>
        <el-form-item label="出生日期:">
          <p>{{form.sbirthday}}</p>
        </el-form-item>
        <br />
        <el-form-item>
          <el-dropdown trigger="click" placement="bottom-start">
            <el-button type="primary">
              修改个人信息<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-form ref="form" :inline="true" :model="form" class="demo-form-inline">
                <el-form-item label="电话">
                  <el-input  v-model = "form.stestnumber"></el-input>
                </el-form-item>
                <el-form-item label="身份证号码">
                  <el-input v-model = "form.sidnumber"></el-input>
                </el-form-item>
                <br />
                <el-form-item label="出生日期">
                  <el-input v-model = "form.sbirthday"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('form')">确定</el-button>
                  <el-button type="primary" @click="resetForm('form')">取消</el-button>
                </el-form-item>
              </el-form>
            </el-dropdown-menu>
          </el-dropdown>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
  export default {
    data() {
      return {
        form: {
          snumber:'',
          sname: '',
          ssex:'',
          stestnumber:'',
          sidnumber:'',
          sdepartment:'',
          smajor:'',
          sbirthday:''
        },
        userinfo:{
          snumber:'',
          sname: '',
          ssex:'',
          stestnumber:'',
          sidnumber:'',
          sdepartment:'',
          smajor:'',
          sbirthday:''      
        }
      }
    },
    mounted() {
      this.queryInfo();
      this.updateVisited()
    },
    methods: {
      queryInfo() {
        axios({
        method: 'post',
        url: '/api/person/queryPersonInfo',
        data: {
          snumber: localStorage.getItem('userNumber'),
		      sname: localStorage.getItem('userName'),
        }
      })
      .then(res => {
        if(res.data.error === 0){
          this.userinfo = res.data.data
          this.form.snumber = this.userinfo.snumber
          this.form.sname = this.userinfo.sname
          this.form.ssex = this.userinfo.sgender
          this.form.stestnumber = this.userinfo.stestnumber
          this.form.sidnumber = this.userinfo.sidnumber
          this.form.sdepartment = this.userinfo.sdepartment
          this.form.smajor = this.userinfo.smajor
          this.form.sbirthday = this.userinfo.sbirthday
        }
      })
      },
      submitForm(formName) {
        axios({
          method: 'post',
          url: '/api/person/changePersonInfo',
          data: {
            snumber: localStorage.getItem('userNumber'),
            sname: localStorage.getItem('userName'),
            stestnumber: this.form.stestnumber,
            sidnumber: this.form.sidnumber,
            sbirthday: this.form.sbirthday
        }
        })
        .then(res => {
          console.log("res",res.data.error)
          if(res.data.error === 0){
            alert("submit success")
          }
        })
      },
      resetForm(formName) {
        this.form.stestnumber = this.userinfo.stestnumber
        this.form.sidnumber = this.userinfo.sidnumber
        this.form.sbirthday = this.userinfo.sbirthday        
      },
      updateVisited() {
        axios({
          method: "post",
          url: "/api/visit/updatethirdVisitedNumber"
        }) //接口
      },
    }
  }
</script>
<style>
  .p{
    margin-left: 40%;
    font-size:x-large;
    color: #0056B3;
  }
  .infclass{
    margin-left: 20%;
    margin-top: 50px;
  }
</style>
