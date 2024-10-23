import GatheringCard from '@/src/components/common/gathering-card/container';
import GatheringCardCarousel from '../components/gathering-list/gathering-card-carousel';

export default function Home() {
  return (
    <div className="container mx-auto w-full">
      CREW CREW
      <div className="grid grid-cols-1 gap-4">
        <GatheringCard
          title="등산 모임"
          date="2024-11-12T09:00"
          location="서울, 북한산"
          currentCount={5}
          totalCount={10}
          imageUrl="https://images.unsplash.com/photo-1601758260892-a62c486ace97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          isLiked={false}
        />
        <GatheringCard
          // 최대 16으로 변경할것
          title="가나다라마가나다라마가나다라마가"
          date="2024-10-15T07:30"
          location="서울, 한강공원 길어질 경우 처리리리리리"
          currentCount={8}
          totalCount={12}
          imageUrl="https://images.unsplash.com/photo-1516978101789-720eacb59e79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGNhdHxlbnwwfHwwfHx8Mg%3D%3D"
          isLiked
        />
      </div>
      <h1 className="my-8 text-center text-2xl font-bold">Gathering Carousel</h1>
      <GatheringCardCarousel />
    </div>
  );
}
