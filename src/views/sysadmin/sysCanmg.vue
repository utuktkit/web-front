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
      <el-button type="text" @click="dialogFormVisible = true">添加食堂</el-button>
      <el-dialog title="添加食堂" :visible.sync="dialogFormVisible">
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
          <el-form-item label="创建时间" :label-width="formLabelWidth">
            <el-date-picker v-model="canteen.createtime" type="datetime" placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="postNotice">确 定</el-button>
        </div>
      </el-dialog>
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
        dialogFormVisible: false,
      canteen: {
        "canteenId": '',
        "name": '',
        "address": '',
        "phone":'',
        "createtime":''
      },
      pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
    }
  },
    methods: {
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          console.log(index, row);
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

       this.dialogFormVisible = false;
    //   this.notice.title = '',
    //     this.notice.content = ''
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
      margin-left: 1000px;
      margin-top: 50px;
      width: 400px;
  }
  
</style>