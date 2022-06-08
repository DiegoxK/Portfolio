import axios from "axios";
axios.defaults.withCredentials = true;

const MAIN_URL = "http://localhost:5000/PortfolioApi";

// Register user
export const signupUser = async (user) => {
  const { userName, password } = user;
  const res = await axios
    .post(MAIN_URL + "/Registrar", {
      userName,
      password,
    })
    .catch((err) => {
      console.log(err);
    });

  const data = await res.data;
  return data;
};

// Login user
export const loginUser = async (user) => {
  const { userName, password } = user;
  const res = await axios
    .post(MAIN_URL + "/Login", {
      userName,
      password,
    })
    .catch((err) => {
      console.log(err);
    });
  const data = await res.data;
  return data;
};

// Get User
export const getUser = async () => {
  const res = await axios
    .get(MAIN_URL + "/User", {
      withCredentials: true,
    })
    .catch((err) => console.log(err));

  const data = await res.data;
  return data;
};
