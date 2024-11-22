import LikedList from '@/src/app/(crew)/my-favorite/_components/gathering-list/liked-list-container';

export default function FavoritePage() {
  return (
    <div className="px-3 py-4 md:px-8 md:py-16 lg:px-11.5">
      <div className="hidden pb-10 text-3xl font-bold md:block">찜한 약속</div>

      <LikedList />
    </div>
  );
}
