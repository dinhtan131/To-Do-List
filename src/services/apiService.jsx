import axios from "./axiosCustomize.js";
import { STATIC_TOKEN } from "./token.js";
const createUserApi = (fullName, email, phone, password) => {
    const URL_BACKEND = "/api/v1/user";

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
const updateUserApi = (_id, fullName, phone) => {
    const URL_BACKEND = "/api/v1/user";

    const data = {
        _id: _id,
        fullName: fullName,
        phone: phone
    };
    console.log(STATIC_TOKEN)
    return axios.put(URL_BACKEND, data, {
        headers: {
            Authorization: `Bearer ${STATIC_TOKEN}`
        }
    });
};
const deleteUserApi = (id) => {
    const URL_BACKEND = `/api/v1/user/${id}`;
    return axios.delete(URL_BACKEND, {
        headers: {
            Authorization: `Bearer ${STATIC_TOKEN}`
        }
    });
};
const fetchAllUserApi = () => {
    const URL_BACKEND = "/api/v1/user";
    return axios.get(URL_BACKEND, {
        headers: {
            Authorization: `Bearer ${STATIC_TOKEN}`
        }
    });
}
export {
    createUserApi, updateUserApi, deleteUserApi, fetchAllUserApi
} 