<template>

        <div class="container" :class="{active:selected}">
            <div class="channel-info">
                <Hashtag size="20"/>
                <p>{{channelName}}</p>
            </div>

            <div class="channel-actions">
                <InviteIcon class="icon-actions" size="17"/>
                <SettingsIcon class="icon-actions" size="17" />
            </div>
        </div>

</template>


<script>
import Hashtag from 'vue-material-design-icons/Pound';
import InviteIcon from 'vue-material-design-icons/AccountPlus';
import SettingsIcon from 'vue-material-design-icons/CogOutline';

export default{
    components:{
        Hashtag,
        InviteIcon,
        SettingsIcon
    },
    props:{
        channelName:String,
        selected:Boolean
    }
}
</script>

<style scoped>

    .container{
        padding: 5px 2px;
        cursor: pointer;
        align-items: center;
        display: flex;
        justify-content: space-between;
     
    }
   
    .channel-info{
        color: var(--senary);
        display: flex;
        align-items: center;
    }
    .channel-info p {
        margin-left: 4px;
    }
    .hashIcon{
        color: var(--simbol);
    }
    .channel-actions{
        display: none;
    }
    .icon-actions{
    color: var(--white);
    margin-left: 4px;
    transition: 0.3 ease-in-out;
    }
    .icon-actions:hover{
        color: var(--rocketseat);
    }
    .container:hover,.container.active{
        background-color: var(--quinary);
    }
    .container:hover,.container.active > div{
        color:var(--white)
    }
    .container:hover .channel-actions{
        display: flex;
    }
    .container.active > .channel-actions{
        display: flex;
    }

</style>