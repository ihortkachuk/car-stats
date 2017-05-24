export const getTimestamp = (date?: Date) => {
  const dateTime = date ? new Date(date).getTime() : new Date().getTime();
  return Math.floor(dateTime / 1000);
}
