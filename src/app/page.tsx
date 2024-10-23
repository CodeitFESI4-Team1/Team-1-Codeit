import category from '@/src/data/category.json';
import MainCategory from '../components/main-category';

export default function Home() {
  return (
    <div className="max-w-[1200px]">
      <MainCategory data={category} />
    </div>
  );
}
