<template>
  <section class="frame-section">
    <div class="login-container">
      <h1 class="login4">Login</h1>
    </div>
    <div class="frame-parent1">
      <div class="frame-wrapper1">
        <div class="frame-parent2">
          <div class="vector-wrapper">
            <img
              class="vector-icon1"
              loading="lazy"
              alt=""
              src="/vector1.svg"
            />
          </div>
          <h2 class="email1">Email</h2>
        </div>
      </div>
      <div class="frame-child5" />
    </div>
    <div class="frame-parent3">
      <div class="frame-wrapper2">
        <div class="frame-parent4">
          <div class="vector-container">
            <img
              class="vector-icon2"
              loading="lazy"
              alt=""
              src="/vector-11.svg"
            />
            <h2 class="password1">Password</h2>
          </div>
          <div class="eleye-close-wrapper">
            <img
              class="eleye-close-icon1"
              loading="lazy"
              alt=""
              src="/eleyeclose1.svg"
            />
          </div>
        </div>
      </div>
      <div class="frame-child6" />
      <div class="frame-parent5">
        <div class="rectangle-parent">
          <div class="frame-child7" />
          <div class="remember-me1">Remember me</div>
        </div>
        <div class="forgot-password1">Forgot password?</div>
      </div>
    </div>
    <button class="rectangle-group">
      <div class="frame-child8" />
      <b class="login5">LOGIN</b>
    </button>
  </section>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FrameComponent",
  });
</script>
<style scoped>
  .login4 {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 900;
    font-family: inherit;
    display: inline-block;
    min-width: 90px;
    z-index: 2;
  }
  .login-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-mini);
    font-size: var(--font-size-13xl);
  }
  .vector-icon1 {
    width: 12px;
    height: 10px;
    position: relative;
  }
  .vector-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) 0px 0px;
  }
  .email1 {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    min-width: 38px;
  }
  .frame-parent2 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xs);
    z-index: 2;
  }
  .frame-wrapper1 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-sm);
  }
  .frame-child5 {
    align-self: stretch;
    height: 1px;
    position: relative;
    border-top: 1px solid var(--color-darkslategray-100);
    box-sizing: border-box;
    z-index: 1;
  }
  .frame-parent1 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-sm);
    gap: var(--gap-5xs);
  }
  .vector-icon2 {
    height: 14px;
    width: 11px;
    position: relative;
  }
  .password1 {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    min-width: 70px;
  }
  .vector-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-2xs);
  }
  .eleye-close-icon1 {
    width: 12px;
    height: 10px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }
  .eleye-close-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) 0px 0px;
  }
  .frame-parent4 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--gap-xl);
  }
  .frame-wrapper2 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-8xs) 0px var(--padding-sm);
  }
  .frame-child6 {
    align-self: stretch;
    height: 1px;
    position: relative;
    border-top: 1px solid var(--color-darkslategray-100);
    box-sizing: border-box;
  }
  .frame-child7 {
    height: 11px;
    width: 11px;
    position: relative;
    border-radius: var(--br-12xs);
    background-color: var(--color-darkslategray-100);
  }
  .remember-me1 {
    position: relative;
    display: inline-block;
    min-width: 55px;
  }
  .rectangle-parent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
  }
  .forgot-password1 {
    position: relative;
    display: inline-block;
    min-width: 68px;
  }
  .frame-parent5 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--gap-xl);
    font-size: var(--font-size-5xs);
  }
  .frame-parent3 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-4xs-5);
  }
  .frame-child8 {
    height: 32px;
    width: 240px;
    position: relative;
    border-radius: var(--br-7xs);
    background-color: var(--color-darkslategray-100);
    display: none;
  }
  .login5 {
    position: relative;
    font-size: var(--font-size-base);
    display: inline-block;
    font-family: var(--font-inter);
    color: var(--color-white);
    text-align: left;
    min-width: 50px;
    z-index: 2;
  }
  .rectangle-group {
    cursor: pointer;
    border: none;
    padding: var(--padding-6xs) var(--padding-xl) var(--padding-7xs);
    background-color: var(--color-darkslategray-100);
    align-self: stretch;
    border-radius: var(--br-7xs);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    z-index: 1;
  }
  .frame-section {
    width: 240px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-8xl);
    text-align: left;
    font-size: var(--font-size-mini);
    color: var(--color-black);
    font-family: var(--font-inter);
  }
</style>
