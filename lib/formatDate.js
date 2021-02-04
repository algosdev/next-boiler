export const formatDate = (created_at) => {
  const date = new Date(created_at);
  let d =
    ('0' + date.getDate()).slice(-2) +
    '.' +
    ('0' + (date.getMonth() + 1)).slice(-2) +
    '.' +
    date.getFullYear();

  return d;
};
