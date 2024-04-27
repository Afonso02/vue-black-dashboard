<template>
  <section class="divcard2">
    <div class="divcard-body">
      <div class="divcard-header2">
        <div class="heading-42">Gestão de Doações</div>
      </div>
    </div>
    <div class="divcard3">
      <footer class="divcard-header3">
        <div class="descrio">Descrição</div>
      </footer>
      <div class="cross-product">
        <div class="input-parent">
          <div class="input">
            <div class="text" />
            <div class="banco-alimentar-porto-wrapper">
              <div class="banco-alimentar-">Banco Alimentar - Porto</div>
            </div>
          </div>
          <div class="responsvel">Responsável</div>
          <div class="input1">
            <div class="jos-lus">José Luís</div>
          </div>
          <div class="doaes">Doações</div>
        </div>
      </div>
      <div class="input2">
        <div class="div14">
          <div class="div15">.........</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Divcard",
  });
</script>
<style scoped>
  .heading-42 {
    width: 298px;
    position: relative;
    line-height: 24.65px;
    font-weight: 100;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
  .divcard-header2 {
    flex: 1;
    border-radius: 3.57px 3.57px 0px 0px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-base-4) var(--padding-mini-7) var(--padding-smi-3);
    box-sizing: border-box;
    max-width: 100%;
  }
  .divcard-body {
    position: absolute;
    width: 100%;
    top: 0px;
    right: -0.4px;
    left: 0px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-509xl-3);
    box-sizing: border-box;
    height: 100%;
    z-index: 1;
  }
  .descrio {
    position: relative;
    line-height: 18px;
    display: inline-block;
    min-width: 60px;
  }
  .divcard-header3 {
    margin-right: -24.399999999999977px;
    width: 373.4px;
    border-radius: 3.57px 3.57px 0px 0px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xl) var(--padding-mid) var(--padding-5xs-7);
    box-sizing: border-box;
    max-width: 107%;
    flex-shrink: 0;
    text-align: left;
    font-size: var(--font-size-xs);
    color: var(--color-white);
    font-family: var(--font-poppins);
  }
  .text {
    height: 0px;
    width: 0px;
    position: relative;
    line-height: 18px;
    display: inline-block;
  }
  .banco-alimentar- {
    align-self: stretch;
    position: relative;
    line-height: 18px;
  }
  .banco-alimentar-porto-wrapper {
    width: 314px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xs) 0px 0px;
    box-sizing: border-box;
  }
  .input {
    align-self: stretch;
    height: 38.4px;
    border-radius: 6.86px;
    border: 1px solid var(--color-darkslategray);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-11xs) var(--padding-sm-4);
    gap: var(--gap-7xs);
  }
  .responsvel {
    position: relative;
    line-height: 18px;
    display: inline-block;
    min-width: 76px;
  }
  .jos-lus {
    flex: 1;
    position: relative;
    line-height: 18px;
  }
  .input1 {
    align-self: stretch;
    height: 38.4px;
    border-radius: 6.86px;
    border: 1px solid var(--color-darkslategray);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xs) var(--padding-6xs-8) var(--padding-sm-4)
      var(--padding-5xs);
    white-space: nowrap;
  }
  .doaes {
    position: relative;
    line-height: 18px;
    display: inline-block;
    min-width: 53px;
  }
  .input-parent {
    height: 141px;
    width: 328.8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-2xs-7);
    max-width: 100%;
  }
  .cross-product {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-9xs-2) var(--padding-2xs-7) var(--padding-10xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .div15 {
    position: relative;
    line-height: 18px;
    display: inline-block;
    min-width: 23px;
  }
  .div14 {
    height: 18.4px;
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xs) 0px 0px;
    box-sizing: border-box;
  }
  .input2 {
    width: 332px;
    border-radius: 6.86px;
    border: 1px solid var(--color-white);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-4xs) var(--padding-lg) var(--padding-263xl-6);
    max-width: 100%;
  }
  .divcard3 {
    position: absolute;
    width: calc(100% - 37px);
    top: 39px;
    right: 22px;
    left: 15px;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.1);
    border-radius: 4.57px;
    background-color: var(--color-gray-400);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 0px var(--padding-5xl) var(--padding-37xl) 0px;
    box-sizing: border-box;
    gap: var(--gap-12xs-3);
    max-width: 100%;
    z-index: 2;
    font-size: var(--font-size-xs);
  }
  .divcard2 {
    align-self: stretch;
    height: 585px;
    position: relative;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.1);
    border-radius: 4.57px;
    background-color: var(--color-gray-100);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-mid);
    color: var(--color-white);
    font-family: var(--font-poppins);
  }
</style>
