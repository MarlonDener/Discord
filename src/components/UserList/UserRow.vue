<template>
    <div class="userRow">
        <div class="avatar" :class="{'bot-avatar':isBot}"></div>
        <strong>{{nickname}}</strong>
        <div class="bot" v-if="isBot">BOT</div>
    </div><!--userRow-->
</template>

<script scopped>
    export default{
        props:{
            nickname: String,
            isBot: Boolean
        }
    }
</script>

<style scoped>
    .userRow{
        display: flex;
        margin-top: 5px;
        padding: 5px;
        align-items: center;
        cursor:pointer;
        border-radius: 5px;
        background-color: transparent;
        transition: 0.4s;
    }
    .userRow:hover{
        background:rgba(0, 0, 0, 0.2);
    }
    strong{
        margin-left: 13px;
        font-weight: 500;
        color:var(--white);
        opacity: 0.8;
        white-space: normal;
        font-size: 17px;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .avatar{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        flex-shrink: 0;
        background-color: var(--primary);
    }
    .bot{
        margin-left: 8px;
        background: var(--discord);
        color:var(--white);
        padding: 2px 6px;
        border-radius: 4px;
        font-weight: bold;
        font-size:15px;
    }
    .bot-avatar{
        background-color: var(--mention-detail);
    }
</style>