<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6 d-flex justify-content-center">
          <a :href="getAcaoUrl()">
            <button class="btn btn-primary mr-4" style="font-size: 20px; padding: 20px;">📱</button>
          </a>
          <a :href="getDashboardUrl()">
            <button class="btn btn-primary mr-4" style="font-size: 20px; padding: 20px;">📊</button>
          </a>
          <a :href="getMapsUrl()">
            <button class="btn btn-primary mr-4" style="font-size: 20px; padding: 20px;">🏠</button>
          </a>
          <a :href="getProfileUrl()">
            <button class="btn btn-primary" style="font-size: 20px; padding: 20px;">👤</button>
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
    getProfileUrl() {
      return this.$router.resolve({ name: 'Perfil' }).href;
    }
  },
};
</script>
<style>
footer.footer {
  background-color: #1e1e2f; /* Add the desired color here */
}
</style>
