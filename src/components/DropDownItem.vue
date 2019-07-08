<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component({
    name: 'drop-down-item',
  })
  export default class DropDownItem extends Vue {
    @Prop() private prop: any;
    @Prop() private dropIcon: string;

    private get getDropIcon (): string {
      return this.dropIcon;
    }

    private get getMenuItems () {
      return this.prop;
    }

    private setOpenItem (item) {
      this.openItem = item.name;
    }

    private getItemsLength (item) {
      return item.items && item.items.length;
    }

    private get getOpenItem () {
      return this.openItem;
    }

    private openItem: string = '';
  }
</script>

<template>
  <div class="desktop-dropdown-list">
    <div v-for="item in getMenuItems"
         :key="item.name"
         class="desktop-dropdown-list-item"
         @mouseenter="setOpenItem(item)"
    >
      <router-link :to="item.path" class="drop-down-link">
        <span>{{item.name}}</span>
        <div v-if="getItemsLength(item)"
             class="drop-down-icon"
             :class="{'active-drop-down-icon': getOpenItem === item.name}"
        >
          {{getDropIcon}}
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="stylus">
  .drop-down-link {
    text-decoration: none;
    color: var(--top-menu-item-text-color);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%

    &.router-link-exact-active {
      background: var(--top-menu-item-hover-background);
      color var(--top-menu-item-active-color);
    }

    &:not(.router-link-exact-active):hover {
      background: var(--top-menu-item-active-background);
    }
  }

  .drop-down-icon {
    margin: 0 10px;
    transform: rotate(270deg);
    transition: all 0.3s ease;
  }

  .active-drop-down-icon {
    transform: rotate(90deg);
    transition: all 0.3s ease;
  }

  .desktop-dropdown-list {
    z-index: 1000;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-left: var(--top-menu-item-border-color);
    border-right: var(--top-menu-item-border-color);
    box-shadow: var(--top-menu-box-shadow);
  }

  .desktop-dropdown-list-item {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: calc(var(--top-menu-height) / 1.5);
    border-bottom: var(--top-menu-item-border-color);
    background: var(--top-menu-item-active-background);

    span {
      padding-left: 10px;
    }
  }
</style>
