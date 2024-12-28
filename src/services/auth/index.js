import { axiosInstance } from "../api";

export const postRegister = async ({ username, email, password }) => {
  try {
    const response = await axiosInstance.post("/auth/register", {
      username,
      email,
      password,
    });
    console.log("Registration Successful:", response.data);
    return response.data;
  } catch (error) {
    console.log("Error:", error.response ? error.response.data : error.message);
    return error;
  }
};

export const getVerify = async (token) => {
  try {
    const response = await axiosInstance.get("/auth/verify", {
      params: { token },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || new Error("Verification failed");
  }
};

export const postLogin = async ({ username, password }) => {
  try {
    const response = await axiosInstance.post("/login", { username, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || new Error("Verification failed");
  }
};
