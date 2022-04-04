import axios from "axios";
const base_url = "https://giropay.xyz/api/v1/giro-app";
const create = (url, newObject) => {
  return axios
    .post(base_url + url, newObject)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

const get = (url) => {
  return axios
    .get(base_url + url)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

export default { create, get };
