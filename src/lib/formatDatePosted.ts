// Hours ago vala function
const convertToDateToElapsed = (date: string): string => {
  const now = new Date(Date.now());

  const current = new Date(date);
  const diff = now.getTime() - current.getTime();

  return (diff / 1000 / 60 / 60).toFixed(0);
};

export default convertToDateToElapsed;
