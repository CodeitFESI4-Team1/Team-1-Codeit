export function formatDate(dateString: string) {
  const date = new Date(dateString);

  const month = `${date.getMonth() + 1}월`;
  const day = `${date.getDate()}일`;

  // 요일 계산
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];

  // 시간 계산
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const meridian = hours >= 12 ? '오후' : '오전';

  // 12시간제로 변환
  hours = hours % 12 || 12; // 0을 12로 변환

  return {
    date: `${month} ${day}`,
    dayOfWeek: `${dayOfWeek}요일`,
    time: `${meridian} ${String(hours).padStart(2, '0')}:${minutes}`,
  };
}

export function formatDateWithYear(dateString: string) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return { year, month, day };
}

export function formatDateToRequest(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function formatCompactDateTime24H(dateString: string): string {
  const date = new Date(dateString);

  // 월, 일 계산
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');

  // 시간 계산
  const hours = `${date.getHours()}`.padStart(2, '0');
  const minutes = `${date.getMinutes()}`.padStart(2, '0');

  return `${month}월 ${day}일・${hours}:${minutes}`;
}
