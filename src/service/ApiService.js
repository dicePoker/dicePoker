import axios from 'axios';
axios.defaults.withCredentials = true;
export let promiseGetUsers = {
  cancel: () => {},
};

class ApiService {
  constructor() {
    this.URL = 'https://ya-praktikum.tech/api/v2';
    this.headers = { 'Content-Type': 'application/json' };
  }

  async createNewUser(data) {
    const response = await axios.post(`${this.URL}/auth/signup`, data, {
      headers: this.headers,
    });
    if (response.status === 200) {
      return response.data;
    } else {
      return Promise.reject(
        `failed to fetch createNewUser. status: ${response.status}`,
      );
    }
  }

  async authorization(data) {
    const response = await axios.post(`${this.URL}/auth/signin`, data, {
      headers: this.headers,
    });
    if (response.status === 200) {
      return response.data;
    } else {
      return Promise.reject(
        `failed to fetch authorization. status: ${response.status}`,
      );
    }
  }

  async logout() {
    const response = await axios.post(
      `${this.URL}/auth/logout`,
      {},
      { headers: this.headers },
    );
    if (response.status === 200) {
      return response.data;
    } else {
      return Promise.reject(
        `failed to fetch logout. status: ${response.status}`,
      );
    }
  }

  async getUser() {
    const response = await axios.get(`${this.URL}/auth/user`);
    if (response.status === 200) {
      return response.data;
    } else {
      return Promise.reject(
        `failed to fetch getUser. status: ${response.status}`,
      );
    }
  }

  async changeProfileData(data) {
    const response = await axios.put(`${this.URL}/user/profile`, data, {
      headers: this.headers,
    });
    if (response.status === 200) {
      return response.data;
    } else {
      return Promise.reject(
        `failed to fetch changeProfileData. status: ${response.status}`,
      );
    }
  }

  async changePassword(data) {
    const response = await axios.put(`${this.URL}/user/password`, data, {
      headers: this.headers,
    });
    if (response.status === 200) {
      return response.data;
    } else {
      return Promise.reject(
        `failed to fetch changeProfileData. status: ${response.status}`,
      );
    }
  }

  getUsers = () => {
    const signal = axios.CancelToken.source();
    const promise = new Promise(async (resolve, reject) => {
      try {
        const { data, statusText, status } = await axios({
          method: 'GET',
          withCredentials: false,
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
}

const apiService = new ApiService();

export default apiService;
