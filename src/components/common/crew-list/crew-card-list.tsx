import CrewCard, { CrewCardInform } from './crew-card';

interface CrewCardListProps {
  CrewCardInforms: CrewCardInform[];
}

export default function CrewCardList({ CrewCardInforms }: CrewCardListProps) {
  return (
    <ul className="mx-auto flex w-[343px] flex-col gap-8 md:w-[744px] lg:w-[1107px]">
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
          />
        </li>
      ))}
    </ul>
  );
}
