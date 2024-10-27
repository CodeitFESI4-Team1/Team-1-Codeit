import CrewCard, { CrewCardInform } from './crew-card';

interface CrewCardListProps {
  CrewCardInforms: CrewCardInform[];
}

export default function CrewCardList({ CrewCardInforms }: CrewCardListProps) {
  return (
    <ul>
      {CrewCardInforms.map((inform) => (
        <li key={inform.crewId}>
          <CrewCard
            capacity={inform.capacity}
            isConfirmed={inform.isConfirmed}
            location={inform.location}
            name={inform.name}
            participantCount={inform.participantCount}
          />
        </li>
      ))}
    </ul>
  );
}
