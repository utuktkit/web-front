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
                                <el-form-item label="菜品描述" :label-width="formLabelWidth" placeholder="请输入">
                                    <el-input
                                        v-model="dish.description"
                                        type="textarea"
                                        :rows="3"
                                        autocomplete="off"
                                        placeholder="请输入"
                                    ></el-input>
                                    </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="addDish()">确 定</el-button>
                            </div>
                        </el-dialog>
                    </span>
                </div>
                <form @submit.prevent="search">
                    <div class="search">
                        <!-- <button @click="listDish">搜索菜品</button> -->
                        <span><el-input v-model="input" placeholder="请输入菜名" style="width: 200px;"></el-input></span>
                        <span><el-button type="primary" native-type="submit" @click="search">查询</el-button></span>
                        <span><el-button @click="all">显示全部</el-button></span>
                    </div>
                </form>
            </div>
            <dish v-for="mydish in dishList" :key="mydish.dishId" :mydish = "mydish" style="display: inline-block;"></dish>
            <!-- <dish></dish> -->
        </el-main>
    </el-container>
</template>

<script>
import dish from '@/components/dish.vue'
import {requestAddDish} from '@/api/dish'
import { requestListDish  } from '@/api/dish.js';
import { ref } from 'vue';


export default {
    data() {
        return {
            fileList: [],
            dialogFormVisible: false,
            getCanteenId:'',
            dish: {
                dishId: '',
                canteenId: '2',
                name: '',
                style: '',
                price:'',
                description: '',
            },
            mydish: {
                dishId: '',
                canteenId: '2',
                name: '',
                style: '',
                price:'',
                description: '',
            },
            dishList:[],
            completeDishList:[],
            input: '',
            formLabelWidth:'120px',
            fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        }
    },
    components: {
        dish
    },
    mounted(){
        this.listDish();
    },
    methods: {
        async addDish() {
            const params = {
                canteenId: this.dish.canteenId,
                name: this.dish.name,
                style: this.dish.style,
                price: this.dish.price,
                description: this.dish.description
            };
            let data = await requestAddDish(params);
            // 处理响应数据
            this.response = data;
            console.log(this.response)
            this.dialogFormVisible = false
        },
        search(){
        const searchResult = [];
        this.dishList = this.completeDishList,
        console.log(this.teacherList);
      
        for (let i = 0; i < this.dishList.length; i++) {
          const item = this.dishList[i];
          if (item.name == this.input) {
            searchResult.push(item);
          }
        }
        this.dishList = searchResult;
        console.log(this.teacherList);
        },
        postDish(){
            requestAddDish()
        },
        async listDish() {
            const searchName = ref();
            const searchCanteenId = ref();
            const isPriceAsc = ref();
            const isRatingAsc = ref();
        
            let data = await requestListDish(searchName.value, searchCanteenId.value, isPriceAsc.value, isRatingAsc.value);
            this.dishList = data.data;
            console.log(this.dishList)
        }
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