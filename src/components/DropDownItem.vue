<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component({
    name: 'drop-down-item',
  })
  export default class DropDownItem extends Vue {
    @Prop() private prop: any;

    private get getMenuItems () {
      debugger;
      return this.prop;
    }

    private mounted () {
      this.isDropMenu = this.$parent.$options._componentTag === 'drop-down-item';
    }
    private menuMouseEnter (item) {
      this.isOpenMenu = item.name;
    }

    private getIsOpen (item) {
      return this.isOpenMenu === item.name;
    }

    private get getIsDropMenu () {
      return this.isDropMenu;
    }

    private isDropMenu: boolean = false;
    private isOpenMenu: string = '';
  }
</script>

<template>
  <div :class="[getIsDropMenu ? 'desktop-dropdown-sec' : 'desktop-dropdown']">
    <div v-if="!getIsDropMenu" class="desktop-dropdown">
      <div v-for="item in getMenuItems" :key="item.name" class="drop-item" @mouseenter="menuMouseEnter(item)">
        <div>{{item.name}}</div>
        <div class="drop-list" v-if="getIsOpen(item)">
          <div v-for="itemMenu in item.items" :key="itemMenu.name" class="drop-list-item">
            <drop-down-item :prop="itemMenu.items"></drop-down-item>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="dropdown-list-menu">
      <div v-for="item in getMenuItems" :key="item.name" class="drop-list-item" @mouseenter="menuMouseEnter(item)">
        <div>{{item.name}}</div>
        <div class="drop-list">
          <div v-if="getIsOpen(item)">
            <div v-for="itemMenu in item.items" :key="itemMenu.name" class="drop-list-item">
              <div>{{itemMenu.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
  .drop-list-item {
    width: 100%;
    background: green;
    height: 70px;
  }

  .drop-list-item-right {
    width: 500px;
    position: absolute;
    height: 500px;
  }

  .desktop-dropdown {
    display: flex;
    flex-direction: row;
  }

  .desktop-dropdown-sec {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .dropdown-list-menu {
    width: 100%;
    height: 100%;
  }

  .drop-item {
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100%;
    background: green;
  }

  .drop-list {
    z-index: 900;
    top: 100px;
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 100px;
  }
</style>
