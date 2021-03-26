<template>

    <div class="container">
        <ServerButton :Home="true" />
        <div class="separator"></div>
        <ServerButton :mentions="3" />
        <ServerButton hasNotification/>
        <ServerButton :mentions="23"/>
        <ServerButton v-for="server in 14" :key="server"/>
        <ServerButton :mentions="4"/>
        <ServerButton hasNotification/>
        <ServerButton hasNotification/>
        <ServerButton hasNotification/>
    </div><!--container-->
        
</template>

<script>
import ServerButton from './ServerButton';

export default{
    components:{
        ServerButton
    }
}
</script>


<style scoped>
    .container{
        grid-area: Slist;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color:var(--tertiary);
        padding: 10px 0;
        max-height: 100vh;
        overflow-y: scroll;
    }
    .container::-webkit-scrollbar{
        display: none;
    }
    .separator{
        width: 30px;
        border-bottom: solid 2px var(--quaternay);
        margin-bottom: 8px;
    }
</style>
