import { getCrewList } from '@/src/_apis/crew/get-crew-list';
import FindCrew from '../_components/find-crew/find-crew';

export default async function HomePage() {
  const initialData = await getCrewList(
    {
      keyword: '',
      mainLocation: '',
      mainCategory: '',
      subCategory: '',
      sortType: 'LATEST',
    },
    {
      page: 0,
      size: 6,
      sort: ['LATEST'],
    },
  );

  const infiniteData = {
    pages: [initialData],
    pageParams: [],
  };

  return <FindCrew initialData={infiniteData} />;
}
