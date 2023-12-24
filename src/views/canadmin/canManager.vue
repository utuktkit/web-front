<template>
    <!-- 食堂管理员点进自己的食堂之后的界面，可以加菜，修改删除，查找 -->
    <el-container style="height: 1000px;">
        <el-header style="height: 100px;">
            <el-image style="width: 100%; height: 100px" :src="url" :fit="fit"></el-image>
            <div class="canteenname">一食堂</div>
        </el-header>
        <el-main>
            <div class="container">
                <div class="topbar">
                    <span class="el-icon-s-promotion"></span><span>已有菜品</span>
                    <span class="right-align">
                        <el-button type="success" @click="dialogFormVisible = true">发布新菜品</el-button>
                        <el-dialog title="发布新菜品" :visible.sync="dialogFormVisible">
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
                                <el-button @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="postNotice">确 定</el-button>
                            </div>
                        </el-dialog>
                    </span>
                </div>
                <div class="search">
                    <span><el-input v-model="input" placeholder="请输入关键词" style="width: 200px;"></el-input></span>
                    <span><el-button>查询</el-button></span>
                    <span><el-button @click="doClear">清空</el-button></span>
                </div>
            </div>

            <dish></dish>
        </el-main>
    </el-container>
</template>

<script>
import dish from '@/components/dish.vue'
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
        dish
    },
    methods: {
        doClear(){
            this.input=''
        },
        handleSuccess(response, file, fileList) {
            // 处理上传成功的回调
            // 在这里可以将返回的图片地址保存到fileList中
            this.fileList = fileList;
        },
        handleRemove(file, fileList) {
            // 处理删除图片的回调
            // 在这里可以将fileList更新为删除后的列表
            this.fileList = fileList;
        },
    }
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