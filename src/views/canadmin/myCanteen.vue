<template>
  <!-- 餐厅管理员管理餐厅（食堂管理界面） -->
  <el-container style="height: 1000px; border: 1px solid #eee">
    <el-header class="title">
      <div>
        <span class="el-icon-s-promotion"></span><span>我的食堂</span>
      </div>
    </el-header>
    <el-main>
      <mycan></mycan>
    </el-main>
  </el-container>
</template>

<script>
import mycan from "@/components/myCan.vue"
import { requestListCanteen } from '@/api/canteen.js';
import { ref } from 'vue';
export default {
  mounted() {
    this.lishCanteen();
  },
  data() {
    return {
    }
  },
  components: {
    mycan
  },
  methods: {
    async lishCanteen() {
      const searchName = ref();

      let data = await requestListCanteen(searchName.value);
      this.canteenList = data.data;
      console.log(this.canteenList)
    },
  },

}
</script>

<style>
.el-descriptions-item {
  display: block;
  font-size: large;
}

.title {
  font-size: 30px;
  font-weight: 500;
}
</style>