<template>
    <!-- 用户浏览餐厅简介 -->
    <el-container style="height: 1000px;">
        <el-header class="title">
        <div>
          <span class="el-icon-s-promotion"></span><span>美味食堂</span>
        </div>
        </el-header>
          <el-main>
            <stucan></stucan>
            <stucan></stucan>

          </el-main>
        </el-container>
</template>
    
    <script>
    import stucan from "@/components/stuCan.vue"
    export default {
        data() {
          return {
            canteenId:'',
          }
        },
        components:{
            stucan
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