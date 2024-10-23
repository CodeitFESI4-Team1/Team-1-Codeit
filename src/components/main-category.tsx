export interface MainCategoryProps {
  data: MainCategoryItem[];
}

export interface MainCategoryItem {
  title: CategoryItem;
  items: CategoryItem[];
}

export interface CategoryItem {
  href: string;
  label: string;
}

export default function MainCategory({ data }: MainCategoryProps) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.title.href}>{item.title.label}</li>
      ))}
    </ul>
  );
}
