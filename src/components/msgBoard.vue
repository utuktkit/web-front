<template>
    <div class="chatroom">
        <div class="chattitle">
            <h2>用户</h2>
        </div>
        <div class="chatmain" style="border: 2px solid #dcc5c5;height: 300px;">
        </div>
        <div class="toolbar" style="height: 40px;background-color: rgb(154, 145, 145);">
            <i class="el-icon-picture-outline" style="font-size: 30px;"></i>
            <i class="el-icon-folder-opened" style="font-size: 30px;"></i>
            <i class="el-icon-scissors" style="font-size: 30px;"></i>
            <i class="el-icon-search" style="float: right;font-size: 30px;"></i>
        </div>
        <div class="postmsg" style="border: 2px solid #dcc5c5;height: 150px;">
            <textarea class="contentarea"></textarea>
            <el-button type="info" style="float: right;">发送</el-button>
        </div>
    </div>
</template>

<script>

</script>

<style>
.contentarea{
    overflow:auto;
    background-attachment:fixed;
    background-color: antiquewhite;
    background-repeat:no-repeat;
    border-style:solid;
    border-color:antiquewhite;
     width: 99%; 
     height: 100px;
     font-size: 20px;
}
</style>