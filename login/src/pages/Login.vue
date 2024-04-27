<template>
  <div class="login3">
    <section class="vector-group">
      <img class="rectangle-icon" alt="" src="/rectangle-2.svg" />
      <img class="frame-child2" alt="" src="/rectangle-10.svg" />
      <div class="frame-child3" />
      <div class="frame-child4" />
    </section>
    <div class="login-item" />
    <FrameComponent />
    <img class="vector-icon" loading="lazy" alt="" src="/vector-21.svg" />
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import FrameComponent from "../components/FrameComponent.vue";

  export default defineComponent({
    name: "Login1",
    components: { FrameComponent },
  });
</script>
<style scoped>
  .rectangle-icon {
    position: absolute;
    top: -119.5px;
    left: -145px;
    border-radius: var(--br-5xl);
    width: 437.6px;
    height: 503.3px;
    object-fit: contain;
  }
  .frame-child2 {
    position: absolute;
    top: -95px;
    left: -132px;
    border-radius: var(--br-5xl);
    width: 368.9px;
    height: 434.8px;
    object-fit: contain;
    z-index: 1;
  }
  .frame-child3 {
    position: absolute;
    top: 108.03px;
    left: -65px;
    filter: blur(200px);
    border-radius: var(--br-5xl);
    background-color: var(--color-darkslategray-200);
    width: 208px;
    height: 101px;
    transform: rotate(-31.3deg);
    transform-origin: 0 0;
    z-index: 2;
  }
  .frame-child4 {
    position: absolute;
    top: 11.03px;
    left: -65px;
    filter: blur(200px);
    border-radius: var(--br-5xl);
    background-color: var(--color-darkslategray-100);
    width: 208px;
    height: 101px;
    transform: rotate(-31.3deg);
    transform-origin: 0 0;
    z-index: 3;
  }
  .vector-group {
    width: 292.6px;
    height: 383.8px;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    left: 0px;
  }
  .login-item {
    width: 208px;
    height: 101px;
    position: absolute;
    margin: 0 !important;
    right: -64px;
    bottom: -59.03px;
    filter: blur(200px);
    border-radius: var(--br-5xl);
    background-color: var(--color-darkslategray-100);
    transform: rotate(-31.3deg);
    transform-origin: 0 0;
  }
  .vector-icon {
    width: 26px;
    height: 23px;
    position: absolute;
    margin: 0 !important;
    top: 44px;
    right: 28px;
  }
  .login3 {
    width: 100%;
    height: 640px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    padding: var(--padding-221xl) var(--padding-35xl) var(--padding-126xl);
    box-sizing: border-box;
    line-height: normal;
    letter-spacing: normal;
  }
</style>
