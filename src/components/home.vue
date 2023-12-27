<template>
    <!-- 首页的一个组件，包含侧边框和图片 -->
    <el-container style="height: 540px;">
    <el-aside width="150px">
      <el-menu style="background-color: rgb(188, 206, 206);" default-active="2" class="el-menu-vertical-demo"
        @select="handleMenuSelect">
        <el-menu-item index="1">一食堂</el-menu-item>
        <el-menu-item index="2">二食堂</el-menu-item>
        <el-menu-item index="3">五食堂</el-menu-item>
        <el-menu-item index="4">思餐厅</el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
        <div class="image-container" style="height: 500px; width: 1000px">
          <el-image
            v-for="(img, index) in images"
            :key="index"
            :src="img"
            :class="{ active: activeIndex === index }"
            alt="Image"
            style="width: 75%; height: 80%; object-fit: cover;"
          ></el-image>
        </div>
      </el-main>
  </el-container>
</template>
<script>
export default {
  name:'home',// eslint-disable-line
  data() {
    return {
      activeIndex: 0,
        images: [
          'https://i02piccdn.sogoucdn.com/7d1b98d6b89f9236',
          'https://i02piccdn.sogoucdn.com/4ae19e3515026ad5',
          'https://i01piccdn.sogoucdn.com/b056196ca75b38e3',
          'https://i01piccdn.sogoucdn.com/8cb1ad1cd44cc428',
          'https://i03piccdn.sogoucdn.com/ed9b2445687a8f5f',
          'https://i04piccdn.sogoucdn.com/71e13200147dc3c1'
        ]
    };
  },
  mounted() {
      this.startImageRotation();
    },
  methods: {
    handleMenuSelect(index) {
        this.activeIndex = parseInt(index) - 1;
      },
      startImageRotation() {
        setInterval(() => {
          this.activeIndex = (this.activeIndex + 1) % this.images.length;
        }, 5000); // 每隔5秒切换一次图片
      }
  }
}
</script>

<style lang="less" scoped>
.el-menu-item {
  margin-top: 50px;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 8px;
}

  .el-image.active {
    display: block;
  }
  
  .el-image:not(.active) {
    display: none;
  }
</style>