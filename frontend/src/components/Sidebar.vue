<template>
  <div class="sidebar container"
       >
    <!--
            Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black | darkblue"
            Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"
        -->
    <!-- -->
    <div class="sidebar-wrapper" id="style-3">
      <div class="header d-flex justify-content-between">
        Utility Tracker
        <fa class="icon" icon="arrow-left"/>
      </div>
      
      <ul class="nav">
        <li>
        <div class="row">
          <div class="col-4 text-center"><fa icon="table"/></div>
          <div class="col-8">Dashboard</div>
          <div class="tip">Dashboard</div>
        </div>
        </li>
        <li>
        <div class="row">
          <div class="col-4 text-center"><fa icon="bell"/></div>
          <div class="col-8">Notification</div>
          <div class="tip">Notification</div>
        </div>
        </li>
        <li>
        <div class="row">
          <div class="col-4 text-center"><fa icon="user"/></div>
          <div class="col-8">Profile</div>
          <div class="tip">Profile</div>
        </div>
        </li>
        <li>
        <div class="row">
          <div class="col-4 text-center"><fa icon="file-invoice"/></div>
          <div class="col-8">Invoice</div>
          <div class="tip">Invoice</div>
        </div>
        </li>
        
      </ul>
    </div>
  </div>
</template>
<script>
  

  export default {
    name: "Sidebar"
  };
</script>
<style scoped>
 .sidebar{
     height: calc(100vh - 90px);
    width: 300px;
    position: fixed;
    top: 0;
    left: 0;
    /* z-index: 1; */
    display: block;
    box-shadow: 0px 0px 45px 0px rgb(0 0 0 / 60%);
    margin-top: 80px;
    margin-left: 20px;
    border-radius: 5px;
    transition: 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
    background: linear-gradient(0deg, #389466 0%, #42b883 100%);



 }
 

 .sidebar .sidebar-wrapper{
     width: 100%;
    min-height: 100%;
    max-height: calc(100vh - 705px);
    /* z-index: 4; */
    position: relative;
    overflow: auto;
 }

 .sidebar .header{
    position: relative;
    padding: 0.5rem 1.5rem;
    /* z-index: 4; */
    font-size: 25px;
    /* display: flex;
    justify-content: space-between; */
 }

 .sidebar .nav{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    position: relative;
 }

 

 .nav{
     flex-wrap: wrap;
    list-style: none;
 }

 .nav li{
   margin-bottom: 1cm;
   
 }

 .tip{
   position: absolute;
   right: 0;
 }
</style>
