<template>
  <div>
    <h3>编辑通知</h3>
    <el-divider></el-divider>
    <el-form
      :model="adruleForm"
      :rules="adrules"
      ref="adruleForm"
      class="demo-ruleForm"
    >
      <el-form-item prop="adtitle">
        <el-col :span="10">
        <el-input v-model="adruleForm.adtitle">
          <template slot="prepend">标题</template>
        </el-input>
        </el-col>
      </el-form-item>
    </el-form>
    <div id="wangeditor">
      <div id="menu"></div>
      <div id="text" class="etext"></div>
      <el-divider></el-divider>
      <el-button type="primary" round @click="updata">提交</el-button>
    </div>
  </div>
</template>
<script>
import E from "wangEditor";
import "wangeditor/release/wangEditor.min.css";
// wangEditor配置按钮菜单
const btnmenu = [
  "head", //标题
  "bold", //粗体
  "fontSize", //字号
  "fontName", //字体
  "italic", //斜体
  "undeline", //下划线
  "strikeThrough", //删除线
  "foreColor", //文字颜色
  "backColor", //背景颜色
  "link", //插入链接
  "list", //列表
  "justify", //对齐方式
  "quote", //引用
  "emoticon", //表情
  "image", //插入图片
  "table", //表格
  "video", //插入视频
  "code", //插入代码
  "undo", //撤销
  "redo" // 重复
];
export default {
  name: "wangeditor",
  // model:{
  //   prop:'value',
  //   event:'change',
  // },
  // props:{
  //   value:{
  //     type:String,
  //     default:''
  //   },
  //   isClear:{
  //     type:Boolean,
  //     default:''
  //   }
  // },
  data() {
    return {
      exconten: "",
      editor: "",
      info: "",
      adruleForm: {
        adtitle: ""//文章标题
      },
      adrules: {
        adtitle: [
          { required: true, message: "请输入标题", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ]
      }
    };
  },
  mounted() {
    this.editor = new E("#menu", "#text");
    // 自定义菜单配置
    this.editor.customConfig.menus = btnmenu;
    // 配置上传图片为base64
    this.editor.customConfig.uploadImgShowBase64 = false;
    // 配置图片上传服务器
    this.editor.customConfig.uploadImgServer = "/upload";
    // 隐藏“网络图片”tab
    this.editor.customConfig.showLinkImg = false;
    // withCredentials（跨域传递 cookie）
    this.editor.customConfig.withCredentials = true;
    // 自定义header
    this.editor.customConfig.uploadHeader = {};
    // 后端接收上传文件的参数名
    this.editor.customConfig.uploadFileName = "";
    // 将图片大小限制为2M
    this.editor.customConfig.uploadImgMaxSize = 2 * 1024 * 1024;
    // 限制最多上传6张图片
    this.editor.customConfig.uploadImgMaxLength = 6;
    // 设置超时
    this.editor.customConfig.uploadImgTimeout = 3 * 60 * 1000;
    // 关闭粘贴样式的过滤
    this.editor.customConfig.pasteFilterStyle = false;
    // 忽略粘贴内容中的图片
    this.editor.customConfig.pasteIgnoreImg = true;
    // 自定义处理粘贴的文本内容
    this.editor.customConfig.pasteTextHandle = function(content) {
      // content 即粘贴过来的内容（html 或 纯文本），可进行自定义处理然后返回
      // return content + '<p>在粘贴内容后面追加一行</p>'
      return content;
    };
    // url 即插入图片的地址(插入网络图片的回调)
    this.editor.customConfig.linkImgCallback = function(url) {
      console.log(url);
    };
    // 插入链接的校验
    this.editor.customConfig.linkCheck = function(text, link) {
      console.log(text); // 插入的文字
      console.log(link); // 插入的链接
      return true; // 返回 true 表示校验成功
      // return '验证失败' // 返回字符串，即校验失败的提示信息
    };
    // 插入网络图片的校验
    this.editor.customConfig.linkImgCheck = function(src) {
      console.log(src); // 图片的链接
      return true; // 返回 true 表示校验成功
      // return '验证失败' // 返回字符串，即校验失败的提示信息
    };
    // 创建富文本编辑器
    this.editor.create();
    // 获取富文本内容
    this.editor.txt.html();
    // 编辑区域的z-index默认为100
    this.editor.customConfig.zIndex = 100;
    // 图片上传回调
    this.editor.customConfig.uploadImgHooks = {
      fail: (xhr, editor, result) => {
        /**插入图片回调失败 */
      },
      success: (xhr, editor, result) => {
        /**图片上传成功回调 */
      },
      timeout: (xhr, editor, result) => {
        /**网络超时回调 */
      },
      error: (xhr, editor, result) => {
        /**图片上传错误回调 */
      },
      customInsert: (insertImg, result, editor) => {
        /**图片上传成功，插入图片回调 */
      }
    };
    // 上传图片的错误提示默认使用alert弹出，你也可以自定义用户体验更好的提示方式
    this.editor.customConfig.customAlert = function(info) {
      // info 是需要提示的内容
      alert("自定义提示：" + info);
      console.log(info);
    };
    this.editor.customConfig.customUploadImg = function(files, insert) {
      // files 是 input 中选中的文件列表
      // insert 是获取图片 url 后，插入到编辑器的方法
      // 上传代码返回结果之后，将图片插入到编辑器中
      insert(imgUrl);
    };
    // 监听实时富文本输入内容
    // this.editor.customConfig.οnchange=(html)={
    // let info=html;
    // this.$emit('change',info);
    // }
  },
  methods: {
    //请求应该是写在这里，注意把文章标题写入数据库
    updata() {
      alert(this.editor.txt.html());//测试期间方便使用
      this.editor.txt.html(""); //这个的作用是点了提交过后，编辑器的内容变成空
    }
  }
  // watch:{
  //   isClear(val){
  //     // 触发清除文本域内容
  //     if(val){
  //       this.editor.txt.clear();
  //       this.info = '';
  //     }
  //   },
  //   value(val){
  //     // 使用v-model时，设置初始值
  //     this.editor.txt.html(val);
  //   }
  // }
};
</script>
 
<style>
.etext {
  height: 450px;
  border: 1px solid #ccc;
}
</style>