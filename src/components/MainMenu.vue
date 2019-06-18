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
          <div class="image-item">
            <img src="@/assets/logo.png" class="icon">
          </div>
          <span>Homes</span>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link to="/about" class="link">
          <div class="image-item"></div>
          <span>About</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
  .icon {
    width: calc(100% - 20px);
    height: calc(100% - 20px);
  }
  .out-container {
    padding: 10px;
    z-index: 1000;
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    height: 90px;
  }
  .desktop-menu {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    flex-flow: nowrap;
  }
  .nav-item {
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
    border: 2px solid #42b983;
    width: 100px;
    height: 90px;
    transition: all 0.3s ease;
    &:first-child {
      border-right-width: 0;
    }
    &:hover {
      width: 200px;
      transition: all 0.3s ease;
      a {
        span {
          opacity: 1;
          display: inline;
          transition: all 1s ease;
        }
        div {
          opacity: 0;
          display: none;
          transition: all 1s ease-;
        }
      }
    }
  }
  .link {
    display: block;
    width: 100%;
    height: 100%;
    text-align: left;
    text-decoration: none;
    font-weight: bold;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    &.router-link-exact-active {
      color #42b983
    }
    span {
      opacity: 0;
      display: none;
      transition: all 1s ease;
      padding: 20px;
    }
  }
  .image-item {
    width: 100%;
    height: 100%;
    opacity: 1;
    display: block;
    transition: all 1s ease;
  }
</style>
