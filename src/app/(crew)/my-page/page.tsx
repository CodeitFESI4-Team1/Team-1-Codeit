import ProfileCardContainer from '@/src/app/(crew)/my-page/_components/profile-card/container';
import ReviewSection from '@/src/app/(crew)/my-page/_components/review-section';

const mockData = {
  id: 1,
  profileImageUrl: '',
  nickname: '율율',
  email: 'youlyoul@email.com',
};

export default function MyPage() {
  return (
    <div className="container mx-auto my-0 min-h-screen max-w-pc bg-gray-50 px-3 py-11 md:px-8 lg:px-11">
      <div className="lg:gap-4.5 flex flex-col gap-3 md:gap-4">
        <ProfileCardContainer data={mockData} />
      </div>
      <ReviewSection />
      <div />
    </div>
  );
}
