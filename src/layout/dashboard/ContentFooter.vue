<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6 d-flex flex-wrap">
          <button class="btn btn-primary mr-2"></button>
          <button class="btn btn-primary mr-2"></button>
          <button class="btn btn-primary mr-2"></button>
          <button class="btn btn-primary mr-2"></button>
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
};
</script>
<style></style>
