import dayjs from 'dayjs';

export const getRemainingTimeUntilMSTimestamp = (timestamp: number) => {
  const timestampDayJS = dayjs(timestamp);
  const now = dayjs();
  if (timestampDayJS.isBefore(now)) {
    return {
      seconds: '00',
      minutes: '00',
      hours: '00',
      days: '00',
    };
  }
  return {
    seconds: getRemainingSeconds(now, timestampDayJS),
    minutes: getRemainingMinutes(now, timestampDayJS),
    hours: getRemainingHours(now, timestampDayJS),
    days: getRemainingDays(now, timestampDayJS),
  };
};

function padWithZero(number: number, minLength: number) {
  const numberAsString = number.toString();
  if (numberAsString.length >= minLength) {
    return numberAsString;
  }
  return '0'.repeat(minLength - numberAsString.length) + numberAsString;
}

function getRemainingSeconds(now: dayjs.Dayjs, timestamp: dayjs.Dayjs) {
  return padWithZero(timestamp.diff(now, 'second') % 60, 2);
}

function getRemainingMinutes(now: dayjs.Dayjs, timestamp: dayjs.Dayjs) {
  return padWithZero(timestamp.diff(now, 'minute') % 60, 2);
}

function getRemainingHours(now: dayjs.Dayjs, timestamp: dayjs.Dayjs) {
  return padWithZero(timestamp.diff(now, 'hour') % 24, 2);
}

function getRemainingDays(now: dayjs.Dayjs, timestamp: dayjs.Dayjs) {
  return padWithZero(timestamp.diff(now, 'day'), 2);
}
