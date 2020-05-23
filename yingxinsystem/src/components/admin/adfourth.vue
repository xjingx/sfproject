<template>
  <div class="header">
      <h3>添加学生信息</h3>
      <el-divider></el-divider>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-input
            placeholder="请输入姓名"
            v-model="addUser.addname"
            clearable>
            <template slot="prepend">姓名</template>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-input
            placeholder="请输入学号"
            v-model="addUser.addsnumber"
            clearable>
            <template slot="prepend">学号</template>
          </el-input>
        </el-col>
        <el-col :span="5">
          <el-select v-model="addUser.addsex" placeholder="请选择性别">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-date-picker
            v-model="addUser.addbirthday"
            type="date"
            placeholder="请选择出生日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-input
            placeholder="请输入身份证号码"
            v-model="addUser.addidnumber"
            clearable>
            <template slot="prepend">ID</template>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-input
            placeholder="请输入所在专业"
            v-model="addUser.addmajor"
            clearable>
            <template slot="prepend">专业</template>
          </el-input>
        </el-col>
        <el-col :span="5">
          <el-select v-model="addUser.adddepart" placeholder="请选择学院">
          <el-option label="计算机科学学院" value="计算机科学学院"></el-option>
          <el-option label="生命科学学院" value="生命科学学院"></el-option>
          <el-option label="地理科学学院" value="地理科学学院"></el-option>
          <el-option label="舞蹈学院" value="舞蹈学院"></el-option>
          <el-option label="音乐学院" value="音乐学院"></el-option>
          <el-option label="美术学院" value="美术学院"></el-option>
          <el-option label="经济管理学院" value="经济管理学院"></el-option>
          <el-option label="外国语学院" value="外国语学院"></el-option>
          <el-option label="工学院" value="工学院"></el-option>
          <el-option label="物电学院" value="物电学院"></el-option>
          </el-select>
        </el-col>
        <!-- <el-col :span="5">
          <el-input
            placeholder="请设置密码"
            v-model="addUser.addpw"
            clearable>
            <template slot="prepend">密码</template>
          </el-input>
        </el-col> -->
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-input
            placeholder="请输入电话号码"
            v-model="addUser.addtel"
            clearable>
            <template slot="prepend">电话</template>
          </el-input>
        </el-col>
      </el-row>
      <el-button class="add" type="primary" @click="add">一键添加</el-button>
      <!-- 下面是表格 -->
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">
        <el-table-column
          fixed
          label="序号"
          width="100">
          <template slot-scope="scope">{{ scope.$index +1}}</template>
        </el-table-column>
        <el-table-column
          prop="addname"
          label="姓名"
          width="100">
        </el-table-column>
        <el-table-column
          prop="addsnumber"
          label="学号"
          width="150">
        </el-table-column>
        <el-table-column
          prop="addsex"
          label="性别"
          width="100">
        </el-table-column>
        <el-table-column
          prop="addbirthday"
          label="出生日期"
          width="100">
        </el-table-column>
        <el-table-column
          prop="addmajor"
          label="专业"
          width="100">
        </el-table-column>
        <el-table-column
          prop="adddepart"
          label="学院"
          width="150">
        </el-table-column>
        <el-table-column
          prop="addidnumber"
          label="ID"
          width="150">
        </el-table-column>
        <el-table-column
          prop="addtel"
          label="电话"
          width="150">
        </el-table-column>
        <!-- <el-table-column
          prop="addpw"
          label="密码"
          width="100">
        </el-table-column> -->
        <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click="edit(scope.row,scope.$index)" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" @click="del(scope.$index)" circle></el-button>
      </template>
    </el-table-column>
      </el-table>
      <el-dialog
        title="编辑学生部分信息"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <div>
          <el-form ref="form" :model="editUser" label-width="40px">
            <el-form-item label="姓名">
              <el-input v-model="editUser.addname"></el-input>
            </el-form-item>
            <el-form-item label="学号">
              <el-input v-model="editUser.addsnumber"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-select v-model="editUser.addsex" placeholder="请选择性别">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="生日">
              <el-date-picker
                v-model="editUser.time"
                type="date"
                placeholder="请选择日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="电话">
              <el-input v-model="editUser.addtel"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirm">确 定</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
