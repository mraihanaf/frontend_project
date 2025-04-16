import axios from "axios";

// Buat instance Axios
const expiredApi = axios.create({
  baseURL: "https://budgetin-backend.rainetwork.my.id/api",
  headers: {
    "Content-Type": "application/json",
  },
});

expiredApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("Token expired! Logging out...");

      localStorage.removeItem("token");

      window.location.href = "/sign-in";
    }
    return Promise.reject(error);
  }
);

export default expiredApi;
