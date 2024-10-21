import category from '@/src/data/category.json';
import InternalCategory from '../components/common/tab/internal-category';

export default function Home() {
  return (
    <div className="container max-w-[1200px]">
      <InternalCategory items={category[0].items} />
    </div>
  );
}
