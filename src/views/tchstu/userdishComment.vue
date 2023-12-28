<template>
    <div class="container" style="height: 1100px;">
        <div class="title">
            <span class="el-icon-s-promotion"></span><span>评价列表</span>
        </div>
        <div class="dish" style="margin-top: 20px;">
            <el-image style="width: 300px; height: 200px" :src="url" :fit="fit"></el-image>
            <!-- <div class="dishname">脆皮鸡饭 -->
            <div class="dishname">{{ dishname }}
                <div class="price"><span>¥</span><span>{{ price }}</span>
                </div>
            </div>
        </div>
        <div style="margin-top: 20px;">
            <el-table :data="commentList" style="width: 100%" max-height="250">
                <el-table-column fixed prop="username" label="用户名" width="150">
                </el-table-column>
                <el-table-column prop="score" label="评价分数" width="100">
                </el-table-column>
                <el-table-column prop="content" label="评价内容" width="300">
                </el-table-column>
                <el-table-column prop="createTime" label="评价时间" width="200">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import { requestListComment } from '@/api/comment.js'
import { ref } from 'vue';
export default {
    mounted() {
        this.dishId = this.$route.query.dishId;
        console.log(this.dishId)
        this.dishname = this.$route.query.dishname;
        this.price = this.$route.query.price;
        this.listComment();
    },
    data() {
        return {
            dishId:'',
            dishname: '',
            price: '',
            commentList:'',
            fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            url: 'https://i02piccdn.sogoucdn.com/16a536e26f6fa898'
        }
    },
    methods: {
        async listComment() {
            const name = ref()
            const listUserId = ref();
            let data = await requestListComment( name.value ,this.dishId, listUserId.value);
            this.commentList = data.data;
           
            console.log(this.commentList);
        },
    }
}
</script>

<style lang="less" scoped>
.dish {
    width: 300px;
    border: 4px solid #ccc;
}

.dishname {
    font-weight: 1000;
    font-size: 25px;
}

.price {
    font-size: 20px;
    color: red;
}
</style>