import axios from 'axios';
import {defaultAPI, API} from '../API-LIST';

const GET = (root, path) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${root ? defaultAPI : API}/${path}`)
      .then((res) => {
        resolve(res.data);
      }, (err) => {
        reject(err);
      });
  });
  return promise;
};

export default GET;