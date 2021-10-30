<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/home/dashboard" :name="$t('sidebar.dashboard')" icon="tim-icons icon-chart-pie-36"/>
        
        <!-- <sidebar-link to="/notifications" :name="$t('sidebar.notifications')" icon="tim-icons icon-bell-55"/> -->
        <!-- <sidebar-link to="/profile" :name="$t('sidebar.userProfile')" icon="tim-icons icon-single-02"/> -->
        <sidebar-link to="/home/bills" name="bills" icon="tim-icons icon-coins"/>
        <sidebar-link to="/home/community" name="community" icon="tim-icons icon-bank"/>
        <!-- <sidebar-link to="/payment" name="payment" icon="tim-icons icon-coins"/> -->
        
        <sidebar-link to="/home/live-tracking" name="Live Tracking" icon="tim-icons icon-sound-wave"/>
        <!-- <sidebar-link to="/typography" :name="$t('sidebar.typography')" icon="tim-icons icon-align-center"/>
        <sidebar-link to="/dashboard?enableRTL=true" :name="$t('sidebar.rtlSupport')" icon="tim-icons icon-world"/> -->
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar :gender="gender"></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>


    </div>

    

    
  </div>

  
</template>




<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
import API from '../../api/API'
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  data(){
    return {
      gender: null
    }
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  },
  async mounted(){
    const token = window.localStorage.getItem("token");
    try {
      
      const res1 = await API.findProfile(token)
      
      const { gender } = res1.data[0]
      
      this.gender = gender
      
    } catch (error) {
      console.log(error)
    }
    
  },
};
</script>
