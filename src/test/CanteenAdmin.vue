<script setup>
import { requestAddCanteenAdmin, requestDeleteCanteenAdmin, requestListByCanteenId } from '@/api/canteenAdmin.js'
import { ref } from 'vue';
import qs from 'qs'

const response = ref('');

const click = ref(0);

// addCanteenAdmin

const addCanteenId = ref(2);
const addUserId = ref(6);


const addCanteenAdmin = async function () {
    let params = qs.stringify({ canteenId: addCanteenId.value, userId: addUserId.value });
    let data = await requestAddCanteenAdmin(params);
    response.value = data;
    // for display
    click.value = 0;
}

// deleteCanteenAdmin

const deleteCanteenId = ref(2);
const deleteUserId = ref(6);

const deleteCanteenAdmin = async function () {
    const params = { canteenId: deleteCanteenId.value, userId: deleteUserId.value };
    let data = await requestDeleteCanteenAdmin(params);
    response.value = data;
    // for display
    click.value = 0;
}

// listByCanteenId

const listCanteenId = ref(2);

const listByCanteenId = async function () {
    let data = await requestListByCanteenId(listCanteenId.value);
    response.value = data;
    // for display
    click.value = 2;
}

</script>

<template>
    <button @click="addCanteenAdmin">新增管理员</button>
    <button @click="deleteCanteenAdmin">删除管理员</button>
    <button @click="listByCanteenId">列出管理员</button>
    <br>
    <h1>{{ response.message }}</h1>
    {{ response.data }}
    <br>
    <div v-if="click === 2" v-for="canteenAdmin in response.data">
        <br>
        userId: {{ canteenAdmin.userId }}
        <br>
        username: {{ canteenAdmin.username }}
        <br>
        nickname: {{ canteenAdmin.nickname }}
        <br>
        email: {{ canteenAdmin.email }}
        <br>
        phone: {{ canteenAdmin.phone }}
        <br>
        avatar: {{ canteenAdmin.avatar }}
        <br>
        type: {{ canteenAdmin.type }}
        <br>
        level: {{ canteenAdmin.level }}
        <br>
        exp: {{ canteenAdmin.exp }}
        <br>
        createTime: {{ canteenAdmin.createTime }}
    </div>
</template>

<style scoped></style>