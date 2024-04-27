<template>
  <div class="ajudas-associadas-a-cada-gesto">
    <div class="ajudas-associadas-a-cada-gesto-inner">
      <div class="nav-button-navbar-toggle-b-parent">
        <div class="nav-button-navbar-toggle-b" />
        <div class="div-card-header-parent">
          <div class="div-card-header">
            <div class="heading-simple-table">
              <div class="nav-button-navbar-toggle-b1" />
              <div class="nav-button-navbar-toggle-b2" />
            </div>
          </div>
          <div class="nav-link">Ajudas Humanitárias</div>
        </div>
      </div>
    </div>
    <section class="divcard">
      <div class="divcard-header">
        <div class="tasks-heading">
          <div class="heading-6">Ajudas</div>
        </div>
        <div class="button-settings-menu">
          <div class="after" />
          <img class="icon" loading="lazy" alt="" src="/icon.svg" />
        </div>
      </div>
      <Divcard2 /><Divcard1 /><Divcard />
    </section>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import Divcard2 from "../components/Divcard2.vue";
  import Divcard1 from "../components/Divcard1.vue";
  import Divcard from "../components/Divcard.vue";

  export default defineComponent({
    name: "AjudasAssociadasACadaGesto",
    components: { Divcard2, Divcard1, Divcard },
  });
</script>
<style scoped>
  .nav-button-navbar-toggle-b {
    position: absolute;
    top: 19.1px;
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
    width: 22px;
    height: 1px;
  }
  .nav-button-navbar-toggle-b2 {
    position: absolute;
    top: 8px;
    left: 0px;
    border-radius: var(--br-12xs);
    background-color: var(--color-white);
    width: 17px;
    height: 1px;
  }
  .heading-simple-table {
    width: 22px;
    height: 9px;
    position: relative;
  }
  .div-card-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 3.1px 0px 0px;
  }
  .nav-link {
    flex: 1;
    position: relative;
    line-height: 24px;
    text-transform: uppercase;
    font-weight: 300;
  }
  .div-card-header-parent {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 26.2px;
    height: 100%;
  }
  .nav-button-navbar-toggle-b-parent {
    height: 23px;
    flex: 1;
    position: relative;
  }
  .ajudas-associadas-a-cada-gesto-inner {
    width: 350.8px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 28px 0px 27.8px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .heading-6 {
    align-self: stretch;
    position: relative;
    line-height: 15px;
    text-transform: uppercase;
  }
  .tasks-heading {
    width: 71px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 3.4px 0px 0px;
    box-sizing: border-box;
  }
  .after {
    position: absolute;
    top: 9px;
    left: 30px;
    border-top: 4px solid var(--color-darkgray);
    border-right: 4px solid var(--color-darkgray);
    border-left: 4px solid var(--color-darkgray);
    box-sizing: border-box;
    width: 8px;
    height: 4px;
  }
  .icon {
    position: absolute;
    top: 19px;
    left: 11.5px;
    width: 15px;
    height: 15.2px;
    overflow: hidden;
  }
  .button-settings-menu {
    height: 22px;
    width: 38px;
    position: relative;
    border-radius: 6.86px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .divcard-header {
    margin-right: -15.399999999999975px;
    width: 361.4px;
    border-radius: 3.57px 3.57px 0px 0px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: var(--padding-mini) 21px 5px 14.7px;
    box-sizing: border-box;
    max-width: 105%;
    flex-shrink: 0;
    gap: 20px;
  }
  .divcard {
    align-self: stretch;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.1);
    border-radius: 4.57px;
    background-color: #27293d;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 0px var(--padding-mini) 32px 0px;
    box-sizing: border-box;
    gap: 10px;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-xs);
    color: var(--color-gray-100);
    font-family: var(--font-poppins);
  }
  .ajudas-associadas-a-cada-gesto {
    width: 100%;
    position: relative;
    background: linear-gradient(180deg);
    border-top: 1.6px solid #e14eca;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 16px var(--padding-mini) 42px;
    gap: 33px;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    font-size: 16px;
    color: var(--color-white);
    font-family: var(--font-poppins);
  }
</style>
