<script setup>
import { requestAddDish, requestUpdateDish, requestGetDish, requestListDish } from '@/api/dish.js'
import { ref } from 'vue';

const response = ref('');

// for display
const click = ref(0);

// addDish

const canteenId = ref(2);
const name = ref('猪脚饭');
const style = ref('');
const price = ref(18.00);
const description = ref("五食堂二楼猪脚饭");

const addDish = async function () {
    const params = { canteenId: canteenId.value, name: name.value, style: style.value, price: price.value, description: description.value };
    let data = await requestAddDish(params);
    response.value = data;
    // for display
    click.value = 0;
}

// updateDish

const dishId = ref(3);
const newName = ref('脆皮鸡饭');
const newStyle = ref('');
const newPrice = ref(15.00);
const newDescription = ref("五食堂二楼柠檬队长脆皮鸡饭");

const updateDish = async function () {
    const params = { dishId: dishId.value, name: newName.value, style: newStyle.value, price: newPrice.value, description: newDescription.value };
    let data = await requestUpdateDish(params);
    response.value = data;
    // for display
    click.value = 0;
}

// getDish

const getDishId = ref(3);

const getDish = async function () {
    let data = await requestGetDish(getDishId.value);
    response.value = data;
    // for display
    click.value = 1;
}

// listDish

const searchName = ref('牛');
const searchCanteenId = ref(1);
const isPriceAsc = ref(true);
const isRatingAsc = ref(false);

const listDish = async function () {
    let data = await requestListDish(searchName.value, searchCanteenId.value, isPriceAsc.value, isRatingAsc.value);
    response.value = data;
    // for display
    click.value = 2;
}

</script>

<template>
    <button @click="addDish">发布菜品</button>
    <button @click="updateDish">更新菜品</button>
    <button @click="getDish">获取菜品信息</button>
    <button @click="listDish">搜索菜品</button>
    <br>
    <h1>{{ response.message }}</h1>
    {{ response.data }}
    <br>
    <div v-if="click === 1">
        <br>
        dishId: {{ response.data.dishId }}
        <br>
        canteenId: {{ response.data.canteenId }}
        <br>
        name: {{ response.data.name }}
        <br>
        style: {{ response.data.style }}
        <br>
        price: {{ response.data.price }}
        <br>
        specialPrice: {{ response.data.specialPrice }}
        <br>
        description: {{ response.data.description }}
        <br>
        image: {{ response.data.image }}
        <br>
        rate: {{ response.data.rate }}
        <br>
        ratingPeople: {{ response.data.ratingPeople }}
        <br>
        isSpecialPrice: {{ response.data.isSpecialPrice }}
        <br>
        createTime: {{ response.data.createTime }}
    </div>
    <div v-if="click === 2" v-for="dish in response.data">
        <br>
        dishId: {{ dish.dishId }}
        <br>
        canteenId: {{ dish.canteenId }}
        <br>
        name: {{ dish.name }}
        <br>
        style: {{ dish.style }}
        <br>
        price: {{ dish.price }}
        <br>
        specialPrice: {{ dish.specialPrice }}
        <br>
        description: {{ dish.description }}
        <br>
        image: {{ dish.image }}
        <br>
        rate: {{ dish.rate }}
        <br>
        ratingPeople: {{ dish.ratingPeople }}
        <br>
        isSpecialPrice: {{ dish.isSpecialPrice }}
        <br>
        createTime: {{ dish.createTime }}
    </div>
</template>

<style scoped></style>