<script>
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class MainMenu extends Vue {}
</script>

<template>
  <div class="out-container">
    <div class="desktop-menu">
      <div class="nav-item">
        <router-link to="/" class="link">
          <img src="@/assets/logo.png" class="icon">
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
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .out-container {
    z-index: 1000;
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    height: 90px;
    box-shadow: 0 2px 2px 2px rgba(0,0,0,0.5);
    border-bottom: 2px solid #42b983;
  }
  .desktop-menu {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    flex-flow: nowrap;
    height: 100%;
    .nav-item {
      border-right: 3px solid #42b983;
      width: 100px;
      height: 100%;
      transition: all 0.3s ease;
      &:first-child {
        border-left-width: 0;
      }
      &:hover {
        width: 200px;
        transition: all 0.3s ease;
        a {
          span {
            display: inline-block;
            animation: fadeIn 1s;
          }
          img {
            display: none;
            animation: fadeIn 1s;
          }
        }
      }
    }
    .link {
      &.router-link-exact-active {
        color #42b983
      }
      &:hover {
        justify-content: flex-start;
      }
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      text-align: left;
      text-decoration: none;
      font-weight: bold;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #2c3e50;
      span {
        display: none;
        padding: 20px;
      }
    }
    .icon {
      width: 50%;
      height: 50%;
      display: block;
      animation: fadeIn 2s;
    }
  }
</style>
