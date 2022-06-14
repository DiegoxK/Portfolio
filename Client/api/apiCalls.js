import axios from "axios";
axios.defaults.withCredentials = true;

const MAIN_URL = "http://localhost:5000/PortfolioApi";

// ==============================================================================
// Users
// Register user
export const signupUser = async (user) => {
  const { userName, password } = user;
  const res = await axios
    .post(MAIN_URL + "/auth/Register", {
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
    .post(MAIN_URL + "/auth/Login", {
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
  let response;
  const res = await axios.get(MAIN_URL + "/auth/User", {
    withCredentials: true,
  });

  response = await res.data;
  return response;
};

// Logout
export const logout = async () => {
  const res = await axios.post(MAIN_URL + "/auth/LogOut", {
    withCredentials: true,
  });
  if (res.status == 200) {
    return res;
  }
  return new Error("Unable To Logout. Please try again");
};
// ==============================================================================
// General crud calls
// Get Data
export const getAll = async (type) => {
  let response;
  const res = await axios.get(MAIN_URL + `/${type}`);
  response = await res.data;
  return response;
};

// Get One
export const getOne = async (type, id) => {
  let response;
  const res = await axios.get(MAIN_URL + `/${type}/${id}`);
  response = await res.data;
  return response;
};

// Delete by id
export const deleteById = async (type, id) => {
  let response;
  const res = await axios.delete(MAIN_URL + `/${type}/${id}`);
  response = await res.data;
  return response;
};

// Add Data
export const addData = async (type, data) => {
  let response;
  let url;

  if (data.title) {
    url = data.title.toLowerCase().replace(/ /g, "-");
    data = { ...data, url };
  }

  try {
    const res = await axios.post(MAIN_URL + `/${type}`, data);
    response = await res.data;
  } catch (error) {
    response = error;
  }
  return response;
};

// Edit Data
export const editData = async (type, id, data) => {
  let response;
  const res = await axios.put(MAIN_URL + `/${type}/${id}`, data);
  response = await res.data;
  return response;
};
