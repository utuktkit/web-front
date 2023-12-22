<template>
    <!-- 餐厅管理员投诉管理 -->
      <div class="container">
       <div class="title">
        <span class="el-icon-s-promotion"></span><span>投诉列表</span>
      </div>
      <div class="search">
        <span><el-input v-model="input" placeholder="请输入关键词" style="width: 200px;"></el-input></span>
        <span><el-button>查询</el-button></span>
        <span><el-button>清空</el-button></span>
      </div>
      <div class="table">
        <el-table
        :data="tableData"
        style="width: 100%"
        max-height="250">
        <el-table-column
          fixed
          prop="name"
          label="用户名"
          width="150">
        </el-table-column>
        <el-table-column
          prop="dish"
          label="评价菜品"
          width="150">
        </el-table-column>
        <el-table-column
          prop="complaint"
          label="投诉内容"
          width="300">
        </el-table-column>
        <el-table-column
          prop="createtime"
          label="投诉时间"
          width="200">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleBrowse(scope.$index, scope.row)">浏览</el-button>
            <el-button
              size="mini"
              @click="handleComment(scope.$index, scope.row)">回复</el-button>
          </template>
        </el-table-column>
      </el-table>
      </div>
      </div>
     
</template>
    
  <script>
    export default {
      data() {
        return {
          input: '',
      }
    },
      methods: {
        handleBrowse(index, row) {
            console.log(index, row);
          },
          handleComment(index, row) {
            console.log(index, row);
          }
        }
    }
  </script>
    
  <style>
    .container{
        font-size: larger;
        font-weight: 500;
    }
    .search{
        margin-left: 800px;
        margin-top: 50px;
        width: 400px;
    }
    
  </style>