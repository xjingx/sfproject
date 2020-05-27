<template>
  <div>
    <h3>查看名单</h3>
    <el-divider></el-divider>
    <el-table :data="tableData5" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline v-if="props.row.greentype === '缓交'" class="demo-table-expand">
            <el-form-item label="学生学号">
              <span>{{ props.row.snumber }}</span>
            </el-form-item>
            <el-form-item label="学生姓名">
              <span>{{ props.row.sname }}</span>
            </el-form-item>
            <el-form-item label="所在班级">
              <span>{{ props.row.sclass}}</span>
            </el-form-item>
            <el-form-item label="所在专业">
              <span>{{ props.row.major }}</span>
            </el-form-item>
            <el-form-item label="所在学院">
              <span>{{ props.row.department }}</span>
            </el-form-item>
            <el-form-item label="申请类别">
              <span>{{ props.row.greentype }}</span>
            </el-form-item>
            <el-form-item label="缓交金额">
              <span>{{ props.row.delaymoney }}</span>
            </el-form-item>
            <el-form-item label="还款日期">
              <span>{{ props.row.delaydate }}</span>
            </el-form-item>
            <el-form-item label="申请理由">
              <span>{{ props.row.reason }}</span>
            </el-form-item>
          </el-form>
          <el-form label-position="left" inline class="demo-table-expand" v-else>
            <el-form-item label="学生学号">
              <span>{{ props.row.snumber }}</span>
            </el-form-item>
            <el-form-item label="学生姓名">
              <span>{{ props.row.sname }}</span>
            </el-form-item>
            <el-form-item label="所在班级">
              <span>{{ props.row.sclass}}</span>
            </el-form-item>
            <el-form-item label="所在专业">
              <span>{{ props.row.major }}</span>
            </el-form-item>
            <el-form-item label="所在学院">
              <span>{{ props.row.department }}</span>
            </el-form-item>
            <el-form-item label="申请类别">
              <span>{{ props.row.greentype }}</span>
            </el-form-item>
            <el-form-item label="合同编号">
              <span>{{ props.row.serialnumber }}</span>
            </el-form-item>
            <el-form-item label="申请理由">
              <span>{{ props.row.reason }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="学生学号" prop="snumber"></el-table-column>
      <el-table-column label="学生姓名" prop="sname"></el-table-column>
      <el-table-column label="专业" prop="major"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="small"
            type="danger"
            @click.native.prevent="deleteRow(scope.$index, tableData5)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      tableData5: [
        {
          //以下是demo1
          snumber: "12987122", //学生学号
          sname: "李海铭", //学生名字
          sclass: "4", //学生班级
          major: "软件工程", //学生专业
          department: "计算机科学学院", //学生学院
          greentype: "缓交", //绿色通道类别有两种缓交 和 生源地贷款 这个地方写请求的时候要对从后台取到的值进行判断 如果为 缓交 那么adflag的值设置为true
          delaymoney: "5000", //缓交金额
          delaydate: "2019-09-15", //缓交日期
          serialnumber: "", //合同编号这个是生源地贷款才有的
          reason: "233333333333" //申请理由
        },
        {
          //以下是demo2
          snumber: "12987122", //学生学号
          sname: "徐靖翔", //学生名字
          sclass: "4", //学生班级
          major: "软件工程", //学生专业
          department: "计算机科学学院", //学生学院
          greentype: "生源地贷款", //绿色通道类别
          delaymoney: "", //缓交金额
          delaydate: "", //缓交日期
          serialnumber: "123456", //合同编号这个是生源地贷款才有的
          reason: "233333333333" //申请理由
        }
      ],
      adflag: false //默认是false 显示的是类别为生源地贷款的 信息项 也就是合同编号 设置为true以后显示的是 缓交金额和缓交日期
    };
  },
  mounted() {
    this.queryGreenInfo()
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    async queryGreenInfo() {
      await axios({
        method: 'post',
        url: '/api/green/queryGreenInfo',
      })
      .then(res => {
        console.log("res",res.data.error)
        if(res.data.error === 0){
          this.tableData5 = res.data.data
          console.log("query green success", res.data)
        }
      })
    }
  }
};
</script>