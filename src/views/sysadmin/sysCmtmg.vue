<template>
  <!-- 系统管理员评价管理界面 -->
  <div class="container">
    <div class="title">
      <span class="el-icon-s-promotion"></span><span>评价列表</span>
    </div>
    <div class="search">
      <span><el-input v-model="input" placeholder="请输入关键词" style="width: 200px;"></el-input></span>
      <span><el-button  @click="search()">查询</el-button></span>
      <span><el-button @click="doClear">清空</el-button></span>
    </div>
    <div>
      <el-table :data="commentList" style="width: 100%" max-height="250">
        <el-table-column fixed prop="username" label="用户名" width="150">
        </el-table-column>
        <el-table-column prop="dishName" label="评价菜品" width="150">
        </el-table-column>
        <el-table-column prop="score" label="评价分数" width="100">
        </el-table-column>
        <el-table-column prop="content" label="评价内容" width="300">
        </el-table-column>
        <el-table-column prop="createTime" label="评价时间" width="200">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="修改评价" :visible.sync="dialogFormVisible">
      <el-form :model="canbrief">
        <el-form-item label="评价内容" :label-width="formLabelWidth">
          <el-input v-model="value1" autocomplete="off" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="打分" :label-width="formLabelWidth">
          <el-input v-model="value2" autocomplete="off" placeholder="请输入"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="update()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
    
<script>
import { requestListComment, requestUpdateComment ,requestDeleteComment} from '@/api/comment.js'
import { ref } from 'vue';
export default {
  data() {
    return {
      input: '',
      commentId: '',
      value1: '',
      value2: '',
      commentList: [],
      dialogFormVisible: false,
    }
  },
  mounted() {
    this.listComment();
  },
  methods: {
    search() {
      this.listComment(this.input);
    },
    async listComment(name) {
      const listDishId = ref();
      const listUserId = ref();
      let data = await requestListComment(name, listDishId.value, listUserId.value);
      this.commentList = data.data;
      console.log(this.commentList);
    },
    doClear() {
      this.input = ''
    },
    async handleEdit(index, row) {
      this.commentId = row.commentId,
        this.value1 = row.content,
        this.value2 = row.score,
        this.dialogFormVisible = true


    },
    async update() {
      const params = { commentId: this.commentId, content: this.value1, score: this.value2 }
      let data = await requestUpdateComment(params);
      this.commentList = data.data;
      console.log(this.commentList);
      if (data.code === 0) {
        location.reload();
      }
      this.dialogFormVisible = false
    },
    async handleDelete(row) {
      console.log(row);
      try {
      await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      });
      console.log(row);
      let data = await requestDeleteComment(row.commentId);
      this.response = data.code;
      if (this.response === 0) {
        location.reload();
      }
      this.$message({
        type: 'success',
        message: '删除成功!'
      });
    } catch (error) {
      this.$message({
        type: 'info',
        message: '已取消删除'
      });
    }
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