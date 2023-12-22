<template>
    <!-- 用户上边栏 -->
     <div class="topbar">
     <el-menu
       :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1"><el-image
        style="width: 50px; height: 50px"
        :src="url"
        :fit="fit"></el-image></el-menu-item>
        <el-menu-item index="2"><router-link to="/userhome">首页</router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="/userbrocan">好逛食堂</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="/usercommity">交流社区</router-link></el-menu-item>
        <el-badge :value="3" class="item">
        <el-menu-item index="5"><router-link to="/usermessage">消息管理</router-link></el-menu-item></el-badge>
        <el-menu-item index="6" class="right-align"><el-avatar :size="50" :src="circleUrl"></el-avatar></el-menu-item>
     </el-menu> 
  </div>
     
</template>
  <script>
    export default {
      data() {
        return {
          activeIndex: '1',
          fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
          url: 'https://i.postimg.cc/BQdqhjb1/A2-PJ-4-TLQ18-QVH-RQ59-S-U.png',
          circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
  </script>
  <style lang="less" scoped>
  
  .right-align {
    float: right;
  }
  </style>