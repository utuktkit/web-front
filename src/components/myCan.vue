<template>
    <el-container>
  <el-aside width="300px">
    <el-image
      style="width: 300px; height: 200px"
      :src="url"></el-image>
  </el-aside>
  <el-main>
  <el-descriptions class="custom-descriptions">
    <el-descriptions-item label="餐厅名">一食堂</el-descriptions-item>
    <el-descriptions-item label="营业时间">8:00-20:00</el-descriptions-item>
    <el-descriptions-item label="简介">简介</el-descriptions-item>
</el-descriptions>
<el-link type="primary">管理餐厅</el-link>
</el-main>
</el-container>
</template>

<script>
export default {
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    },
   
}
</script>

<style>
  .el-descriptions-item{
    background-color:antiquewhite;
      display: block;
      font-size: large;
    }
</style>