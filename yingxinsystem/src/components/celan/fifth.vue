<template>
  <div class="allcenter">
    <el-container>
      <el-main>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="500px"
          class="demo-ruleForm"
          label-position="right"
        >
          <el-form-item label="学号" prop="sno">
            <el-row>
              <el-col :span="8">
                <el-input v-model="ruleForm.sno"></el-input>
              </el-col>
            </el-row>
          </el-form-item>

          <el-form-item label="姓名" prop="name">
            <el-row>
              <el-col :span="8">
                <el-input v-model="ruleForm.name"></el-input>
              </el-col>
            </el-row>
          </el-form-item>

          <el-form-item label="班级" prop="class">
            <el-row>
              <el-col :span="8">
                <el-input v-model="ruleForm.class"></el-input>
              </el-col>
            </el-row>
          </el-form-item>

          <el-form-item label="banji" prop="major">
            <el-row>
              <el-col :span="8">
                <el-input v-model="ruleForm.major"></el-input>
              </el-col>
            </el-row>
          </el-form-item>

          <el-form-item label="学院" prop="collge">
            <el-row>
              <el-col :span="8">
                <el-input v-model="ruleForm.collge"></el-input>
              </el-col>
            </el-row>
          </el-form-item>

          <el-form-item label="申请绿色通道类别" prop="region">
            <el-col :span="8">
              <el-select v-model="ruleForm.region" placeholder="请选择">
                <el-option label="生源地贷款" value="生源地贷款"></el-option>
                <el-option label="低保" value="低保"></el-option>
                <el-option label="父母双亡" value="父母双亡"></el-option>
                <el-option label="缓交" value="缓交"></el-option>
              </el-select>
            </el-col>
          </el-form-item>

          <el-form-item label="申请缓交金额" prop="money1">
            <el-row>
              <el-col :span="8">
                <el-input v-model="ruleForm.money1"></el-input>
              </el-col>
              <el-col :span="4">
                <label class="color">*缓交必填项</label>
              </el-col>
            </el-row>
          </el-form-item>

          <el-form-item label="贷款合同编号" prop="number">
            <el-row>
              <el-col :span="8">
                <el-input v-model="ruleForm.number"></el-input>
              </el-col>
              <el-col :span="4">
                <label class="color">*生源地贷款必填项</label>
              </el-col>
            </el-row>
          </el-form-item>

          <el-form-item label="申请理由" prop="reason">
            <el-row>
              <el-col :span="8">
                <el-input v-model="ruleForm.reason" type="textarea"></el-input>
              </el-col>
            </el-row>
          </el-form-item>

          <el-form-item label="缓交截止日期" prop="date">
            <el-row>
              <el-col :span="8">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.date"
                  style="width: 100%;"
                ></el-date-picker>
              </el-col>
              <el-col :span="8">
                <label class="color">*缓交必填项</label>
              </el-col>
            </el-row>
          </el-form-item>

          <el-form-item label="证明材料上传" prop>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList"
            >
              <el-col :span="6">
                <el-button size="small" type="primary">点击上传</el-button>
              </el-col>
              <el-col :span="18">
                <label class="color">只能上传jpg/png文件，且不超过500kb</label>
              </el-col>
            </el-upload>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<style>
.color {
  color: red;
}
</style>

<script>
export default {
  data() {
    return {
      ruleForm: {
        sno: "",
        name: "",
        class: "",
        major: "",
        collge: "",
        region: "",
        money1: "",
        number: "",
        reason: "",
        date: ""
      },
      rules: {
        sno: [
          { required: true, message: "请输入学号", trigger: "blur" },
          { min: 10, max: 10, message: "长度为10个字符", trigger: "blur" }
        ],

        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 3, max: 5, message: "长度为3到5个字符", trigger: blur }
        ],

        class: [
          { required: true, message: "请输入班级", trigger: "blur" },
          { min: 3, max: 5, message: "长度为3到5个字符", trigger: blur }
        ],

        major: [
          { required: true, message: "请输入专业名", trigger: "blur" },
          { min: 4, max: 10, message: "长度为4到10个字符", trigger: blur }
        ],

        collge: [
          { required: true, message: "请输入班级", trigger: "blur" },
          { min: 3, max: 15, message: "长度为3到15个字符", trigger: blur }
        ],

        region: [
          { required: true, message: "请选择绿色通道类别", trigger: "change" }
        ],

        money1: [
          { required: true, message: "请输入金额", trigger: "blur" },
          { min: 1, max: 6, message: "长度为1到6个字符", trigger: blur }
        ],

        number: [
          { required: true, message: "请输入贷款编号", trigger: "blur" },
          { min: 1, max: 15, message: "长度为1到15个字符", trigger: blur }
        ],

        reason: [{ required: true, message: "请输入原因", trigger: "blur" }],

        date: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          },
          { min: 3, max: 5, message: "长度为3到5个字符", trigger: blur }
        ]
      }
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
