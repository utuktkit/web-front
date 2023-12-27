<template>
    <!-- 食堂管理员看到的菜品详情 右下角黄色为推荐菜品，图片中间可以修改或者删除 -->
    <div class="dish">
        <div class="image-container" @mouseover="showButtons = true" @mouseleave="showButtons = false">
            <el-image style="width: 200px; height: 200px" :src="url" :fit="fit"></el-image>
            <div v-show="showButtons" class="image-buttons">
                <el-button type="text" icon="el-icon-edit" @click="editItem"></el-button>
                <el-button type="text" icon="el-icon-delete" @click="deleteItem"></el-button>
            </div>
        </div>
        <!-- <div class="dishname">脆皮鸡饭 -->
        <div class="dishname">{{ mydish.name }}
            <span>
                <div class="collection">
                    <el-button type="primary" :icon="isCollected ? 'el-icon-star-on' : 'el-icon-star-off'"
                        @click="doCollection" style="font-size: 20px;color: yellow;"></el-button>
                </div>
            </span>
        </div>
        <!-- <div class="price"><span>¥</span><span>14.00</span> -->
        <div class="price"><span>¥</span><span>{{ mydish.price }}</span>
        </div>
        <div>
            <el-dialog title="修改菜品信息" :visible.sync="dialogVisible">
                <el-form :model="dish">
                    <el-form-item label="菜品名" :label-width="formLabelWidth">
                        <el-input v-model="dish.name" autocomplete="off" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="菜品价格" :label-width="formLabelWidth">
                        <el-input v-model="dish.price" autocomplete="off" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="菜品图片" :label-width="formLabelWidth">
                        <el-upload action="/api/upload" :on-success="handleSuccess" :on-remove="handleRemove"
                            :file-list="fileList" list-type="picture-card" :auto-upload="false">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
export default {
    name:'dish',// eslint-disable-line
    props: {
      mydish: {
        type: Object,
        required: true,
      },
    },
    data() {
        return {
            dialogVisible: false,
            showButtons: false,
            isCollected: false,
            dish: {
                "dishId": '',
                "name": '',
                "price": '',
                "image": ''
            },
            fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        }
    },
    methods: {
        doCollection() {
            this.isCollected = !this.isCollected;
        },
        editItem() {
            // 执行编辑操作
            console.log('执行编辑操作');
            this.dialogVisible = true
        },
        deleteItem() {
            // 执行删除操作
            console.log('执行删除操作');
            this.$confirm('此操作将永久删除该菜品, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            })
        }
    }
}
</script>

<style lang="less" scoped>
.dish {
    width: 200px;
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

.collection {
    float: right;
}

.image-container {
    position: relative;
}

.image-buttons {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s;
}

.image-container:hover .image-buttons {
    opacity: 1;
}

.image-buttons .el-button {
    transform: scale(2.0);
    /* 调整按钮的大小，这里将按钮放大为原来的1.2倍 */
    margin: 10px 0;
}
</style>