<template>
  <!-- 餐厅管理 -->
    <div class="container">
     <div class="title">
      <span class="el-icon-s-promotion"></span><span>食堂列表</span>
    </div>
    <div class="search">
      <span><el-input v-model="input" placeholder="请输入关键词" style="width: 200px;"></el-input></span>
      <span><el-button>查询</el-button></span>
      <span><el-button>清空</el-button></span>
    </div>
    <div class="table">
      <el-button type="text" @click="add">添加食堂</el-button>
      <el-table
      :data="tableData"
      style="width: 100%"
      max-height="250">
      <el-table-column
        fixed
        prop="name"
        label="食堂名称"
        width="150">
      </el-table-column>
      <el-table-column
        prop="address"
        label="位置"
        width="250">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="联系电话"
        width="200">
      </el-table-column>
      <el-table-column
        prop="createtime"
        label="创建时间"
        width="200">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
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