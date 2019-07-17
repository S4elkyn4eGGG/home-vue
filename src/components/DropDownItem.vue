<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import listLeft from '@/directives/list-left';

  @Component({
    name: 'drop-down-item',
    directives: {
      listLeft,
    },
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

    private setOpenItem (ev, item) {
      this.openItem = item.name;

      let element = ev.currentTarget;

      while (!element.classList.contains('drop-down-list') && !element.classList.contains('drop-down-right')) {
        element = element.parentNode;

        if (!element) {
          break;
        }
      }

      this.openElement = element;
    }

    private getItemsLength (item) {
      return item.items && item.items.length;
    }

    private get getOpenItem () {
      return this.openItem;
    }

    private get getOpenElement (): HTMLElement {
      return this.openElement;
    }

    private isChildItems (item): boolean {
      return (this.getOpenItem === item.name) && item.items && item.items.length;
    }

    private openElement: any;
    private openItem: string = '';
  }
</script>

<template>
  <div class="desktop-dropdown-list">
    <div v-for="item in getMenuItems"
         :key="item.name"
         class="desktop-dropdown-list-item"
    >
      <router-link :to="item.path" class="drop-down-link">
        <span>{{item.name}}</span>
        <div v-if="getItemsLength(item)"
             class="drop-down-icon"
             :class="{'active-drop-down-icon': getOpenItem === item.name}"
             @mouseenter.prevent="setOpenItem($event, item)"
        >
          {{getDropIcon}}
        </div>
      </router-link>
      <transition name="drop-down-right">
        <div class="drop-down-right"
             v-if="isChildItems(item)"
             v-list-left="getOpenElement"
             v-list-width="getOpenElement.offsetWidth"
        >
          <drop-down-item
            :prop="item.items"
            :dropIcon="getDropIcon"
            :key="item.name"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped lang="stylus">
  .drop-down-right {
    position: fixed;
    top: 95px;
    display: flex;
  }

  .drop-down-right-enter, .drop-down-right-leave {
    opacity: 0;
    transition: all 0.5s ease;
  }

  .drop-down-right-enter-active, .drop-down-right-leave-active {
    transition: all 0.5s ease;
  }

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
