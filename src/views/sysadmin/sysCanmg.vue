<template>
  <!-- 系统管理员餐厅管理界面 -->
  <div class="container">
    <div class="title">
      <span class="el-icon-s-promotion"></span><span>食堂列表</span>
    </div>
    <div class="search">
      <span><el-input v-model="input" placeholder="请输入关键词" style="width: 200px;"></el-input></span>
      <span><el-button @click="search()">查询</el-button></span>
      <span><el-button @click="input = ''">清空</el-button></span>
    </div>
    <div class="table">
      <el-button type="text" @click="dialogVisible = true">添加食堂</el-button>
      <el-dialog title="添加食堂" :visible.sync="dialogVisible">
        <el-form :model="canteen">
          <el-form-item label="食堂名称" :label-width="formLabelWidth">
            <el-input v-model="canteen.name" autocomplete="off" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="位置" :label-width="formLabelWidth">
            <el-input v-model="canteen.address" autocomplete="off" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" :label-width="formLabelWidth">
            <el-input v-model="canteen.phone" autocomplete="off" placeholder="请输入"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="add()">确 定</el-button>
        </div>
      </el-dialog>
      <el-table :data="canteenList" style="width: 100%" max-height="250">
        <el-table-column fixed prop="name" label="食堂名称" width="150">
        </el-table-column>
        <el-table-column prop="address" label="位置" width="250">
        </el-table-column>
        <el-table-column prop="phone" label="联系电话" width="200">
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="200">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            <el-dialog title="修改食堂信息" :visible.sync="dialogFormVisible" :model="false">
              <el-form :model="newCanteen">
                <el-form-item label="食堂名称" :label-width="formLabelWidth">
                  <el-input v-model="newCanteen.name" autocomplete="off" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="位置" :label-width="formLabelWidth">
                  <el-input v-model="newCanteen.address" autocomplete="off" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" :label-width="formLabelWidth">
                  <el-input v-model="newCanteen.phone" autocomplete="off" placeholder="请输入"></el-input>
                </el-form-item>

              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="update(scope.$index)">确 定</el-button>
              </div>
            </el-dialog>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
  
<script>
import { requestAddCanteen, requestListCanteen, requestUpdateCanteen, requestDeleteCanteen } from '@/api/canteen.js';
import { ref } from 'vue';
export default {
  data() {
    return {
      dialogVisible: false,
      input: '',
      dialogFormVisible: false,
      formLabelWidth: '120px',
      response: '',
      canteen: {
        "canteenId": '',
        "name": '',
        "address": '',
        "phone": '',
        "createTime": ''
      },
      newCanteen: {
        "canteenId": '',
        "name": '',
        "address": '',
        "phone": '',
        "createTime": ''
      },
      canteenList: [],
    }
  },
  mounted() {
    this.lishCanteen();
  },
  methods: {
    search() {
      this.lishCanteen(this.input);
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.newCanteen.name = row.name,
        this.newCanteen.address = row.address,
        this.newCanteen.phone = row.phone,
        this.newCanteen.createtime = row.createtime,
        this.dialogFormVisible = true
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
        let data = await requestDeleteCanteen(row.canteenId);
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
    },
    async add() {
      const name = this.canteen.name;
      const address = this.canteen.address;
      const phone = this.canteen.phone;

      const params = { name: name, address: address, phone: phone };
      let data = await requestAddCanteen(params);
      this.response = data.code;
      if (this.response === 0) {
        location.reload();
      }
      this.dialogVisible = false
    },
    async lishCanteen(name) {
      const searchName = ref(name);

      let data = await requestListCanteen(searchName.value);
      this.canteenList = data.data;
      console.log(this.canteenList)
    },
    async update(index) {
      console.log(index);

      const canteenId = index;
      const newName = this.newCanteen.name;
      const newAddress = this.newCanteen.address;
      const newPhone = this.newCanteen.phone;


      const params = { canteenId: canteenId, name: newName, address: newAddress, phone: newPhone };
      let data = await requestUpdateCanteen(params);
      this.response = data.code;
      if (this.response === 0) {
        location.reload();
      }
      this.dialogFormVisible = false
    },
    postNotice() {
      //   console.log(this.notice.title);
      //   console.log(this.notice.content);
      //   postNotice(qs.stringify(this.notice)).then((result) => {
      //     this.notice.noticeId = result.data.data;
      //     if (result.data.code === 0) {
      //       location.reload();
      //     }
      //   });
      this.dialogVisible = false;
      this.dialogFormVisible = false;
      //   this.notice.title = '',
      //     this.notice.content = ''
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