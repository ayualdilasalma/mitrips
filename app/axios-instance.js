import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-mi-trip.cloudfunctions.net/',
  timeout: 30000,
});

instance.interceptors.request.use(
  config => {
    // eslint-disable-next-line no-param-reassign
    config.headers.authorization = `Bearer ${sessionStorage.getItem('token')}`;

    // eslint-disable-next-line no-param-reassign
    config.headers.Accept = 'application/json';
    return config;
  },
  error => Promise.reject(error),
);

// Add a response interceptor
instance.interceptors.response.use(
  response =>
    // Do something with response data
    response,
  error =>
    // Do something with response error
    Promise.reject(error),
);

export default instance;
