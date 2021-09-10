import axios from 'axios';

export let promiseGetUsers = {
  cancel: () => {},
};

class ApiService {
  constructor() {
    // TODO: вписать url
    this.URL = 'https://...';
  }

  getUsers = () => {
    const signal = axios.CancelToken.source();
    const promise = new Promise(async (resolve, reject) => {
      try {
        const { data, statusText, status } = await axios({
          method: 'GET',
          url: `${this.URL}`, // TODO: поправить url
          cancelToken: signal.token,
        });

        if (statusText === 'OK') {
          if (data?.users?.length) {
            resolve(data.users);
          } else {
            reject(`object is empty. status: ${status}`);
          }
        }

        reject(`statusText: ${statusText}. status: ${status}`);
      } catch (err) {
        console.error(err);

        if (!axios.isCancel(err)) {
          reject({
            isSuccess: false,
            message: err.message,
          });
        }
      }
    });
    promise.cancel = () => signal.cancel('getUsers is being canceled');
    promiseGetUsers = promise;
    return promise;
  };
}

const apiService = new ApiService();

export default apiService;
