import axios from "axios";

export const getAllCategories = async() => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.get("https://budgetin.rainetwork.my.id/api/categories", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}