<template>
    <!-- 用户聊天界面，应该也用不到 -->
    <el-container>
        <msgleftbar></msgleftbar>
        <el-main>
            <msgborad></msgborad>
        </el-main>
    </el-container>
</template>
    
<script>
import msgborad from "@/components/msgBoard.vue"
import msgleftbar from "@/components/msgLeftbar.vue"
export default {
    data() {
        return {
        }
    },
    methods: {
        
    },
    components:{
        msgleftbar,
        msgborad
    }
}
</script>
    
<style>

</style>