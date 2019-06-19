<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class MainMenu extends Vue {}
</script>

<template>
  <div class="top-menu-container">
    <div class="logo">
      <img src="@/assets/logo.png"/>
    </div>
    <div class="desktop-menu">
      <div class="burger-icon">
        <img src="@/assets/burger-icon.svg"/>
      </div>
      <div class="nav-item">
        <router-link to="/" class="link">
          <img src="@/assets/logo.png">
          <span>Homes</span>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link to="/about" class="link">
          <img src="@/assets/logo.png" class="icon">
          <span>About</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
  @import "~@/assets/styles/_top_menu.styl"
  @import "~@/assets/styles/_mobile_menu.styl"
</style>
