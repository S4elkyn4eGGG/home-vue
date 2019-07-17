export interface IItem {
  name: string,
  icon: string,
  path: string,
  items?: Array<IItem>
}

export interface IColors {
  'item-border-color': string,
  'item-active-color': string,
  'item-active-background': string,
  'item-hover-background': string,
  'item-text-padding': string,
  'item-text-color': string,
  'box-shadow': string,
  'border-bottom': string,
  'background': string,
}

export interface IDesktop {
  type: string,
  openIcon?: string,
  styles: {
    'height': string,
    'item-width': string,
    'item-width-hover': string,
  }
}

export interface IMobile {
  type: string,
  align: string,
  title: string,
  styles: {
    'size': string,
    'size-open': string,
  }
}

export interface IProperties {
  logo: string,
  colors: IColors,
  items: Array<IItem>,
  desktop: IDesktop,
  mobile: IMobile
}
