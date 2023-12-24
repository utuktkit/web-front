<template>
    <!-- 用户看到的菜品信息，可以评分 -->
    <div class="dish">
        <el-image style="width: 300px; height: 200px" :src="url" :fit="fit"></el-image>
        <div class="dishname">脆皮鸡饭

            <span>
                <div class="comment">
                    <el-button type="warning" @click="dialogFormVisible = true">评价</el-button>
                    <el-dialog title="评价菜品" :visible.sync="dialogFormVisible">
                        <el-form :model="canbrief">
                            <el-form-item label="评价内容" :label-width="formLabelWidth">
                                <el-input autocomplete="off" placeholder="请输入"></el-input>
                            </el-form-item>
                            <el-form-item label="打个分吧" :label-width="formLabelWidth">
                                <el-rate v-model="value2" :colors="colors"></el-rate>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                        </div>
                    </el-dialog>
                </div>
            </span>
        </div>
        <div class="price"><span>¥</span><span>14.00</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value2: null,
            colors: ['#99A9BF', '#F7BA2A', '#FF9900'],  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
            dialogFormVisible: false,
            fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            url: 'https://i02piccdn.sogoucdn.com/16a536e26f6fa898'
        }
    },

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

span {
    font-size: 20px;
    color: red;
}

.el-rate {
    margin-top: 10px;
}

.comment {
    float: right;
}
</style>