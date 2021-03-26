<template>
 <div class="UserList">
     <div class="role">Disponível 1</div>
        <UserRow nickname="Marlon Dener"/>
       
     <div class="role">Offline - 15</div>
      <UserRow nickname="Rebeka Bastos"/>
      <UserRow nickname="Nelson Oliveira"/>
      <UserRow nickname="Claudia Santos"/>
      <UserRow nickname="Marcelo Mattos"/>
      <UserRow nickname="Lucas Santos"/> 
      <UserRow nickname="Nilson Silva"/>
      <UserRow nickname="Livia Limeira"/>
      <UserRow nickname="Marcos Dener"/>
      <UserRow nickname="Ana Paula"/>
      <UserRow nickname="Robot" isBot/>

 </div><!--userList-->
</template>

<script>
import UserRow from "./UserRow";
export default{
    components:{
        UserRow
    }
}

</script>

<style scoped>
 .UserList{
        grid-area: Ulist;
        display: flex;
        flex-direction: column;
        padding: 3px 6px 10px 15px;
        background-color: var(--secondary);
        max-height: calc(100vh - 46px);
        overflow-y: scroll;
 }

.UserList::-webkit-scrollbar{
    width: 8px;
}
.UserList::-webkit-scrollbar-thumb{
    background-color: var(--rocketseat);
    border-radius: 4px;
}
.UserList::-webkit-scrollbar-track{
    background-color: var(--secondary);
}
.role{
    margin-top: 20px;
    color:var(--grey);
    font-weight: 500;
    font-size: 13px;
    text-transform: uppercase;
}

</style>