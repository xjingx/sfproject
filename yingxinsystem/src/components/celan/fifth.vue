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
              <el-form-item label="学号" prop="snumber">
                <el-input v-model="ruleForm.snumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="姓名" prop="sname">
                <el-input v-model="ruleForm.sname"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="10">
              <el-form-item label="班级" prop="sclass">
                <el-input v-model="ruleForm.sclass" placeholder="如：2017级4班"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="专业" prop="major">
                <el-input v-model="ruleForm.major"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="10">
              <el-form-item label="学院" prop="department">
                <el-input v-model="ruleForm.department"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="申请绿色通道类别" prop="greentype">
                <el-select v-model="ruleForm.greentype" placeholder="请选择">
                  <el-option label="生源地贷款" value="生源地贷款" @click.native="toggle1()"></el-option>
                  <el-option label="缓交" value="缓交" @click.native="toggle2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <div v-if="flag2">
            <el-row>
              <el-col :span="10">
<<<<<<< HEAD
                <el-form-item label="缓交金额" prop="delaymoney">
                  <el-input v-model="ruleForm.delaymoney"></el-input>
=======
                <el-form-item label="缓交金额" prop="money1">
                  <el-input v-model.number="ruleForm.money1"></el-input>
>>>>>>> a45392d3a04cff14cb3eee2760cabfe1080cc526
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="缓交还款日期" prop="delaydate">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="ruleForm.delaydate"
                    style="width: 100%;"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
          </div>

          <div v-if="flag1">
            <el-row>
              <el-col :span="10">
                <el-form-item label="贷款合同编号" prop="serialnumber">
                  <el-input v-model="ruleForm.serialnumber"></el-input>
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
import axios from 'axios'
export default {
  data() {
    return {
      flag1: false, //控制表单项的显示
      flag2: false, //控制表单项的显示
      ruleForm: {
        snumber: "", //学号
        sname: "", //姓名
        sclass: "", //班级
        major: "", //专业
        department: "", //学院
        greentype: "", //选择器
        serialnumber: null, //合同编号
        delaymoney: null, //缓交金额
        delaydate: null, //还款日期
        reason: "", //申请原因
      },
      rules: {
        sno: [
          { required: true, message: "请输入学号", trigger: "blur" },
          { min: 10, max: 10, message: "长度为10个字符", trigger: "blur" }
        ],

        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 10, message: "长度为2到10个字符", trigger: blur }
        ],

        class: [
          { required: true, message: "请输入班级", trigger: "blur" },
          { min: 7, max: 7, message: "长度为7个字符", trigger: blur }
        ],

        major: [
          { required: true, message: "请输入专业", trigger: "blur" },
          { min: 1, max: 15, message: "长度为1到15个字符", trigger: blur }
        ],

        collge: [
          { required: true, message: "请输入学院", trigger: "blur" },
          { min: 1, max: 15, message: "长度为1到15个字符", trigger: blur }
        ],

        region: [
          { required: true, message: "请选择绿色通道类别", trigger: "change" }
        ],

        money1: [
          { required: true, message: "请输入金额" },
          { type: "number", message: "金额必须为数字" }
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
    toggle1() {
      //点击事件函数
      this.flag1 = true;
      this.flag2 = false;
    },
    toggle2() {
      //点击事件函数
      (this.flag2 = true), (this.flag1 = false);
    },
<<<<<<< HEAD
    async insertDK() {
      await axios({
        method: 'post',
        url: '/api/green/insertGreenChanneldk',
        data: {
          snumber: this.ruleForm.snumber, //学号
          sname: this.ruleForm.sname, //姓名
          sclass: this.ruleForm.sclass, //班级
          major: this.ruleForm.major, //专业
          department: this.ruleForm.department, //学院
          greentype: this.ruleForm.greentype, //选择器
          serialnumber: this.ruleForm.serialnumber, //合同编号
          delaymoney: null, //缓交金额
          delaydate: null, //还款日期
          reason: this.ruleForm.reason, //申请原因
        }
      })
      .then(res => {
        console.log("res",res.data.error)
        if(res.data.error === 0){
          console.log("insert green success", res.data)
          alert("申请贷款成功")
        }
      })
    },
    async insertHJ() {
      await axios({
        method: 'post',
        url: '/api/green/insertGreenChannelhj',
        data: {
          snumber: this.ruleForm.snumber, //学号
          sname: this.ruleForm.sname, //姓名
          sclass: this.ruleForm.sclass, //班级
          major: this.ruleForm.major, //专业
          department: this.ruleForm.department, //学院
          greentype: this.ruleForm.greentype, //选择器
          serialnumber: null, //合同编号
          delaymoney: this.ruleForm.delaymoney, //缓交金额
          delaydate: this.ruleForm.delaydate, //还款日期
          reason: this.ruleForm.reason, //申请原因
        }
      })
      .then(res => {
        console.log("res",res.data.error)
        if(res.data.error === 0){
          console.log("insert green success", res.data)
          alert("申请缓交成功")
        }
      })
    },
=======

>>>>>>> a45392d3a04cff14cb3eee2760cabfe1080cc526
    submitForm(formName) {
      //提交表单
      if (this.ruleForm.greentype == "生源地贷款"){
        this.insertDK()
      } else {
        this.insertHJ()
      }
    },
    resetForm(formName) {
      //重置表单
      this.$refs[formName].resetFields();
      this.flag1 = false;
      this.flag2 = false;
    }
  }
};
</script>
