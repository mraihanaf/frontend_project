import axios from "axios";

export const resetPassword = async (email) => {
  try {
    const response = await axios.post(
      "https://budgetin.rainetwork.my.id/api/password/forgot",
      {
        email,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
