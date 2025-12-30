const ACCESS_TOKEN_KEY = "access_token";

export const STATIC_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2OTRhYzA1YTIyZGQzNDVlMmM2MTQzYmUiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3NjcxMzI2NDYsImV4cCI6MTc2NzE2ODY0Nn0.FqzmieCa08W4UA6g-j-EmmBasIlFgSqA-57ZTKWvBSE";

export const setAccessToken = (token) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const getAccessToken = () => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const removeAccessToken = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
};


