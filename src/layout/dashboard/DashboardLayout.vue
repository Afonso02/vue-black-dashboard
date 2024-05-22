<template>
  <div class="wrapper">
    
    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content @click.native="toggleSidebar"> </dashboard-content>
      <!-- Conditionally render footer -->
      <content-footer v-if="showFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";

export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
  },
  computed: {
    showFooter() {
      // Check if the current route is not Typography
      return this.$route.name !== 'Login' && this.$route.name !== 'Ajudas Humanitárias' && this.$route.name !== 'Registar';
    }
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>

<style lang="scss">
/* Add your styles here */
</style>
