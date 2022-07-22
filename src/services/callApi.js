import axios from "axios";

const URL = "https://api.spacexdata.com/v4";

const callAPi = async (endpoint) => {
  try {
    const response = await axios.get(`${URL}${endpoint}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export default callAPi;
