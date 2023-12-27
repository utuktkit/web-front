<template>
  <!-- 系统管理员评价管理界面 -->
  <div class="container">
    <div class="title">
      <span class="el-icon-s-promotion"></span><span>评价列表</span>
    </div>
    <div class="search">
      <span><el-input v-model="input" placeholder="请输入关键词" style="width: 200px;"></el-input></span>
      <span><el-button>查询</el-button></span>
      <span><el-button @click="doClear">清空</el-button></span>
    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%" max-height="250">
        <el-table-column fixed prop="name" label="用户名" width="150">
        </el-table-column>
        <el-table-column prop="dish" label="评价菜品" width="150">
        </el-table-column>
        <el-table-column prop="score" label="评价分数" width="100">
        </el-table-column>
        <el-table-column prop="content" label="评价内容" width="300">
        </el-table-column>
        <el-table-column prop="createtime" label="评价时间" width="200">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button> -->
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
    doClear() {
      this.input = ''
    },
    // handleEdit(index, row) {
    //   console.log(index, row);
    // },
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          }); 
        })         
    }
  }
}
</script>
    
<style>
.container {
  font-size: larger;
  font-weight: 500;
}

.search {
  margin-left: 1000px;
  margin-top: 50px;
  width: 400px;
}
</style>