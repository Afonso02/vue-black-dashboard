<template>
  <div class="divcard1">
    <div class="symbol-container-parent">
      <div class="symbol-container">
        <div class="symbol"></div>
      </div>
      <div class="navbar-toggle-button">
        <div class="item">
          <div class="divcard-header1">
            <div class="heading-4">Envio de Mantimentos</div>
          </div>
          <img
            class="socialevents2png-icon"
            loading="lazy"
            alt=""
            src="/socialevents2png@2x.png"
          />
        </div>
        <div class="h">13h</div>
        <div class="item-container-parent">
          <div class="item-container">
            <div class="item1">
              <img
                class="users-group-people-icon-1"
                alt=""
                src="/309041-users-group-people-icon-1@2x.png"
              />
            </div>
          </div>
          <div class="div">10-20</div>
        </div>
      </div>
    </div>
    <div class="parent-divcardcontainer">
      <div class="table-header-divcardheader-parent">
        <div class="table-header-divcardheader">
          <div class="symbol1"></div>
        </div>
        <div class="div1">01.04.2024</div>
      </div>
      <div class="symbol-container-table-header-parent">
        <div class="symbol-container-table-header">
          <div class="symbol2"></div>
        </div>
        <div class="gaza-palestina">Gaza, Palestina</div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Divcard2",
  });
</script>
<style scoped>
  .symbol {
    position: relative;
    line-height: 14px;
    display: inline-block;
    min-width: 11.6px;
    max-height: 27px;
    z-index: 1;
  }
  .symbol-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-6xs-5) 0px 0px;
  }
  .heading-4 {
    position: absolute;
    top: 8px;
    left: 146px;
    line-height: 21px;
    font-weight: 600;
    display: flex;
    align-items: center;
    width: 158px;
    height: 21px;
    z-index: 1;
  }
  .divcard-header1 {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 3.57px 3.57px 0px 0px;
    width: 331.4px;
    height: 42px;
  }
  .socialevents2png-icon {
    position: absolute;
    top: 37px;
    left: 21px;
    border-radius: 4.57px;
    width: 89px;
    height: 89px;
    overflow: hidden;
    object-fit: cover;
    z-index: 1;
  }
  .item {
    height: 126px;
    width: 331.4px;
    position: absolute;
    margin: 0 !important;
    right: -172.4px;
    bottom: -67.2px;
    font-size: var(--font-size-sm);
    color: var(--color-gray-100);
    font-family: var(--font-poppins);
  }
  .h {
    position: relative;
    line-height: 27px;
    display: inline-block;
    min-width: 21px;
    max-height: 27px;
    z-index: 1;
  }
  .users-group-people-icon-1 {
    height: 14px;
    width: 14px;
    position: relative;
    object-fit: cover;
    display: none;
  }
  .item1 {
    width: 14px;
    height: 15.4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-11xs-4);
    box-sizing: border-box;
    background-image: url("/public/309041-users-group-people-icon-1@2x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  .item-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px var(--padding-8xs-6);
  }
  .div {
    position: relative;
    line-height: 27px;
    display: inline-block;
    min-width: 33px;
  }
  .item-container-parent {
    margin: 0 !important;
    position: absolute;
    bottom: -20.2px;
    left: -16px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-10xs-5);
  }
  .navbar-toggle-button {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-12xs) 0px 0px;
    position: relative;
    color: var(--themewagongithubio-gray);
    font-family: var(--font-inter);
  }
  .symbol-container-parent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-11xs-1);
  }
  .symbol1 {
    position: relative;
    line-height: 14px;
    display: inline-block;
    min-width: 13px;
    max-height: 27px;
  }
  .table-header-divcardheader {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-6xs-5) 0px 0px;
  }
  .div1 {
    position: relative;
    line-height: 27px;
    font-family: var(--font-inter);
    color: var(--themewagongithubio-gray);
    display: inline-block;
    min-width: 64px;
    max-height: 27px;
  }
  .table-header-divcardheader-parent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-10xs-8);
  }
  .symbol2 {
    position: relative;
    line-height: 14px;
    display: inline-block;
    min-width: 11px;
    max-height: 27px;
  }
  .symbol-container-table-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-6xs-5) 0px 0px;
  }
  .gaza-palestina {
    position: relative;
    font-size: var(--font-size-xs);
    line-height: 27px;
    font-family: var(--font-inter);
    color: var(--themewagongithubio-gray);
    display: inline-block;
    min-width: 88px;
    max-height: 27px;
  }
  .symbol-container-table-header-parent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-7xs);
    margin-top: -4px;
    font-size: var(--font-size-sm);
  }
  .parent-divcardcontainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .divcard1 {
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.1);
    border-radius: 4.57px;
    background-color: var(--color-darkslategray);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-12xl-8) var(--padding-86xl) var(--padding-18xl-7)
      var(--padding-102xl);
    box-sizing: border-box;
    gap: var(--gap-base-5);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-xs);
    color: var(--themewagongithubio-silver);
    font-family: var(--font-abel);
  }
</style>
