export default function isTimeOvered(dateString: string): boolean {
  const inputDate = new Date(dateString);
  const today = new Date();

  return (
    inputDate.getDate() <= today.getDate() &&
    inputDate.getMonth() <= today.getMonth() &&
    inputDate.getFullYear() <= today.getFullYear()
  );
}
