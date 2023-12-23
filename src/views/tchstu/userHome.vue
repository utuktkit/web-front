<template>
  <!-- 用户首页 -->
  <!-- <link rel="stylesheet" href="./css/iconfont.css"> -->
  <el-container>
    <el-aside width="200px">
      <el-menu style="background-color:  rgb(188, 206, 206);" default-active="2" class="el-menu-vertical-demo"
        @select="handleMenuSelect">
        <el-menu-item index="1">一食堂</el-menu-item>
        <el-menu-item index="2">二食堂</el-menu-item>
        <el-menu-item index="3">五食堂</el-menu-item>
        <el-menu-item index="4">思餐厅</el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <div class="image" style="height: 550px;">
        <el-image :src="activeMenuItem.imgUrl" v-if="activeMenuItem" alt="Active Image" style=" height:500px;"></el-image>
        <div class="nicedish" style="height:500px;margin-top: 20px;">
          <div class="toppage">
            <span class="iconfont icon-daochu1024-07" style="font-size:30px"></span>
            <span>店家推荐</span>
          </div>
          <userdish style="margin-top: 20px;"></userdish>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import userdish from '@/components/userdish'
export default {
  data() {
    return {
      menuItems: [
        { index: '1', name: '一食堂', imgUrl: 'https://i01piccdn.sogoucdn.com/52c6933fa65441e6' },
        { index: '2', name: '二食堂', imgUrl: 'https://i02piccdn.sogoucdn.com/b716fa2cdbcc788e' },
        { index: '3', name: '五食堂', imgUrl: 'https://i04piccdn.sogoucdn.com/b3281fb9cab92e0a' },
        { index: '4', name: '思餐厅', imgUrl: 'https://i03piccdn.sogoucdn.com/869e4494874eef88' },
      ],
      activeMenuItem: null,
    };
  },
  methods: {
    handleMenuSelect(index) {
      this.activeMenuItem = this.menuItems.find((item) => item.index === index);
    },
  },
  components:{
    userdish
  }
};
</script>
  
<style lang="less" scoped>
.el-menu-item {
  margin-top: 40px;
}

.toppage {
  font-size: 30px;
  color: red;
  border-bottom: 5px solid red;
}

</style>