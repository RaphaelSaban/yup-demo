function nameOfMonth(month) {
  return [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][month];
}

function prettyDate(date) {
  if (!date) return null;
  const dateObject = new Date(date),
    year = dateObject.getFullYear(),
    month = nameOfMonth(dateObject.getMonth()),
    day = dateObject.getDate();

  return `${day} ${month} ${year}`;
}

module.exports = {
  prettyDate,
};
