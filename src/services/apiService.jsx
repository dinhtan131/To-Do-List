import axios from "axios";
import { STATIC_TOKEN } from "./token.js";
const createUserApi = (fullName, email, phone, password) => {
    const URL_BACKEND = "http://localhost:8080/api/v1/user";

    const data = {
        fullName,
        email,
        password,
        phone
    };
    console.log(STATIC_TOKEN)
    return axios.post(URL_BACKEND, data, {
        headers: {
            Authorization: `Bearer ${STATIC_TOKEN}`
        }
    });
};
export {
    createUserApi
} 