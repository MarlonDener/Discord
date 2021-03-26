<template>
    <div class="container">
        <div class="title">Servidores Web</div>
        <div class="icon">
            <ExpandIcon size="14px"/>
        </div>
    </div>

</template>

<script>
import ExpandIcon from "vue-material-design-icons/ChevronDown"

export default{
    components:{
        ExpandIcon
    }
}

</script>

<style scoped>
.container{
    grid-area: Sname;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--secondary);
    padding: 0 11px 0 16px;
}
.title{
    color:var(--white);
    font-size: 16px;
    font-weight: 600;
}
.icon{
    color:var(--white);
    cursor: pointer;
}
</style>