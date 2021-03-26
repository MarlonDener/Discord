<template> 

        <div class="channel-data">
  <div class="messages"> 
      
     
 <ChannelMessage author="Robot" date="11/05/2020" isBot>Essa é uma mensagem</ChannelMessage>                  
 <ChannelMessage v-for="messages in 18" :key="messages" author="Marlon Dener" date="11/05/2020">Essa é uma mensagem</ChannelMessage>                  
  <ChannelMessage author="Robot" date="11/05/2020" isBot hasMention><Mention class="edit">Evandro Guedes</Mention>, olha que legal</ChannelMessage>            
            </div><!--messages-->

            <div class="input-wrapper">
                <input type="text" placeholder="Conversar em Chat Livre">
                <div class="icon">
                    <At size="24"/>
                </div>
            </div>

        </div><!--channel-data-->
    
</template>

<script>
import At from "vue-material-design-icons/At";
import ChannelMessage from "./ChannelMessage";
import Vue from 'vue';

export default{
    components:
    {At,
    ChannelMessage
    },
};

Vue.component("Mentions",{
    template: ' <span class="mention"><slot /></span>',
    
});

</script>

<style scoped>
    .channel-data{
        grid-area: Cdata;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: var(--primary);
        flex: 1;
    }
.input-wrapper{
    width: 100%;
    padding: 0 16px;
    height: 68px;
}
input{
    width: 100%;
    height: 44px;
    padding: 0 10px 0 57px;
    border-radius: 5px;
    color: var(--white);
    background-color: var(--chat-input);
    position: relative;
}
.icon{
    color:var(--grey);
    position: relative;
    top: -50%;
    left: 14px;
    transition: 0.2s;
    width: 24px;
}

.messages{
    display: flex;
    flex-direction: column;
    height: calc(100vh - 46px - 68px);
    max-height: calc(100vh - 46px - 68px);
    overflow-y: scroll;
}
.messages::-webkit-scrollbar{
    width: 8px;
}
.messages::-webkit-scrollbar-thumb{
    background-color: var(--rocketseat);
    border-radius: 4px;
}
.messages::-webkit-scrollbar-track{
    background-color: var(--secondary);
}
.ChannelMessage:first-child{
    margin-top:0!important;
}
.edit{
     padding-right: 4px;
     color:var(--link);
     cursor:pointer;
  }

.edit:hover{
    text-decoration: underline;
}

</style>

