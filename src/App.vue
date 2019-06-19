<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

@Component
  export default class App extends Vue {}
</script>

<template>
  <div id="app">
    <main-menu></main-menu>
    <div class="content-container">
      <router-view />
    </div>
  </div>
</template>

<style lang="stylus">
  @media screen and (min-width: 640px) {
    .content-container {
      padding-top 90px;
      width: 100%;
    }
  }
  @media screen and (max-width: 639px) {
    .content-container {
      padding-left 90px;
      width: 100%;
    }
  }
</style>
