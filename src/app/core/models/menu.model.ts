export type MenuGroup = 'client' | 'trainer' | 'nutritionist' | 'gym' | 'admin';

export interface MenuItem {
  group: MenuGroup;
  separator?: boolean;
  selected?: boolean;
  active?: boolean;
  items: SubMenuItem[];
}

export interface SubMenuItem {
  icon?: string;
  label: string;
  route: string | null;
  expanded?: boolean;
  active?: boolean;
  children?: SubMenuItem[];
}
