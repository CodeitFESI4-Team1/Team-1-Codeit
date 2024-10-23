import category from '@/src/data/category.json';
import InternalCategory from '@/src/components/common/category/internal-category';

export default function Home() {
  return (
    <div className="container">
      <InternalCategory items={category[0].items} />
    </div>
  );
}
