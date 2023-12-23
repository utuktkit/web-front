<template>
  <!-- 食堂管理员查看自己食堂 -->
  <el-container>
    <el-aside width="300px">
      <el-image style="width: 300px; height: 200px" :src="url"></el-image>
    </el-aside>
    <el-main>
      <el-descriptions class="custom-descriptions">
        <el-descriptions-item label="餐厅名">{{ canbrief.name }}</el-descriptions-item>
        <el-descriptions-item label="地址">{{ canbrief.address }}</el-descriptions-item>
        <el-descriptions-item label="营业时间">{{ canbrief.time }}</el-descriptions-item>
        <el-descriptions-item label="简介">{{ canbrief.brief }}</el-descriptions-item>
      </el-descriptions>
      <el-link type="primary" style="font-size: 30px;"><router-link to="/canmanager">管理餐厅</router-link></el-link>
      <el-button type="danger" class="changebtn" plain @click="dialogFormVisible = true">修改信息</el-button>
      <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
        <el-form :model="canbrief">
          <el-form-item label="餐厅名" :label-width="formLabelWidth">
            <el-input v-model="canbrief.name" autocomplete="off" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="地址" :label-width="formLabelWidth">
            <el-input v-model="canbrief.address" autocomplete="off" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="营业时间" :label-width="formLabelWidth">
            <el-input v-model="canbrief.time" autocomplete="off" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="简介" :label-width="formLabelWidth">
            <el-input v-model="canbrief.brief" autocomplete="off" placeholder="请输入"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="changeIntro,dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      canbrief: {
        "name": '一食堂',
        "address":'南校',
        "time": '8:00-22:00',
        "brief": '这是简介'
      },
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  methods: {
    changeIntro() {
      this.canbrief.name = canbrief.name;
      this.canbrief.time = canbrief.time;
      this.canbrief.brief = canbrief.brief;
    }
  }
}
</script>

<style>
.el-descriptions-item {
  background-color: antiquewhite;
  display: block;
  font-size: large;
}
.changebtn{
  float: right;
}
</style>