import api from "../utils/expiredApi";

export const getUser = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.get("https://budgetin-backend.rainetwork.my.id/api/auth/user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
