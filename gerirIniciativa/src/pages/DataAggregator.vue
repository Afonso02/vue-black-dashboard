<template>
  <div class="data-aggregator">
    <main class="divmain-panel">
      <section class="frame-parent">
        <header class="frame-group">
          <div class="matrix-inverse-wrapper">
            <div class="matrix-inverse">
              <div class="nav-button-navbar-toggle-b" />
              <div class="nav-button-navbar-toggle-b1" />
              <div class="nav-button-navbar-toggle-b2" />
            </div>
          </div>
          <div class="nav-link-dashboard-wrapper">
            <div class="nav-link">Gerir iniciativa no terreno</div>
          </div>
          <div class="divfixed-plugin">
            <h1 class="symbol"></h1>
          </div>
        </header>
        <Divcard2 />
      </section>
      <Divcard1 /><Divcard />
    </main>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import Divcard2 from "../components/Divcard2.vue";
  import Divcard1 from "../components/Divcard1.vue";
  import Divcard from "../components/Divcard.vue";

  export default defineComponent({
    name: "DataAggregator",
    components: { Divcard2, Divcard1, Divcard },
  });
</script>
<style scoped>
  .nav-button-navbar-toggle-b {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-12xs);
    background-color: var(--color-white);
    width: 22px;
    height: 1px;
  }
  .nav-button-navbar-toggle-b1 {
    position: absolute;
    top: 8px;
    left: 0px;
    border-radius: var(--br-12xs);
    background-color: var(--color-white);
    width: 17px;
    height: 1px;
  }
  .nav-button-navbar-toggle-b2 {
    position: absolute;
    top: 16px;
    left: 0px;
    border-radius: var(--br-12xs);
    background-color: var(--color-white);
    width: 22px;
    height: 1px;
  }
  .matrix-inverse {
    width: 22px;
    height: 17px;
    position: relative;
  }
  .matrix-inverse-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 11.1px 0px 0px;
  }
  .nav-link {
    align-self: stretch;
    position: relative;
    line-height: 24px;
    text-transform: uppercase;
    font-weight: 300;
    white-space: nowrap;
  }
  .nav-link-dashboard-wrapper {
    width: 247px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) 0px 0px;
    box-sizing: border-box;
    flex-shrink: 0;
  }
  .symbol {
    margin: 0;
    flex: 1;
    position: relative;
    font-size: inherit;
    line-height: 28px;
    font-weight: 400;
    font-family: inherit;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .divfixed-plugin {
    width: 64px;
    border-radius: var(--br-5xs) 0px 0px var(--br-5xs);
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 9.6px var(--padding-lg) 10.4px;
    box-sizing: border-box;
    flex-shrink: 0;
    text-align: center;
    font-size: 28px;
    font-family: var(--font-abel);
  }
  .frame-group {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px 28px;
    gap: 31.1px;
    text-align: left;
    font-size: 16px;
    color: var(--color-white);
    font-family: var(--font-poppins);
  }
  .frame-parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 0px var(--padding-10xs) 0px 0px;
    box-sizing: border-box;
    gap: 15px;
    max-width: 100%;
  }
  .divmain-panel {
    margin-left: -10px;
    width: 440px;
    background: linear-gradient(180deg);
    border-top: 1.6px solid #e14eca;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xs) var(--padding-mini) 40px;
    gap: 46px;
    flex-shrink: 0;
    debug_commit: 1de1738;
    max-width: 107%;
  }
  .data-aggregator {
    width: 100%;
    height: 1313px;
    position: relative;
    background-color: #1e1e2f;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px;
    box-sizing: border-box;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 385px) {
    .data-aggregator {
      height: auto;
    }
  }
</style>
