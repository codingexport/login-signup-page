import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

// Function to call signup endpoint
export const signup = (formData) => {
    return axios.post(`${API_BASE_URL}/Signup`, formData);
};


// Function to call login endpoint
export const login = (formData) => {
    return axios.post(`${API_BASE_URL}/Login`, formData);
};
