<template>
  <!-- 系统管理员主页 -->
  <el-container style="background-color: antiquewhite; height: 800px; border: 1px solid #fdfdfd">
  <el-header style="height: 60px;">
  <topbarsys></topbarsys>
  </el-header>
  <el-container>
  <el-main>
  <router-view></router-view>
  </el-main>
  </el-container>
  
</el-container>
</template>

<script>
import topbarsys from '@/components/topBarsys.vue'
export default {
    components:{
        topbarsys
    }
}
</script>

<style>

</style>