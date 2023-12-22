<template>
<!-- 餐厅管理员管理餐厅 -->
<el-container style="height: 800px; border: 1px solid #eee">
    <el-header>
    <div class="title">
      <span class="el-icon-s-promotion"></span><span>我的食堂</span>
    </div>
    </el-header>
    
      <el-main>
        <mycan></mycan>
      </el-main>
    </el-container>
</template>

<script>
import mycan from "@/components/myCan.vue"
export default {
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    },
    components:{
        mycan
    }
   
}
</script>

<style>
  .el-descriptions-item{
      display: block;
      font-size: large;
    }
    .title{
      font-size: larger;
      font-weight: 500;
  }

</style>