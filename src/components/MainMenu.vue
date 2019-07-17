<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import clickOutside from '@/directives/click-outside.vue';
  import listWidth from '@/directives/list-width.vue';

  @Component({
    directives: {
      clickOutside,
      listWidth,
    },
  })
  export default class MainMenu extends Vue {
    @Prop() private properties: any;

    private prop = {
      layout: 640,
      logo: require('@/assets/logo.png'),
      colors: {
        'item-border-color': '3px solid #42b983',
        'item-active-color': '#00b94a',
        'item-active-background': '#00b94a0a',
        'item-hover-background': '#00b94a29',
        'item-text-padding': '20px',
        'item-text-color': '#2c3e50',
        'box-shadow': '0 2px 2px 2px #57bd7f',
        'border-bottom': '2px solid #42b983',
        'background': 'white',
      },
      items: [
        {
          name: 'First',
          icon: require('@/assets/logo.png'),
          path: '/',
          items: [
            {
              name: 'First1',
              icon: require('@/assets/logo.png'),
              path: '/',
              items: [
                {
                  name: 'First2',
                  icon: require('@/assets/logo.png'),
                  path: '/',
                  items: [
                    {
                      name: 'Lola',
                      icon: require('@/assets/logo.png'),
                      path: '/asfasfasf',
                      items: [
                        {
                          name: 'Lola1',
                          icon: require('@/assets/logo.png'),
                          path: '/www',
                        },
                        {
                          name: 'Lola2',
                          icon: require('@/assets/logo.png'),
                          path: '/ccc',
                        }
                      ],
                    }
                  ],
                },
                {
                  name: 'First1Second2',
                  icon: require('@/assets/logo.png'),
                  path: '/asf',
                }
              ],
            },
            {
              name: 'First1Second1',
              icon: require('@/assets/logo.png'),
              path: '/about',
            }
          ],
        },
        {
          name: 'Second1',
          icon: require('@/assets/logo.png'),
          path: '/about',
          items: [
            {
              name: 'Second1First1',
              icon: require('@/assets/logo.png'),
              path: '/',
            },
            {
              name: 'Second1Second1',
              icon: require('@/assets/logo.png'),
              path: '/about',
            }
          ],
        },
        {
          name: 'Thirt',
          icon: require('@/assets/logo.png'),
          path: '/lol',
          items: [
            {
              name: 'Thirt1',
              icon: require('@/assets/logo.png'),
              path: '/lol',
            }
          ],
        }
      ],
      desktop: {
        type: 'drop-down',
        openIcon: '▼',
        styles: {
          'height': '90px',
          'item-width': '100px',
          'item-width-hover': '200px',
        },
      },
      mobile: {
        type: 'burger',
        align: 'left',
        title: 'menu',
        styles: {
          'size': '70px',
          'size-open': '15rem',
        },
      },
    };

    private get getDesktopNode (): Element | null {
      return document.querySelector('.vue-easy-desktop-menu-container');
    }

    private get getMobileNode (): Element | null {
      return document.querySelector('.vue-easy-mobile-menu-container');
    }

    private get getMobileClass (): string {
      return `vue-easy-mobile-menu-container--${this.prop.mobile.type}`;
    }

    private get getDesktopClass (): string {
      return `vue-easy-desktop-menu-container--${this.prop.desktop.type}`;
    }

    private get getDesktopProps (): any {
      return this.prop.desktop;
    }

    private get getMobileProps (): any {
      return this.prop.mobile;
    }

    private get getDesktopType (): string {
      return this.prop.desktop.type;
    }

    private mounted () {
      this.setColors();
      this.setDesktopStyle();
      this.setMobileStyle();
    }

    private setColors () {
      Object.keys(this.prop.colors).map((color: string) => {
        (this.getDesktopNode as HTMLElement).style.setProperty(`--top-menu-${color}`, this.prop.colors[color]);
        (this.getMobileNode as HTMLElement).style.setProperty(`--top-menu-${color}`, this.prop.colors[color]);
      });
    }

    private setDesktopStyle () {
      Object.keys(this.prop.desktop.styles).map((itemStyle: string) => {
        (this.getDesktopNode as HTMLElement).style.setProperty(`--top-menu-${itemStyle}`, this.prop.desktop.styles[itemStyle]);
      });
    }

    private setMobileStyle () {
      Object.keys(this.prop.mobile.styles).map((itemStyle: string) => {
        (this.getMobileNode as HTMLElement).style.setProperty(`--top-menu-${itemStyle}`, this.prop.mobile.styles[itemStyle]);
      });
    }

    private clickBurger () {
      this.burgerOpen = !this.burgerOpen;
    }

    private clickBurgerOutside () {
      this.burgerOpen = false;
    }

    private get getBurgerOpen (): boolean {
      return this.burgerOpen;
    }

    private itemsLength (item): boolean {
      return item.items && item.items.length;
    }

    private dropDownDesktopMouseEnter (ev, item) {
      this.openMenu = item.name;
      this.openElementWidth = ev.target.clientWidth;
    }

    private openList (item): boolean {
      return item.items && item.items.length && this.getOpenMenu === item.name;
    }

    private get getOpenMenu () {
      return this.openMenu;
    }

    private get getOpenElementWidth () {
      return this.openElementWidth;
    }

    private clickOutsideMenu () {
      this.openMenu = '';
    }

    private openMenu: string = '';
    private openElementWidth?: number;
    private burgerOpen: boolean = false;
  }
