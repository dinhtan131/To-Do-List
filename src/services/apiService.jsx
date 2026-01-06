import axios from "./axiosCustomize.js";
const createUserApi = (fullName, email, phone, password) => {
    const URL_BACKEND = "/api/v1/user";

    const data = {
        fullName,
        email,
        password,
        phone
    };
    return axios.post(URL_BACKEND, data);
};
const updateUserApi = (_id, fullName, phone) => {
    const URL_BACKEND = "/api/v1/user";

    const data = {
        _id: _id,
        fullName: fullName,
        phone: phone
    };
    return axios.put(URL_BACKEND, data);
};
const deleteUserApi = (id) => {
    const URL_BACKEND = `/api/v1/user/${id}`;
    return axios.delete(URL_BACKEND);
};
const fetchAllUserApi = (current, pageSize) => {
    const URL_BACKEND = `/api/v1/user?current=${current}&pageSize=${pageSize}`;
    return axios.get(URL_BACKEND);
}
const fetchAllBookApi = (current, pageSize) => {
    const URL_BACKEND = `/api/v1/book?current=${current}&pageSize=${pageSize}`;
    return axios.get(URL_BACKEND);
}
const registerUserApi = (fullName, email, phone, password) => {
    const URL_BACKEND = "/api/v1/user";

    const data = {
        fullName,
        email,
        password,
        phone
    };
    return axios.post(URL_BACKEND, data);
};
const loginApi = (email, password) => {
    const URL_BACKEND = "/api/v1/auth/login";

    const data = {
        username: email,
        password: password,
        delay: 2000
    };
    return axios.post(URL_BACKEND, data);
};
const getAccountApi = () => {
    const URL_BACKEND = "/api/v1/auth/account";
    return axios.get(URL_BACKEND);
};
const logoutApi = () => {
    const URL_BACKEND = "/api/v1/auth/logout";
    return axios.post(URL_BACKEND);
};
const createBookApi = (data) => {
    const URL_BACKEND = "/api/v1/book";

    return axios.post(URL_BACKEND, data);
};

const deleteBookApi = (id) => {
    const URL_BACKEND = `/api/v1/book/${id}`;
    return axios.delete(URL_BACKEND);
};
const updateBookApi = (
    id,
    thumbnail,
    slider,
    mainText,
    author,
    price,
    quantity,
    category,
    sold
) => {
    return axios.put(`/api/v1/book/${id}`, {
        thumbnail,
        slider,   // ⚠️ array
        mainText,
        author,
        price,
        quantity,
        category,
        sold
    });
};


export {
    createUserApi, updateUserApi, deleteUserApi, fetchAllUserApi, registerUserApi, loginApi, getAccountApi, logoutApi,
    createBookApi, deleteBookApi, fetchAllBookApi, updateBookApi
} 