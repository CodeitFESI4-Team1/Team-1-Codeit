import CrewCard, { CrewCardInform } from './crew-card';

/**
 * CrewCard 컴포넌트
 * @param {CrewCardInform[]} CrewCardInforms - 크루 data
 * @param {boolean} isWide - 카드 리스트 정렬 방법 (true일 시 1열, false일 시 2열)
 * @returns {JSX.Element}
 */

interface CrewCardListProps {
  CrewCardInforms: CrewCardInform[];
  isWide?: boolean;
}

export default function CrewCardList({ CrewCardInforms, isWide = false }: CrewCardListProps) {
  return (
    <ul
      className={`mx-auto flex w-[343px] flex-col gap-8 md:w-[744px] lg:w-[1107px] ${!isWide ? 'lg:grid lg:grid-cols-2 lg:gap-x-4 lg:gap-y-8' : ''}`}
    >
      {CrewCardInforms.map((inform) => (
        <li key={inform.crewId}>
          <CrewCard
            id={inform.crewId}
            capacity={inform.capacity}
            isConfirmed={inform.isConfirmed}
            location={inform.location}
            name={inform.name}
            thumbnail={inform.images[0].imagePath}
            canceledDate={inform.canceledAt}
            participantCount={inform.participantCount}
            isWide={isWide}
          />
        </li>
      ))}
    </ul>
  );
}
