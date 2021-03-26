<template>
    <div class="container2">
       <div class="category">
           <div>Canais de Texto</div>
           <div class="category-icon">
               <AddCategoryIcon size="18px"/>
           </div>
       </div>

     <ChannelButton selected channelName="Chat-Livre"/>
     <ChannelButton channelName="Live de Java"/>
     <ChannelButton channelName="Aulas"/>
     <ChannelButton channelName="cs-go"/>
    <ChannelButton channelName="Jogos"/>

    </div>
</template>


<script>
import ChannelButton from './ChannelButton';
import AddCategoryIcon from "vue-material-design-icons/Plus"
export default{
    components:{
        ChannelButton,
        AddCategoryIcon
    }
}
</script>

<style scoped>

    .container2{
        grid-area: Clist;
        display: flex;
        flex-direction: column;
        padding: 24px 10px 0px 16px;
        background-color: var(--secondary);
    }

    .category{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 6px;
        color:var(--white);
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        color: var( --symbol);
    }
    .category-icon{
        color:var(--symbol);
        cursor: pointer;
    }
</style>
