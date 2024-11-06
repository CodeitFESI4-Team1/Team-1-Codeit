export function formatDate(dateString: string) {
  const date = new Date(dateString);

  const month = `${date.getMonth() + 1}월`;
  const day = `${date.getDate()}일`;
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return { date: `${month} ${day}`, time: `${hours}:${minutes}` };
}

export function formatDateWithYear(dateString: string) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return { year, month, day };
}
