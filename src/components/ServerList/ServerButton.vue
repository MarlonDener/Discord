<template>


    <div class="serverButton" :class="{ 'serverButton-hasNotification':hasNotification,'serverButton-isHome':Home}">
        <img src="../../assets/discord.svg" v-if="Home">
        <div class="mentions" v-if="mentions">{{mentions}}</div>
    </div><!--serverButton-->

</template>

<script>
    export default{
        props:{
            selected: Boolean,
            Home: Boolean,
            hasNotification: Boolean,
            mentions: Number
        }
    }
</script>


<style scoped>
    .serverButton{
        display: flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        margin-bottom: 8px;
        background-color: var(--primary);
        cursor: pointer;
        position: relative;
        border-radius: 50%;  
    }
    .serverButton img{
        width: 22px;
        height: 22px;
        color: #fff;

    }
    .serverButton:hover,
    .serverButton.active{
       border-radius: 10px;
       background-color:var(--discord);}
    .serverButton-hasNotification::before{
        content:"";
        width: 9px;
        height: 9px;
        background-color: var(--white);
        position: absolute;
        left: -17px;
        top: calc(50% - 4.5px);
        border-radius: 50%;
        display: block;
    }
   .serverButton-isHome{
        background-color: var(--rocketseat);
    }
    .serverButton-isHome:hover, .serverButton-isHome.active{
        border-radius: 16px;
        background-color: var(--rocketseat);
    }
    .mentions {
        background-color: var(--notification);
        width: auto;
        height: 24px;
        padding: 0 4px;
        position: absolute;
        border-radius: 12px;
        bottom: -4px;
        right: -4px;
        text-align: right;
        font-size: 13px;
        font-weight: bold;
        color: var(--white);
        border:solid 4px var(--quaternary)
    }
</style>