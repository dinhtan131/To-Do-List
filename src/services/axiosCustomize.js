import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'https://api.example.com'
});

// Alter defaults after instance has been created
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;