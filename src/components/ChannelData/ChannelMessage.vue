<template>
    <div class="Channel-message" :class="{'hasMention':hasMention}">
        <div class="avatar" :class="{'botAvatar':isBot}">   </div><!--avatar-->
            <div class="message">
                <div class="user">
                    <strong>{{author}}</strong>
                    <span class="bot" v-if="isBot">Bot</span><!--bot-->
                    <span class="date">{{date}}</span>
                </div><!--user-->
                <div class="bodyMessage">
                    <slot />
                </div>
            </div><!--message-->
    </div><!--container-->
</template>

<script>
 export default{
     props:{
         author:String,
         date: String,
         hasMention: Boolean,
         isBot: Boolean
     }
 }
</script>

<style scoped>
    .Channel-message{
        display: flex;
        align-items: center;
        padding: 8px 16px;
        margin-right: 4px;
        background-color: transparent;
        margin-top: 13px;
    }

    .avatar{
        width: 40px;
        height: 40px;
        background-color: var(--secondary);
        border-radius: 50%;
        flex-shrink: 0;
    }
    .message{
        margin-left: 17px;
        height: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .message strong{
        color:var(--white);
        font-size: 16px;
    }
    .date{
        margin-left: 6px;
        color:var(--grey);
        font-size: 13px;
    }
    .bodyMessage{
        color: var(--white);
        text-align: left;
        font-size: 16px;
    }
    .Channel-message:hover{
        background-color: var(--secondary);
    }
    .Channel-message.hasMention{
        background-color: var(--mention-message);
        border-left: solid 2px var(--mention-detail);
    }
    .botAvatar{
        background-color: var(--mention-detail);
    }
    .bot{
        margin: 0 9px;
        font-size: 14px;
        color: var(--white);
        padding: 2px 8px;
        border-radius: 4px;
        text-transform: uppercase;
        font-weight: 600;
        background-color: var(--link);
    }

  
</style>