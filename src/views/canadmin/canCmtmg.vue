<template>
  <!-- 餐厅管理员评价管理 -->
  <div class="container" style="height: 1000px;">
    <div class="title">
      <span class="el-icon-s-promotion"></span><span>评价列表</span>
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
        <!-- <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleBrowse(scope.$index, scope.row)">浏览</el-button>
            <el-button size="mini" @click="handleComment(scope.$index, scope.row)">回复</el-button>
          </template>
        </el-table-column> -->
      </el-table>
    </div>
  </div>
</template>
    
<script>
import { requestListByCanteen } from '@/api/comment.js'
import { canteenIdStore } from "@/store/canteenId.js"

export default {
  data() {
    return {
      input: '',
      commentList: [],
    }
  },
  mounted() {
    this.listComment();
  },
  methods: {
    doClear() {
      this.input = ''
    },
    handleBrowse(index, row) {
      console.log(index, row);
    },
    handleComment(index, row) {
      console.log(index, row);
    },
    async listComment() {
      const canteenStore = canteenIdStore();
      const canteenId = canteenStore.canteenId;
      // console.log(canteenId)

      let data = await requestListByCanteen(canteenId);
      this.commentList = data.data;
      console.log(this.commentList);
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