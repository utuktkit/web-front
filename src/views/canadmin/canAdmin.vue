<template>
    <!-- 餐厅管理员主页（父路由，其他皆为子路由） -->
    <el-container style="background-color: antiquewhite; border: 1px solid #fdfdfd">
    <el-header style="height: 60px;">
    <topbarcan></topbarcan>
    </el-header>
    <el-container>
    <el-main>
    <router-view></router-view>
    </el-main>
    </el-container>
    
  </el-container>
</template>
  
  <script>
  import topbarcan from '@/components/topBarcan.vue'
  export default {
      components:{
          topbarcan
      }
  }
  </script>
  
  <style>
  
  </style>