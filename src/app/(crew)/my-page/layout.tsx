import { ReactNode } from 'react';
import ProfileCardContainer from '@/src/app/(crew)/my-page/_components/profile-card/container';
import ReviewTabs from './_components/review-tabs';

export default function myPageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto my-0 min-h-screen max-w-pc bg-gray-50 px-3 py-11 md:px-8 lg:px-11">
      <div className="lg:gap-4.5 flex flex-col gap-3 md:gap-4">
        <ProfileCardContainer />
        <ReviewTabs />
      </div>
      <div className="pt-12">{children}</div>
    </div>
  );
}
