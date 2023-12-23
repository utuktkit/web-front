<template>
    <el-aside width="150px">
        <el-menu style="background-color: rgb(188, 206, 206);" default-active="2" class="el-menu-vertical-demo"
            @select="handleMenuSelect">
            <el-menu-item index="1"><span><el-avatar :size="50"
                        :src="circleUrl"></el-avatar></span><span>用户</span></el-menu-item>
            <el-menu-item index="2"><span><el-avatar :size="50"
                        :src="circleUrl"></el-avatar></span><span>用户</span></el-menu-item>
            <el-menu-item index="3"><span><el-avatar :size="50"
                        :src="circleUrl"></el-avatar></span><span>用户</span></el-menu-item>
            <el-menu-item index="4"><span><el-avatar :size="50"
                        :src="circleUrl"></el-avatar></span><span>用户</span></el-menu-item>
            <el-menu-item index="5"><span><el-avatar :size="50"
                        :src="circleUrl"></el-avatar></span><span>用户</span></el-menu-item>
            <el-menu-item index="6"><span><el-avatar :size="50"
                        :src="circleUrl"></el-avatar></span><span>用户</span></el-menu-item>
            <el-menu-item index="7"><span><el-avatar :size="50"
                        :src="circleUrl"></el-avatar></span><span>用户</span></el-menu-item>
            <el-menu-item index="8"><span><el-avatar :size="50"
                        :src="circleUrl"></el-avatar></span><span>用户</span></el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script>
export default {
    data() {
        return{
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        }
    }
}
</script>

<style></style>