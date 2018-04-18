const getHost = () => {
  const protocol = window.location.protocol;
  const host = window.location.host;
  return `${protocol}//${host}`;
};
const apiURI = 'https://endpoints-201422.appspot.com';

export const ENV = {
  BASE_URI: getHost(),
  BASE_API: apiURI
};