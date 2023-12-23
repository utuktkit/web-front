<template>
    <div class="dish">
        <el-image style="width: 200px; height: 200px" :src="url" :fit="fit"></el-image>
        <div class="dishname">脆皮鸡饭
            <span>
                <div class="collection">
                    <el-button type="primary" 
                    :icon="isCollected ? 'el-icon-star-on' : 'el-icon-star-off'" 
                    @click="doCollection"
                    style="font-size: 20px;color: yellow;"></el-button>
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
            isCollected: false,
            fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        }
    },
    methods:{
        doCollection() {
            this.isCollected = !this.isCollected;
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
</style>