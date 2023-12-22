<template>
  <!-- 用户查看食堂信息 -->
  <el-container>
    <el-aside width="300px">
      <el-image style="width: 300px; height: 200px" :src="url"></el-image>
    </el-aside>
    <el-main>
      <el-descriptions class="custom-descriptions">
        <el-descriptions-item label="餐厅名">一食堂</el-descriptions-item>
        <el-descriptions-item label="营业时间">8:00-20:00</el-descriptions-item>
        <el-descriptions-item label="简介">简介</el-descriptions-item>
      </el-descriptions>
      <el-link type="primary" style="font-size: 40px;">逛好菜</el-link>
      <el-button type="text" @click="open" class="right-align" style="color: red;">投诉食堂</el-button>
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
  methods: {
    open() {
      this.$prompt('请输入投诉原因', '投诉食堂', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '投诉成功'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    }
  }

}
</script>

<style>
.el-descriptions-item {
  background-color: antiquewhite;
  display: block;
  font-size: large;
}

.right-align {
  float: right;
}
</style>