<template>
  <!-- 用户首页 -->
  <div style="height: 1100px;">
  <home></home>
    <div class="nicedish" style="height:500px;">
            <div class="toppage">
              <span class="iconfont icon-daochu1024-07" style="font-size:30px"></span>
              <span>店家推荐</span>
            </div>
            <userdish style="margin-top: 20px;"></userdish>
          </div>
  </div>
  
</template>
<script>
import home from '@/components/home.vue'
import userdish from '@/components/userdish.vue'
export default {
  data() {
    return {
      
    };
  },
  methods: {
   
  },
  components:{
    userdish,
    home
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