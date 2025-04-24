export const setImage = (url) => {
  if (!url) return;

  return `${process.env.REACT_APP_SERVER_URL}/${url}`;
};
