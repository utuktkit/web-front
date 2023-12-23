<template>
    <el-container>
        <el-header style="height: 100px;">
            <el-image style="width: 100%; height: 100px" :src="url" :fit="fit"></el-image>
            <div class="canteenname">一食堂</div>
        </el-header>
        <el-main>
            <div class="container">
                <div class="topbar">
                    <span class="el-icon-s-promotion"></span><span>美味菜品</span>
                </div>
                <div class="search">
                    <span><el-input v-model="input" placeholder="请输入关键词" style="width: 200px;"></el-input></span>
                    <span><el-button>查询</el-button></span>
                    <span><el-button>清空</el-button></span>
                </div>
            </div>
            <userdish></userdish>
        </el-main>
    </el-container>
</template>

<script>
import userdish from '@/components/userdish.vue'
export default {
    data() {
        return {
            fileList: [],
            dialogFormVisible: false,
            dish: {
                "dishId": '',
                "name": '',
                "price": '',
                "image": ''
            },
            input: '',
            fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        }
    },
    components: {
        userdish
    },
}
</script>

<style>
.dish {
    margin-top: 5px;
}

.el-header {
    position: relative;
}

.canteenname {
    letter-spacing: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(218, 149, 149);
    font-size: 52px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
}

.right-align {
    float: right;
}

.topbar {
    font-size: 30px;
    font-weight: 500;
    height: 50px;
    border-bottom: 3px solid #ccc;
}

.search {
    margin-left: 1000px;
    width: 400px;
}
</style>