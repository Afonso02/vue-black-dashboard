<template>
  <div class="indicadores">
    <div class="nav-toggle-button-wrapper">
      <div class="nav-toggle-button">
        <div class="nav-button-navbar-toggle-b" />
        <div class="div-card">
          <div class="div-card-header">
            <div class="simple-table-heading">
              <div class="nav-button-navbar-toggle-b1" />
              <div class="nav-button-navbar-toggle-b2" />
            </div>
          </div>
          <div class="nav-link">Indicadores</div>
        </div>
      </div>
    </div>
    <Divcard />
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import Divcard from "../components/Divcard.vue";

  export default defineComponent({
    name: "Indicadores",
    components: { Divcard },
  });
</script>
<style scoped>
  .nav-button-navbar-toggle-b {
    position: absolute;
    top: 1.1px;
    left: 0px;
    border-radius: var(--br-12xs);
    background-color: var(--color-white);
    width: 22px;
    height: 1px;
  }
  .nav-button-navbar-toggle-b1 {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-12xs);
    background-color: var(--color-white);
    width: 17px;
    height: 1px;
  }
  .nav-button-navbar-toggle-b2 {
    position: absolute;
    top: 8px;
    left: 0px;
    border-radius: var(--br-12xs);
    background-color: var(--color-white);
    width: 22px;
    height: 1px;
  }
  .simple-table-heading {
    width: 22px;
    height: 9px;
    position: relative;
  }
  .div-card-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px 4.9px;
  }
  .nav-link {
    flex: 1;
    position: relative;
    line-height: 24px;
    text-transform: uppercase;
    font-weight: 300;
  }
  .div-card {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 32.9px;
    height: 100%;
  }
  .nav-toggle-button {
    height: 23px;
    flex: 1;
    position: relative;
  }
  .nav-toggle-button-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 33px 0px 29.1px;
  }
  .indicadores {
    width: 100%;
    position: relative;
    background: linear-gradient(180deg);
    border-top: 1.6px solid #e14eca;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 18px 13.7px 821px;
    gap: 46px;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    font-size: 16px;
    color: var(--color-white);
    font-family: var(--font-poppins);
  }
</style>
