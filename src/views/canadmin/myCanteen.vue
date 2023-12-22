<template>
<!-- 餐厅管理员管理餐厅 -->
<el-container style="border: 1px solid #eee">
    <el-header class="title">
    <div>
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
      font-size: 30px;
      font-weight: 500;
  }

</style>