</script>

<template>
  <div>
    <div :class="getDesktopClass" class="vue-easy-desktop-menu-container main-desktop">
      <div class="logo">
        <router-link to="/" class="link">
          <img :src="prop.logo"/>
        </router-link>
      </div>
      <div v-if="getDesktopType === 'slide'" class="main-menu">
        <div v-for="item in prop.items" :key="item.name" class="nav-item">
          <router-link :to="item.path" class="link">
            <img :src="item.icon">
            <span>{{item.name}}</span>
          </router-link>
        </div>
      </div>
      <div v-if="getDesktopType === 'drop-down'" class="main-menu">
        <div v-for="item in prop.items"
             :key="item.name"
             class="drop-down-nav-item"
             @mouseenter="dropDownDesktopMouseEnter($event, item)"
             v-click-outside="clickOutsideMenu"
        >
          <router-link
            :to="item.path"
            class="drop-down-link"
          >
            <img :src="item.icon">
            <span>{{item.name}}</span>
            <div v-if="itemsLength(item)"
                 :class="{'transform-open-icon': getOpenMenu === item.name}"
                 class="drop-down-open-icon"
            >
              {{getDesktopProps.openIcon}}
            </div>
          </router-link>
          <transition name="fade">
            <div class="drop-down-list"
                 v-if="openList(item)"
                 v-list-width="getOpenElementWidth"
            >
              <drop-down-item
                :prop="item.items"
                :dropIcon="getDesktopProps.openIcon"
                :key="item.name"
              />
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div :class="getMobileClass" class="vue-easy-mobile-menu-container main-mobile">
      <div class="logo">
        <router-link to="/" class="link">
          <img :src="prop.logo"/>
        </router-link>
      </div>
      <div class="main-menu"
           :class="[getBurgerOpen ? 'burger-open': 'burger-close']">
        <div class="burger-icon"
             @click="clickBurger"
             v-click-outside="clickBurgerOutside">
          <div>{{getMobileProps.title}}</div>
          <img src="@/assets/burger-icon.svg"/>
        </div>
        <div v-for="item in prop.items" :key="item.name" class="nav-item">
          <router-link :to="item.path" class="link">
            <img :src="item.icon">
            <span>{{item.name}}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
  @import "~@/assets/styles/_top_menu.styl"
  @import "~@/assets/styles/_mobile_menu.styl"
</style>
