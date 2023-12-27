<script setup>
import { requestAddComment, requestListComment } from '@/api/comment.js'
import { ref } from 'vue';
import qs from 'qs'

const response = ref('');

const click = ref(0);

// addComment

const addDishId = ref(2);
const addScore = ref(8);
const addContent = ref('还行');

const addComment = async function () {
    const params = { dishId: addDishId.value, score: addScore.value, content: addContent.value };
    let data = await requestAddComment(params);
    response.value = data;
    // for display
    click.value = 0;
}

// listComment

const listDishId = ref(2);
const listUserId = ref(1);

const listComment = async function () {
    let data = await requestListComment(listDishId.value, listUserId.value);
    response.value = data;
    // for display
    click.value = 2;
}

</script>

<template>
    <button @click="addComment">评论</button>
    <button @click="listComment">列出评论</button>
    <br>
    <h1>{{ response.message }}</h1>
    {{ response.data }}
    <br>
    <div v-if="click === 2" v-for="comment in response.data">
        <br>
        commentId: {{ comment.commentId }}
        <br>
        userId: {{ comment.userId }}
        <br>
        dishId: {{ comment.dishId }}
        <br>
        score: {{ comment.score }}
        <br>
        content: {{ comment.content }}
        <br>
        state: {{ comment.state }}
        <br>
        createTime: {{ comment.createTime }}
    </div>
</template>

<style scoped></style>