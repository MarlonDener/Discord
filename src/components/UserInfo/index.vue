<template>

    <div class="container">
        <div class="profile">
              <div class="avatar">
            
              </div>  

               <div class="userdata">
                   <strong>Marlon Dener</strong>
                   <span>4555</span>
              </div> 

        </div><!--profile-->

        <div class="actions">

            <span><Mic size="20"/></span>
               <span> <HeadPhones size="20"/></span>
                  <span> <Settings size="20"/></span>

        </div><!--actions-->

    </div><!--container-->   
    
</template>

<script>
import Mic from "vue-material-design-icons/Microphone"
import HeadPhones from "vue-material-design-icons/Headphones"
import Settings from "vue-material-design-icons/CogOutline"

export default{
    components:{
    Mic,
    HeadPhones,
    Settings
}
}

</script>

<style scoped>
    .container{
        grid-area: Uinfo;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        background-color: var(--quaternary);
        box-shadow: rgba(0,0,0,0.5) 0 1px;
    }
    .profile{
        display: flex;
        align-items: center;
    }
    .avatar{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: var(--grey);
    }
    .userdata{
        flex-direction: column;
        margin-left: 7px;
        font-size: 13px;
    }
    .userdata strong{
        display: block;
        color:var(--white);
    }
    .userdata span{
        color:var(--grey);
    }
    .actions{
        cursor: pointer;
        color:var(--grey);
    }
    .actions span:hover{
        color:var(--white);
        transition: 0.5s;
    }
</style>