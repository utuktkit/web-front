<template>
  <!-- 用户浏览餐厅简介 -->
  <el-container style="height: 1000px;">
    <el-header class="title">
      <div>
        <span class="el-icon-s-promotion"></span><span>美味食堂</span>
      </div>
    </el-header>
    <el-main>
      <stucan v-for="canteen in canteenList" :key="canteen.canteenId" :canteen="canteen"></stucan>

    </el-main>
  </el-container>
</template>
    
<script>
import { requestListCanteen } from '@/api/canteen.js';
import stucan from "@/components/stuCan.vue"
import { ref } from 'vue';
export default {
  mounted() {
    this.lishCanteen();
  },
  data() {
    return {
      canteen: {
        "canteenId": '',
        "name": '',
        "address": '',
        "phone": '',
        "createTime": ''
      },

      canteenList: [],
    }
  },
  components: {
    stucan
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