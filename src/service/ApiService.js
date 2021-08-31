import axios from 'axios';

export let promiseGetUsers = {
  cancel: () => {},
};

class ApiService {
  constructor() {
    this.URL = 'https://...';
  }

  getUsers_original = () => {
    const signal = axios.CancelToken.source();
    const promise = new Promise(async (resolve, reject) => {
      try {
        const { data, statusText, status } = await axios({
          method: 'GET',
          url: `${this.URL}`,
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

  getUsers = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: 'Name 1',
            record: 200,
            rating: 175,
          },
          {
            id: 2,
            name: 'Name 2',
            record: 340,
            rating: 475,
          },
          {
            id: 3,
            name: 'Name 3',
            record: 300,
            rating: 375,
          },
          {
            id: 4,
            name: 'Name 4',
            record: 400,
            rating: 385,
          },
          {
            id: 5,
            name: 'Name 5',
            record: 500,
            rating: 575,
          },
          {
            id: 6,
            name: 'Name 6',
            record: 600,
            rating: 675,
          },
        ]);
      }, 1000);
    });
  };
}

const apiService = new ApiService();

export default apiService;
