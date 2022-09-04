export const calculateTimestampDiffToNow = (timestamp: string): string => {
  const date = new Date(timestamp);
  const now = new Date();

  let difference = now.getTime() - date.getTime();

  const daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  difference -= daysDifference * 1000 * 60 * 60 * 24;

  if (daysDifference > 0) {
    return `${daysDifference}d`;
  }

  const hoursDifference = Math.floor(difference / 1000 / 60 / 60);
  difference -= hoursDifference * 1000 * 60 * 60;

  if (hoursDifference > 0) {
    return `${hoursDifference}h`;
  }

  const minutesDifference = Math.floor(difference / 1000 / 60);
  difference -= minutesDifference * 1000 * 60;

  if (minutesDifference > 0) {
    return `${minutesDifference}m`;
  }

  const secondsDifference = Math.floor(difference / 1000);

  return `${secondsDifference}s`;
};
