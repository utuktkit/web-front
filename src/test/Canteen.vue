<script setup>
import { requestAddCanteen, requestUpdateCanteen, requestGetCanteen } from '@/api/canteen.js';
import { ref } from 'vue';

const response = ref('');

// addCanteen

const name = ref('五食堂');
const address = ref('北校');
const phone = ref('18716890908');

const addCanteen = async function () {
    const params = { name: name.value, address: address.value, phone: phone.value };
    let data = await requestAddCanteen(params);
    response.value = data;
}

// updateCanteen

const canteenId = ref(2);
const newName = ref('五食堂');
const newAddress = ref('北校');
const newPhone = ref('18716890907');

const updateCanteen = async function () {
    const params = { canteenId: canteenId.value, name: newName.value, address: newAddress.value, phone: newPhone.value };
    let data = await requestUpdateCanteen(params);
    response.value = data;
}

// getCanteen

const getCanteenId = ref(2);

const getCanteen = async function () {
    let data = await requestGetCanteen(getCanteenId.value);
    response.value = data;
}

// lisCanteen

const searchName = ref();


const lisCanteen = async function () {
    let data = await requestListCanteen(searchName.value);
    response.value = data;
}
//deleteCanteen
const delcanteenId = ref(3);

const deleteCanteen = async function () {
    let data = await requestDeleteCanteen(delcanteenId.value);
    response.value = data;
}


</script>

<template>
    <button @click="addCanteen">新增食堂</button>
    <button @click="updateCanteen">更新食堂</button>
    <button @click="getCanteen">获取食堂信息</button>
    <br>
    <h1>{{ response.message }}</h1>
    {{ response.data }}
    <br>
    <div v-if="response.data != null">
        <br>
        canteenId: {{ response.data.canteenId }}
        <br>
        name: {{ response.data.name }}
        <br>
        address: {{ response.data.address }}
        <br>
        phone: {{ response.data.phone }}
        <br>
        avatar: {{ response.data.avatar }}
        <br>
        createTime: {{ response.data.createTime }}
    </div>
</template>

<style scoped></style>