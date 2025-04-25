export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMilliseconds = now - date;
  const diffInSeconds = Math.round(diffInMilliseconds / 1000);
  const diffInMinutes = Math.round(diffInSeconds / 60);
  const diffInHours = Math.round(diffInMinutes / 60);
  const diffInDays = Math.round(diffInHours / 24);
  const diffInMonths = Math.round(diffInDays / 30); // Приблизительно

  if (diffInMonths >= 1) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("ru-RU", options) + " года";
  } else {
    if (diffInDays === 0) {
      return "сегодня";
    } else if (diffInDays === 1) {
      return "вчера";
    } else if (diffInDays < 7) {
      return `${diffInDays} дня назад`;
    } else if (diffInDays < 30) {
      return `${Math.floor(diffInDays / 7)} недели назад`;
    }

    return (
      date.toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }) + " года"
    );
  }
};
