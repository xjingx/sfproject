<template>
<div>
  <h3>查看名单</h3>
  <el-divider></el-divider>
  <el-table
    :data="tableData5"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
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
            <span>{{ props.row.smajor }}</span>
          </el-form-item>
          <el-form-item label="所在学院">
            <span>{{ props.row.sdep }}</span>
          </el-form-item>
          <el-form-item label="申请类别">
            <span>{{ props.row.stype }}</span>
          </el-form-item>
          <el-form-item label="申请理由">
            <span>{{ props.row.sreason }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="学生学号"
      prop="snumber">
    </el-table-column>
    <el-table-column
      label="学生姓名"
      prop="sname">
    </el-table-column>
    <el-table-column
      label="专业"
      prop="smajor">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="small"
          type="danger"
          @click.native.prevent="deleteRow(scope.$index, tableData5)">删除</el-button>
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
  export default {
    data() {
      return {
        tableData5: [{//以下是demo1
          snumber: '12987122',//学生学号
          sname: '李海铭',//学生名字
          sclass: '4',//学生班级
          smajor: '软件工程',//学生专业
          sdep: '计算机科学学院',//学生学院
          stype: '低保',//绿色通道类别
          sreason: '233333333333'//申请理由
        },
        {//以下是demo2
          snumber: '12987122',//学生学号
          sname: '徐靖翔',//学生名字
          sclass: '4',//学生班级
          smajor: '软件工程',//学生专业
          sdep: '计算机科学学院',//学生学院
          stype: '低保',//绿色通道类别
          sreason: '233333333333'//申请理由
        }
        ]
      }
    },
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    }
  }
</script>