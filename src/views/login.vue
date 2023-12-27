<template>
  <!-- 登录界面 -->
  <div class="loginbody">
    <div class="logindata">
      <div class="logintext">
        <h3>上理食堂点评社区</h3>
        <h4>Welcome</h4>
      </div>
      <div class="formdata">
        <el-form>
          <el-form-item prop="username">
            <el-input v-model="form.username" clearable placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" clearable placeholder="请输入密码" show-password></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="tool">
        <div>
          <el-checkbox v-model="checked" style="color: black;">记住密码</el-checkbox>
        </div>
        <div>
          <span>忘记密码？</span>
        </div>
      </div>
      <div class="butt">
        <el-button type="primary" @click="login()">登录</el-button>
        <el-button text="text" @click="dialogFormVisible = true">注册</el-button>
      </div>
    </div>
    <div class="dialog">
          <el-dialog title="注册用户" :visible.sync="dialogFormVisible" :modal="false">
            <el-form :model="register">
              <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="register.name" autocomplete="off" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="密码" :label-width="formLabelWidth">
                <el-input v-model="register.password" autocomplete="off" placeholder="请输入" show-password></el-input>
              </el-form-item>
              <el-form-item label="确认密码" :label-width="formLabelWidth">
                <el-input v-model="register.passwordagain" autocomplete="off" placeholder="请输入" show-password></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="postRegister()">确 定</el-button>
            </div>
          </el-dialog>
        </div>
  </div>
</template>
  
<script>
//import { login } from "@/api/login";
import { useTokenStore } from "@/store/token.js";
import { useTypeStore } from "@/store/type.js";
import { userIdStore } from "@/store/userId.js";
import { requestRegister , requestLogin} from '@/api/user.js';
import qs from 'qs';



export default {
  name: "login",// eslint-disable-line
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: "120px",
      response:'',
      register: {
        registerId:'',
        name: '',
        password: '',
        passwordagain: '',
        type:'1'
      },
      form: {
        password: "",
        username: "",
        type:"",
      },
      checked: false,
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { max: 10, message: "不能大于10个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { max: 10, message: "不能大于10个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods:{
    async login() { 
      const idStore = userIdStore();
      const tokenStore = useTokenStore();
      const typeStore = useTypeStore();

      let params = qs.stringify({ "username": this.form.username, "password": this.form.password });
      this.form.type = this.register.type
      // console.log(params)
      console.log(this.form.type)
      let data = await requestLogin(params);
      this.response = data;
      tokenStore.setToken(this.response.data.token);
      typeStore.setType(this.response.data.type);
      idStore.setUserId(this.response.data.userId);
      // alert(tokenStore.token);
      // alert(typeStore.type);
      // alert(idStore.userId);
      this.form.type = typeStore.type;
      if( this.form.type == 1  ){
        this.$router.push('/userhome')
      }else if(this.form.type == 2){
        this.$router.push('/canhome')
      }else if(this.form.type == 3){
        this.$router.push('/syshome')
      }
    },
    async postRegister() {
      if(this.register.password!=this.register.passwordagain){
          alert( "两次密码不一致");
          return;
      }
      console.log(this.register.name)
      const params = {
        username: this.register.name,
        password: this.register.password,
        type: this.register.type
      };
      console.log(params)
      let data = await requestRegister(qs.stringify(params));
      this.response = data;
      this.dialogFormVisible = false
    },
  }
};
</script>
  
<style lang="less" scoped>
.loginbody {
  width: 100%;
  height: 100%;
  min-width: 1000px;
  background-size: 100% 100%;
  background-image: url("../assets/login.jpg");
  background-position: center center;
  overflow: auto;
  background-repeat: no-repeat;
  position: fixed;
  line-height: 100%;
  padding-top: 150px;
}

.logintext {
  margin-bottom: 20px;
  line-height: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}

.logindata {
  width: 400px;
  height: 300px;
  transform: translate(-50%);
  margin-left: 50%;
}

.tool {
  display: flex;
  justify-content: space-between;
  color: #75819a;

}

.butt {
  margin-top: 10px;
  text-align: center;
}
</style>
  
  