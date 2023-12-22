<template>
    <!-- 用户主页 -->
    <el-container style="background-color: antiquewhite; height: 800px; border: 1px solid #fdfdfd">
    <el-header style="height: 60px;">
    <topbaruser></topbaruser>
    </el-header>
    <el-container>
    <el-main>
    <router-view></router-view>
    </el-main>
    </el-container>
  </el-container>
</template>
  
  <script>
  import topbaruser from '@/components/topBaruser.vue'
  export default {
      components:{
          topbaruser
      }
  }
  </script>
  
  <style>
  
  </style>