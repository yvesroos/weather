import { ONE_DAY } from '../consts';

export const getNextDays =
  (numberOfDays: number) =>
  (date: Date): Date[] => {
    const next5Days = [];
    for (let i = 1; i <= numberOfDays; i++) {
      next5Days.push(new Date(date.getTime() + i * ONE_DAY));
    }
    return next5Days;
  };

export const getNext5Days = getNextDays(5);

export const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

export const formatDate = (date: Date | string | undefined): string => {
  if (!date) {
    return '-';
  }
  return new Date(date).toLocaleDateString(undefined, {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  });
};
