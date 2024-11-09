export default function isToday(dateString: string): boolean {
  const date = new Date(dateString);

  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60 * 1000;

  const koreaTimeDiff = 9 * 60 * 60 * 1000;
  const koreaNow = new Date(utc + koreaTimeDiff);

  return (
    date.getDate() === koreaNow.getDate() &&
    date.getMonth() === koreaNow.getMonth() &&
    date.getFullYear() === koreaNow.getFullYear() &&
    date.getHours() >= koreaNow.getHours() &&
    date.getMinutes() >= koreaNow.getMinutes()
  );
}
