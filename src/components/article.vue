<template>
  <!-- 帖子详情 -->
  <div>
    <el-button type="text" @click="dialogFormVisible = true" style="font-size: 30px;">发帖子</el-button>
    <el-dialog title="发帖子" :visible.sync="dialogFormVisible">
      <el-form :model="article">
        <el-form-item label="帖子标题" :label-width="formLabelWidth">
          <el-input v-model="article.name" autocomplete="off" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="帖子内容" :label-width="formLabelWidth">
          <el-input v-model="article.content" autocomplete="off" placeholder="请输入"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-container style="border: 5px solid #ba5c5c">
      <el-descriptions class="custom-descriptions">
        <el-descriptions-item label="标题" labelStyle="font-size:30px"
          contentStyle="font-size:30px">五食堂二楼的脆皮鸡</el-descriptions-item>
        <el-descriptions-item label="发布人" labelStyle="font-size:20px"
          contentStyle="font-size:20px">张三</el-descriptions-item>
        <el-descriptions-item label="内容简介">五食堂二楼的脆皮鸡真好此</el-descriptions-item>
      </el-descriptions>
      <el-link type="primary">进入看帖</el-link>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      article:{
        "articleId":'',
        "name":'',
        "content":''
      },
    }
  },

}
</script>

<style>
.el-descriptions-item {
  background-color: antiquewhite;
  display: block;
}
</style>