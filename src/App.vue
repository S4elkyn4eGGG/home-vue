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
  .content-container {
    padding-top 50px;
    width: 100%;
  }
</style>
