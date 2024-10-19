import InternalCategory from '../components/common/tab/internal-category';

export default function Home() {
  const category = [
    {
      title: '스포츠',
      items: ['배드민턴', '탁구', '테니스', '축구'],
    },
    {
      title: '근력운동',
      items: ['헬스', '크로스핏'],
    },
  ];
  return (
    <div className="container">
      <InternalCategory items={category[0].items} />
    </div>
  );
}
