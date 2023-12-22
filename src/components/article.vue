<template>
  <!-- 帖子详情 -->
  <div>
    <el-button type="text" @click="add" style="font-size: 30px;">发帖子</el-button>
    <el-container style="border: 5px solid #ba5c5c">
    <el-descriptions class="custom-descriptions">
      <el-descriptions-item label="标题"  labelStyle="font-size:30px" contentStyle="font-size:30px">五食堂二楼的脆皮鸡</el-descriptions-item>
      <el-descriptions-item label="发布人" labelStyle="font-size:20px" contentStyle="font-size:20px">张三</el-descriptions-item>
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