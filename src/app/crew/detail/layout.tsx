import { DatesProvider } from '@mantine/dates';

export default function CrewDetailLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <DatesProvider
      settings={{ locale: 'ko', firstDayOfWeek: 0, weekendDays: [0], timezone: 'UTC' }}
    >
      <section>{children}</section>
    </DatesProvider>
  );
}
