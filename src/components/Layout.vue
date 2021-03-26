<template>
  <div id="grid">
    <ServerList />
    <ServerName />
    <ChannelList />
    <UserInfo />
    <ChannelInfo />
    <ChannelData />
    <UserList />
  </div><!--grid-->
</template>

<script>
import ServerList from "./ServerList"
import ServerName from "./ServerName";
import ChannelList from "./ChannelList";
import UserInfo from "./UserInfo";
import ChannelInfo from "./ChannelInfo";
import ChannelData from "./ChannelData"
import UserList from "./UserList"
export default{
  name:"Layout",
  components:{
    ServerList,
    ServerName,
    ChannelList,
    UserInfo,
    ChannelInfo,
    ChannelData,
    UserList
  }
}
 
</script>

<style scoped>

  #grid{
    display: grid;
    height: 100vh;
    grid-template-columns: 71px 240px auto 240px;
    grid-template-rows: 40px auto 52px;
    grid-template-areas:
    "Slist Sname Cinfo Cinfo"
    "Slist Clist Cdata Ulist"
    "Slist Uinfo Cdata Ulist";
   }
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
