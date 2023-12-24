<template>
  <!-- 用户交流社区，不相干，做个空架子 -->
  <div class="container" style="height: 1000px;">
    <div class="title">
      <span class="el-icon-s-promotion"></span><span>交流社区</span>
    </div>
    <div class="search">
      <span><el-input v-model="input" placeholder="请输入关键词" style="width: 200px;"></el-input></span>
      <span><el-button>查询</el-button></span>
      <span><el-button @click="doClear">清空</el-button></span>
    </div>
    <div>
      <articleVue></articleVue>
    </div>
  </div>
</template>
    
<script>
import articleVue from "@/components/article.vue"
export default {
  data() {
    return {
      input: '',
    }
  },
  methods: {
    doClear(){
      this.input=''
    },

  },
  components: {
    articleVue
  }
}
</script>
    
<style>
.container {
  font-size: larger;
  font-weight: 500;
}

.search {
  margin-left: 800px;
  margin-top: 50px;
  width: 400px;
}

.title {
  font-size: 30px;
  font-weight: 500;
}
</style>