import Vue from 'vue'
import { MessageBox } from 'element-ui'
import axios from 'axios'
export default {
  name: 'Header',
  data(){
    return{
      addUser:{ //添加学生信息
        addname:'',
        addtel:'',//电话号码
        addsex:'',
        addbirthday:'',
        addmajor:'',
        addsnumber:'',//学号
        addidnumber:'',//身份证号
        adddepart:'',//学院
        //addpw:''密码
      },
      tableData: [{ //以下是固定的表格demo，之后可以取消
        addname:'李海铭',
        addtel:'17361019889',
        addsex:'',
        addbirthday:'',
        addmajor:'软件工程',
        addsnumber:'2017110321',
        addidnumber:'510****************',
        adddepart:'',
        //addpw:'123456'
      }],
      dialogVisible: false, //编辑弹框显示
      editUser:{ //编辑学生部分信息没有做全部
        addname:'',
        addtel:'',//电话号码
        addsex:'',
        addbirthday:'',
        //addmajor:'',
        addsnumber:''//学号
        //addidnumber:'',//身份证号
        //adddepart:'',//学院
        //addpw:''//密码
      },
      userIndex:0,
      search: ''
    }
  },
  methods:{
    async add(){
      if(!this.addUser.addname){
        this.$message({
          message: '请输入姓名',
          type: 'warning'
        });
        return;
      }
      if(!this.addUser.addsnumber){
        this.$message({
          message: '请输入学号',
          type: 'warning'
        });
        return;
      }
      if(!/^1[3456789]\d{9}$/.test(this.addUser.addtel)){//只有这里做了正则验证,其余的做的非空
        this.$message({
          message: '请输入正确的电话号码',
          type: 'warning'
        });
        return;
      }
      if(!this.addUser.addidnumber){
        this.$message({
          message: '请输入身份证号码',
          type: 'warning'
        });
        return;
      }
      // if(!this.addUser.addpw){
      //   this.$message({
      //     message: '请设置密码',
      //     type: 'warning'
      //   });
      //   return;
      // }
      if(!this.addUser.adddepart){
        this.$message({
          message: '请选择所在学院',
          type: 'warning'
        });
        return;
      }
      if(!this.addUser.addsex){
        this.$message({
          message: '请选择性别',
          type: 'warning'
        });
        return;
      }
      if(!this.addUser.addmajor){
        this.$message({
          message: '请输入专业名称',
          type: 'warning'
        });
        return;
      }
      if(!this.addUser.addbirthday){
        this.$message({
          message: '请选择出生日期',
          type: 'warning'
        });
        return;
      }
      await axios({
        method: 'post',
        url: '/api/person/insertPerson',
        data: {
          snumber: this.addUser.addsnumber,//学号
          sname: this.addUser.addname,
          sidnumber: this.addUser.addidnumber,//身份证号
          stestnumber: this.addUser.addtel,//电话号码
          sdepartment: this.addUser.adddepart,//学院
          smajor: this.addUser.addmajor,
          sbirthday: this.addUser.addbirthday,
          sgender: this.addUser.addsex,
        }
      })
      .then(res => {
        console.log("res",res.data.error)
        if(res.data.error === 0){
          this.insertUser()
          this.tableData.push(this.addUser)
          this.addUser=''
        }
      })
    },
    del(idx){
      MessageBox.confirm('此操作将永久删除该表单, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData.splice(idx,1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    handleClose() {
      this.dialogVisible = false
    },
    edit(item,idx){
      this.userIndex = idx
      this.editUser = {
        addname:item.addname,
        addtel:item.addtel,
        addsex:item.addsex,
        addbirthday:item.addbirthday,
        addidnumber:item.addidnumber,
        addmajor:item.addmajor,
        adddepart:item.adddepart,
        //addpw:item.addpw,
        addsnumber:item.addsnumber
      }
      this.dialogVisible = true
    },
    confirm() {
      this.dialogVisible = false
      //this.tableData[this.userIndex] = this.editUser  
      Vue.set(this.tableData,this.userIndex, this.editUser)
    },
    async insertUser() {
      await axios({
        method: 'post',
        url: '/api/user/insertUser',
        data: {
          snumber: this.addUser.addsnumber,//学号
          sname: this.addUser.addname,
          sidnumber: this.addUser.addidnumber,//身份证号
        }
      })
      .then(res => {
        console.log("res",res.data.error)
        if(res.data.error === 0){
          console.log("insert user success", res.data)
        }
      })
    }
  }
}
</script>

<style scoped>
h3{margin: 20px 0 auto;}
.add{margin: 20px 0 auto;width: 30%;margin-left: 30%;}
.el-row {
    margin-bottom: 20px;
  }
</style>
