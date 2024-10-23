export interface MainCategoryItem {
  title: CategoryItem;
  items: CategoryItem[];
}

export interface CategoryItem {
  href: string;
  label: string;
  value: string;
}
