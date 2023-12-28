<template>
  <!-- 系统管理员账号管理界面 -->
  <div class="container">
    <div class="title">
      <span class="el-icon-s-promotion"></span><span>账号列表</span>
    </div>
    <div class="search">
      <span><el-input v-model="input" placeholder="请输入关键词" style="width: 200px;"></el-input></span>
      <span><el-button @click="search()">查询</el-button></span>
      <span><el-button @click="input = ''">清空</el-button></span>
    </div>
    <div class="table">
      <el-button type="text" @click="dialogVisible = true">添加账号</el-button>
      <el-dialog title="添加账号" :visible.sync="dialogVisible">
        <el-form :model="user">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="user.name" autocomplete="off" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" :label-width="formLabelWidth">
            <el-input v-model="user.phone" autocomplete="off" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="用户类型" :label-width="formLabelWidth">
            <el-input v-model="user.type" autocomplete="off" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="创建时间" :label-width="formLabelWidth">
            <el-date-picker v-model="user.createtime" type="datetime" placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="add(user)">确 定</el-button>
        </div>
      </el-dialog>
      <el-table :data="userList" style="width: 100%" max-height="800px">
        <el-table-column fixed prop="username" label="用户名" width="150">
        </el-table-column>

        <el-table-column prop="phone" label="联系电话" width="200">
        </el-table-column>

        <el-table-column prop="type" label="用户类型" width="200">
        </el-table-column>

        <el-table-column prop="createTime" label="创建时间" width="200">
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            <el-dialog title="修改账号信息" :visible.sync="dialogFormVisible">
              <el-form :model="newUser">
                <el-form-item label="用户名" :label-width="formLabelWidth">
                  <el-input v-model="newUser.name" autocomplete="off" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" :label-width="formLabelWidth">
                  <el-input v-model="newUser.phone" autocomplete="off" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="用户类型" :label-width="formLabelWidth">
                  <el-input v-model="newUser.type" autocomplete="off" placeholder="请输入"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="update()">确 定</el-button>
              </div>
            </el-dialog>

           

            <el-button v-if="scope.row.type === 1" size="mini" @click="adminC(scope.row)">任命食堂管理员</el-button>
            <el-dialog title="任命食堂管理员" :visible.sync="diaVisible">
              <el-form :model="user">
                <el-form-item label="管理的食堂名" :label-width="formLabelWidth">
                  <el-input v-model="admin.name" autocomplete="off" placeholder="请输入"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="diaVisible = false">取 消</el-button>
                <el-button type="primary" @click="adminCanteen()">确 定</el-button>
              </div>
            </el-dialog>

          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
  
<script>
import { requestAddByCanteenName } from '@/api/canteenAdmin.js';
import { requestListUser } from '@/api/user'
import { ref } from 'vue';
import qs from 'qs';
export default {
  data() {
    return {
      dialogVisible: false,
      dialogFormVisible: false,
      diaVisible: false,
      input:'',
      user: {
        "userId": '',
        "name": '',
        "phone": '',
        "type": '',
        "createtime": ''
      },
      newUser: {
        "userId": '',
        "name": '',
        "phone": '',
        "type": '',
        "createtime": ''
      },
      admin: {
        userId: '',
        canteenName: '',
        canteenId: '',
      },
      userList: [],
      noticeList: [],
      formLabelWidth: '120px',
    
      
    }
  },
  mounted() {
    this.listUser();
    // getNotice().then((result) => {
    //   this.noticeList = result.data.data;
    // });
  },
  methods: {
  
    handleEdit(index, row) {
      console.log(index, row);
      this.newUser.name = row.username,
        this.newUser.phone = row.phone,
        this.newUser.type = row.type,
        this.newUser.createtime = row.createtime,
        this.dialogFormVisible = true
    },
    handleSet(index, row) {
      console.log(index, row);
      console.log(row.name)
      // row.type = 2
    },
    add(user) {
      console.log(user)
      this.dialogVisible = false
    },
    update() {
      console.log(this.newUser),
        this.dialogFormVisible = false
    },
    adminC(row){
      this.diaVisible = true
      console.log(row)
      this.admin.userId = row.userId
    },
    async adminCanteen() {
      console.log(this.admin.name)
      console.log( this.admin.userId)
      const canteenName = this.admin.name;


      const params = { canteenName: canteenName, userId:  this.admin.userId };
      let data = await requestAddByCanteenName(qs.stringify(params));
      console.log(data)

      this.response = data.code;
      if (this.response === 0) {
        location.reload();
      }
      this.diaVisible = false
    },

    async listUser() {
      const name = this.input
      const listType = ref();
      console.log(name)
      let data = await requestListUser(name, listType.value);
      this.userList = data.data;
      console.log(this.userList)
    },
    search() {
      this.listUser(this.input);
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

.title {
  font-size: 30px;
  font-weight: 500;
}
</style>