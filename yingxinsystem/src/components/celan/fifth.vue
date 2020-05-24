<template>
  <div>
    <el-container>
      <el-main>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="140px"
          class="demo-ruleForm"
          label-position="right"
        >
          <el-row>
            <el-col :span="10">
              <el-form-item label="学号" prop="sno">
                <el-input v-model="ruleForm.sno"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="10">
              <el-form-item label="班级" prop="class">
                <el-input v-model="ruleForm.class" placeholder="如：软件工程2017级4班"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="学院" prop="collge">
                <el-input v-model="ruleForm.collge"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="10">
              <el-form-item label="申请绿色通道类别" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择">
                  <el-option label="生源地贷款" value="生源地贷款" @click.native="toggle1()"></el-option>
                  <el-option label="缓交" value="缓交" @click.native="toggle2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <div v-if="flag2">
            <el-row>
              <el-col :span="10">
                <el-form-item label="缓交金额" prop="money1">
                  <el-input v-model="ruleForm.money1"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="缓交还款日期" prop="date">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="ruleForm.date"
                    style="width: 100%;"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
          </div>

          <div v-if="flag1">
            <el-row>
              <el-col :span="10">
                <el-form-item label="贷款合同编号" prop="number">
                  <el-input v-model="ruleForm.number"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </div>

          <el-row>
            <el-col :span="10">
              <el-form-item label="申请理由" prop="reason">
                <el-input v-model="ruleForm.reason" type="textarea"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item class="btncenter">
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<style>
.btncenter {
  padding-left: 200px;
}
</style>

<script>
export default {
  data() {
    return {
      flag1: false,//控制表单项的显示
      flag2: false,//控制表单项的显示
      ruleForm: {
        sno: "",         //学号
        name: "",        //姓名
        class: "",       //班级
        collge: "",      //学院
        region: "",      //选择器
        money1: "",      //缓交金额
        number: "",      //合同编号
        reason: "",      //申请原因
        date: ""         //还款日期
      },
      rules: {
        sno: [
          { required: true, message: "请输入学号", trigger: "blur" },
          { min: 10, max: 10, message: "长度为10个字符", trigger: "blur" }
        ],

        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 3, max: 5, message: "长度为2到10个字符", trigger: blur }
        ],

        class: [
          { required: true, message: "请输入班级", trigger: "blur" },
          { min: 3, max: 5, message: "长度为7到20个字符", trigger: blur }
        ],

        collge: [
          { required: true, message: "请输入学院", trigger: "blur" },
          { min: 3, max: 15, message: "长度为1到15个字符", trigger: blur }
        ],

        region: [
          { required: true, message: "请选择绿色通道类别", trigger: "change" }
        ],

        money1: [
          { required: true, message: "请输入金额", trigger: "blur" },
          { min: 1, max: 6, message: "长度为1到6个字符", trigger: blur }
        ],

        number: [
          { required: true, message: "请输入贷款编号", trigger: "blur" },
          { min: 1, max: 15, message: "长度为1到15个字符", trigger: blur }
        ],

        reason: [{ required: true, message: "请输入原因", trigger: "blur" }],

        date: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ]
      }
    };
  },

  methods: {
    toggle1() {   //点击事件函数
      this.flag1 = true;
      this.flag2 = false;
    },
    toggle2() {   //点击事件函数
      (this.flag2 = true), (this.flag1 = false);
    },
    submitForm(formName) {   //提交表单
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {  //重置表单
      this.$refs[formName].resetFields();
      this.flag1 = false;
      this.flag2 = false;
    }
  }
};
</script>
