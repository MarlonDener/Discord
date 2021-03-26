<template>
    <div class="container">
        <div class="icon">
            <Hashtag size="21"/>
        </div><!--icon-->
        <h1 class="title">Chat Livre</h1>
        <div class="separator"></div>
        <div class="description">Chat aberto para interações</div>
    </div><!--container-->
</template>

<script>
import Hashtag from 'vue-material-design-icons/Pound'
   
   export default{
       components:{
           Hashtag
       }
   }

</script>


<style scoped>

    .container{
        grid-area: Cinfo;
        background-color: var(--primary);
        display: flex;
        align-items: center;
        padding: 0 17px;
        z-index: 2;
        box-shadow:2px 2px 2px 1px rgba(0,0,0,.4);
    }

    .title{
        color: var(--white);
        font-size: 16px;
        margin-left: 9px;
        font-weight: bold;
    }

    .description{
        color: var(--grey);
        font-size: 15px;
    }

    .separator{
        background-color: var(--white);
        height: 24px;
        width: 1px;
        opacity: 1;
        margin:0 12px

    }
    .icon{
        color:var(--grey);
    }

</style>
