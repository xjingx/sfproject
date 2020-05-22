<template>
  <div>
    <div class="title">
      <p>四川师范大学迎新流程及注意事项</p>
    </div>
    <div class="maincontent">
      <p>一、新生需登录四川师范大学迎新专题网（yx.sicnu.edu.cn）认真阅读报到须知内容，并于8月20号登录迎新专题网“网上报到”模块，填写和查询报到相关信息。用户名为14位考生号，初始密码为8位生日号码。</p>
    </div>
    <div class="maincontent">
      <p>二、新生应于2020年8月20日后登录迎新专题网进入“网上报到”模块，通过“在线缴费”方式进行学费缴纳。</p>
    </div>
    <div class="maincontent">
      <p>三、新生持学校签发的《四川师范大学录取通知书》于9月7日8∶00-18∶00，到指定校区（狮子山校区、成龙校区）办理报到注册手续。逾期未报到且未向学校教务处书面请假并获准者视为自动放弃入学资格，学校即对其作退档处理。</p>
    </div>
    <div class="maincontent">
      <p>四、9月7日8∶00-18∶00，学校将在火车站成都北站和成都东站设置新生接待点，并备有“新生接待专用车”接送前往成龙校区的新生（至狮子山校区的新生由志愿者引导到地铁7号线）。</p>
    </div>
    <div class="maincontent">
      <p>五、新生入学报到及后续安排如下：</p>
    </div>
    <div class="maincontent">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="日期" width="200px"></el-table-column>
        <el-table-column prop="thing" label="事件"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style>
.title{
    padding-bottom: 50px;
    text-align: center;
    color: green;
    font-size: x-large;
}

.maincontent{
    font-size: 20px;
    padding: 50px;
    padding-top: 0px;
}
</style>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "9月7日",
          thing:
            "凡办理完网上报到手续的同学到所在校区可直接入住寝室；未办理完网上报到手续的同学到所在校区新生报到自助服务区完成网上报到手续后，方可入住寝室。"
        },
        {
          date: "9月7日下午",
          thing: "各学院分别召开新生家长座谈会，请家长参加。"
        },
        {
          date: "9月8日上午",
          thing: "各学院安排新生熟悉校园环境，召开年级大会，填写《学籍卡》等。"
        },
        {
          date: "9月8日下午至9月12日",
          thing:
            "以学院为单位安排新生入学教育、身体健康状况复查及军训前准备工作等。"
        },
        {
          date: "9月16日至9月29日",
          thing: "集中军训，9月29日上午军训汇报表演。"
        },
        {
          date: "9月29日下午至9月30日",
          thing: "发放教材及行课准备。"
        },
        {
          date: "10月8日",
          thing: "正式行课。"
        }
      ]
    };
  }
};
</script>
