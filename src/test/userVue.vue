<script setup>
import { requestRegister, requestLogin, requestUpdatePwd, requestUpdateInfo, requestInfo, requestListUser } from '@/api/user.js';
import { ref } from 'vue';
import qs from 'qs';
import { useTokenStore } from '@/store/token.js'

const tokenStore = useTokenStore();

const response = ref('');

const click = ref(0);

// register/login

const username = ref('admin');
const password = ref('234567');
const type = ref(3);

const register = async function () {
    let params = qs.stringify({ "username": username.value, "password": password.value, 'type': type.value });
    let data = await requestRegister(params);
    response.value = data;
    // for display
    click.value = 0;
}

const login = async function () {
    let params = qs.stringify({ "username": username.value, "password": password.value });
    let data = await requestLogin(params);
    response.value = data;
    tokenStore.setToken(response.value.data);
    // for display
    click.value = 0;
}

// updatePwd

const oldPwd = ref('123456');
const newPwd = ref('234567');

const updatePwd = async function () {
    let params = qs.stringify({ "oldPwd": oldPwd.value, "newPwd": newPwd.value });
    let data = await requestUpdatePwd(params);
    response.value = data;
    // for display
    click.value = 0;
}

// updateInfo

const nickname = ref('admin');
const phone = ref('18716890908');
const email = ref('admin@usst.edu');
const updateInfo = async function () {
    let params = qs.stringify({ nickname: nickname.value, phone: phone.value, email: email.value });
    let data = await requestUpdateInfo(params);
    response.value = data;
    // for display
    click.value = 0;
}

// info

const userId = ref(1);

const info = async function () {
    let data = await requestInfo(userId.value);
    response.value = data;
    // for display
    click.value = 1;
}

// listUser

const listType = ref(1);

const listUser = async function () {
    let data = await requestListUser(listType.value);
    response.value = data;
    // for display
    click.value = 2;
}

</script>

<template>
    <div>
        <div>
        <button @click="login">登录</button>
        <button @click="register">注册</button>
        <button @click="updatePwd">更新密码</button>
        <button @click="updateInfo">更新信息</button>
        <button @click="info">获取用户信息</button>
        <button @click="listUser">获取用户列表</button>
        <br>
        <h1>{{ response.message }}</h1>
        <span>{{ response.data }}</span>
        <br>
        </div>
        <div v-if="click === 1">
        <br>
        userId: {{ response.data.userId }}
        <br>
        username: {{ response.data.username }}
        <br>
        nickname: {{ response.data.nickname }}
        <br>
        email: {{ response.data.email }}
        <br>
        phone: {{ response.data.phone }}
        <br>
        avatar: {{ response.data.avatar }}
        <br>
        level: {{ response.data.level }}
        <br>
        createTime: {{ response.data.createTime }}
    </div>
    <div v-if="click === 2" >
        
        <br>
        userId: {{ user.userId }}
        <br>
        username: {{ user.username }}
        <br>
        nickname: {{ user.nickname }}
        <br>
        email: {{ user.email }}
        <br>
        phone: {{ user.phone }}
        <br>
        avatar: {{ user.avatar }}
        <br>
        level: {{ user.level }}
        <br>
        createTime: {{ user.createTime }}
    </div>
</div>
</template>

<style scoped></style>