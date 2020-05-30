<template>
  <!--login外框-->
  <div class="_login">
    <!--login内框-->
    <div class="login_inner">
      <el-form class="form" ref="form" :model="formLogin">
        <el-form-item>
          <h2 class="title">四川师范大学迎新系统</h2>
        </el-form-item>
        <el-form-item>
          <el-input v-model="formLogin.loginName" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="formLogin.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-radio v-model="whologin" label="students" @change="consolelogin">学生</el-radio>
          <el-radio v-model="whologin" label="admin" @change="consolelogin">管理员</el-radio>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <div v-show="this.errorInfo.isShowError" class="error">{{this.errorInfo.text}}</div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style lang="scss">
._login {
  // border:1px solid red;
  height: 100%;
  width: 100%;
  background-color: #eeffff;
  display: flex;
  align-items: center;
  justify-content: center;

  .login_inner {
    // border:1px solid green;
    width: 460px;
    height: 350px;
    background-color: #feffb8;
    margin-top: -150px;
    display: flex;
    justify-content: center;
    box-shadow: 0 0 25px #2a7f3e;

    .form {
      // border:1px solid blue;
      width: 300px;
      margin-top: 30px;
      text-align: center;

      .title {
        color: #2c8641;
      }
    }

    .error {
      color: red;
    }
  }
}
</style>
<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      formLogin: {
        loginName: "", //默认显示的用户名
        password: "" //默认显示的密码
      },
      errorInfo: {
        text: "登录失败,请重试",
        isShowError: false //显示错误提示
      },
      whologin:'students'
    };
  },
  mounted() {
    document.onkeydown = event => {
      var router = this.$route.path;
      var e = event || window.event || arguments.callee.caller.arguments[0];
      if (e && e.keyCode == 13 && this.$route.path == "/login") {
        // enter 键
        this.login();
      }
    };
    this.logincheck();
  },
  methods: {
    login() {
      axios({
        method: "post",
        url: "/api/user/login",
        data: {
          snumber: this.formLogin.loginName,
          spassword: this.formLogin.password
        }
      })
        .then(response => {
          console.log("成功报文:", response);
          var json = response.data;
          if (json.error == 0) {
            localStorage.setItem("userName", json.message); //用户名
            localStorage.setItem("userNumber", json.data); //学号
            this.$router.replace({ path: "/first" });
          } else {
            console.log("xx");
            this.errorInfo.isShowError = true;
            this.errorInfo.text = "登录失败";
          }
        })
        .catch(error => {
          console.log("失败报文:", error);
          this.errorInfo.isShowError = true;
          this.errorInfo.text = "登录失败";
        });
    },
    consolelogin() {
      console.log(this.whologin+"登录");
    },
    logincheck() {
      axios({
        method: "get",
        url: "/api/user/login-test"
      }) //接口
        .then(response => {
          var json = response.data;
          console.log(response);
          if (json.error == 0) {
            this.$router.replace({ path: "/first" });
          } else {
            console.log("fail");
          }
        })
        .catch(error => {
          console.log("失败报文:", error);
        });
    }
  }
};
</script>
