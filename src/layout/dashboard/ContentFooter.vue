<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6 d-flex justify-content-center">
          <a :href="getAcaoUrl()">
            <button class="btn btn-primary mr-4" style="font-size: 20px; padding: 10px;">📱</button>
          </a>
          <a :href="getDashboardUrl()">
            <button class="btn btn-primary mr-4" style="font-size: 20px; padding: 10px;">📊</button>
          </a>
          <a :href="getMapsUrl()">
            <button class="btn btn-primary mr-4" style="font-size: 20px; padding: 10px;">🏠</button>
          </a>
          <a :href="getProfileUrl()">
            <button class="btn btn-primary mr-4" style="font-size: 20px; padding: 10px;">👤</button>
          </a>
          <a :href="getAjudasUrl()">
            <button class="btn btn-primary mr-4" style="font-size: 20px; padding: 10px;">📋</button>
          </a>
          <a :href="getLoginUrl()">
            <button class="btn btn-primary" style="font-size: 20px; padding: 10px;">🔐</button>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  methods: {
    getDashboardUrl() {
      return this.$router.resolve({ name: 'Indicadores' }).href;
    },
    getMapsUrl() {
      return this.$router.resolve({ name: 'Gerir Iniciativa no Terreno' }).href;
    },
    getAcaoUrl() {
      return this.$router.resolve({ name: 'Documentar Ação' }).href;
    },
    getAjudasUrl() {
      return this.$router.resolve({ name: 'Ajudas Humanitárias' }).href;
    },
    getLoginUrl() {
      return this.$router.resolve({ name: 'Login' }).href;
    },
    getAcaoUrl() {
      return this.$router.resolve({ name: 'Ação' }).href;
    },
    getProfileUrl() {
      return this.$router.resolve({ name: 'Perfil' }).href;
    }
  },
};
</script>

<style>
footer.footer {
  background-color: #1e1e2f; /* Add the desired color here */
  position: fixed; /* Position the footer fixed */
  bottom: 0; /* Place it at the bottom of the viewport */
  width: 100%; /* Make it full width */
  z-index: 999; /* Set z-index to ensure it stays on top of other content */
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
