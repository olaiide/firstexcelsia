import axios from "axios";

//const base_url = process.env.REACT_APP_API_BASE_URL;
const base_url = "https://giropay.xyz/api/v1/giro-app";
const create = (url, newObject) => {
  return axios
    .post(base_url + url, newObject)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
      //throw new Error(err.response.data.message);
    });
};

const get = (url, newObject) => {
  return axios
    .get(base_url + url, { params: newObject })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
      //throw new Error(err.response.data.message);
    });
};

export default { create, get };
