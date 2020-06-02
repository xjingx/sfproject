<!-- 这个页面是侧栏第一项的页面内容 -->
<template>
  <div>
    <p class="p">信息发布与查询</p>
    <div class="yemian">
      <el-carousel :autoplay="false" interval="4000" type="card" height="500px">
        <el-carousel-item>
          <div class="first">
            <el-form ref="form" :model="form" label-width="80px" :rules="firstrules">
              <el-form-item>
                <p style="color: #aa55ff; font-size: x-large; margin-left:30%;">信息发布</p>
              </el-form-item>
              <el-form-item label="信息标题" prop="title">
                <el-input v-model="form.title"></el-input>
              </el-form-item>
              <el-form-item label="信息类型" prop="type">
                <el-select v-model="form.type" placeholder="请选择发布的信息的类型">
                  <el-option label="紧急通知" value="紧急通知"></el-option>
                  <el-option label="普通公告" value="普通公告"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="信息对象" prop="object">
                <el-radio-group v-model="form.object">
                  <el-radio label="新生"></el-radio>
                  <el-radio label="迎新志愿者"></el-radio>
                  <el-radio label="各学院负责人"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="具体内容" prop="content">
                <el-input
                  type="textarea"
                  v-model="form.content"
                  :autosize="{ minRows: 2, maxRows: 4}"
                  placeholder="请输入内容"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('form')">立即发布</el-button>
                <el-button type="primary" @click="resetForm('form')">取消</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <p style="color: #aa55ff; font-size: x-large; margin-left:40%;margin-top: 10px;">已发布信息</p>
          <div class="second">
            <el-table :data="tableData" height="400" border style="width: 100%">
              <el-table-column type="index"></el-table-column>
              <el-table-column prop="type" label="信息类型" width="130"></el-table-column>
              <el-table-column prop="sname" label="发布人" width="130"></el-table-column>
              <el-table-column prop="title" label="信息标题" width="180"></el-table-column>
              <el-table-column label="查看">
                <template slot-scope="scope">
                  <el-button
                    type="primary"
                    icon="el-icon-more"
                    @click="opendialog1(scope.$index)"
                    circle
                  ></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-dialog title="具体内容" :visible.sync="DialogVisible" width="40%" center>
      <div>{{dialog1.dialogmessage1}}</div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="DialogVisible = false">返回</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        title: "",
        type: "",
        object: "",
        content: ""
      },
      firstrules: {
        title: [
          { required: true, message: "请输入信息标题！", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        type: [
          { required: true, message: "请选择信息类型！", trigger: "change" }
        ],
        object: [
          { required: true, message: "请选择信息对象！", trigger: "change" }
        ],
        content: [
          { required: true, message: "请填写信息内容！", trigger: "blur" }
        ]
      },
      tableData: [],
      DialogVisible: false,
      //弹出框显示具体通知
      dialog1: {
        dialogmessage1: "132456"
      }
    };
  },
  mounted() {
    this.queryInfo();
  },
  methods: {
    submitForm(formName) {
      axios({
        method: "post",
        url: "/api/info/insertInfo",
        data: {
          title: this.form.title,
          type: this.form.type,
          object: this.form.object,
          sname: localStorage.getItem("userName"),
          content: this.form.content
        }
      }).then(res => {
        console.log("res", res.data.error);
        if (res.data.error === 0) {
          alert("insert success");
        }
      });
    },
    resetForm(formName) {
      (this.form.title = ""), (this.form.object = ""), (this.form.content = "");
    },
    queryInfo() {
      axios({
        method: "post",
        url: "/api/info/queryInfo"
      }).then(res => {
        res = res.data.data;
        this.tableData = res;
      });
    },
    opendialog1(index) {
      this.DialogVisible = true;
    }
  }
};
</script>

<style>
.el-carousel__item:nth-child(2n) {
  background-color: #cde3ff;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #cde3ff;
}
.yemian {
  margin-top: 8%;
}
.first {
  margin-top: 5%;
  margin: 8px;
}
.p {
  margin-left: 40%;
  font-size: x-large;
  color: #0056b3;
}
.second {
  margin: 10px;
}
</style>
