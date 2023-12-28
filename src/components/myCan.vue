<template>
  <!-- 食堂管理员查看自己食堂 -->
  <el-container>
    <el-aside width="300px">
      <el-image style="width: 300px; height: 200px" :src="url"></el-image>
    </el-aside>
    <el-main>
      <el-descriptions class="custom-descriptions">
        <el-descriptions-item label="餐厅名">{{ canteen.name }}</el-descriptions-item>
        <el-descriptions-item label="地址">{{ canteen.address }}</el-descriptions-item>
        <el-descriptions-item label="营业时间">8:00-20:00</el-descriptions-item>
      </el-descriptions>
      <el-link type="primary" style="font-size: 30px;"  @click="goSwork">管理餐厅</el-link>
      <el-button type="danger" class="changebtn" plain @click="update()">修改信息</el-button>
      <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
        <el-form :model="canbrief">
          <el-form-item label="餐厅名" :label-width="formLabelWidth">
            <el-input v-model="canbrief.name" autocomplete="off" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="地址" :label-width="formLabelWidth">
            <el-input v-model="canbrief.address" autocomplete="off" placeholder="请输入"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="changeIntro()">确 定</el-button>
        </div>
      </el-dialog>
    </el-main>
  </el-container>
</template>

<script>
import { getCanteenByAdminId } from "@/api/canteenAdmin"
import { userIdStore } from "@/store/userId.js";
import { requestUpdateCanteen } from '@/api/canteen.js';
import { ref } from 'vue';
export default {
  data() {
    return {
      canteen: {},
      dialogFormVisible: false,
      canbrief: {
        name: '',
        address: '',
        time: '',
      },
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  mounted() {
    this.getCanteen();
  },
  methods: {
    async getCanteen() {
      const idStore = userIdStore();
      const adminId = idStore.userId;

      let data = await getCanteenByAdminId(adminId);
      this.canteen = data.data;
      console.log(this.canteen)
    },
    async update() {

      this.dialogFormVisible = true;
      this.canbrief.name = this.canteen.name;
      this.canbrief.address = this.canteen.address;


    },
    async changeIntro() {
      const newPhone = ref();
      const params = { canteenId: this.canteen.canteenId, name: this.canbrief.name, address: this.canbrief.address, phone: newPhone.value };
      let data = await requestUpdateCanteen(params);
      if (data.code === 0) {
          location.reload();
        }
      this.dialogFormVisible = false
    },
    goSwork() {
      
      this.$router.push({
        path: '/canmanager',
        query: { canteenName: this.canteen.name}
      });
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

.changebtn {
  float: right;
}
</style>