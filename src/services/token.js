const ACCESS_TOKEN_KEY = "access_token";

export const STATIC_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2OTU4ZGJlYzJhOWIzMGIxN2I3YWVhN2EiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3Njc2MDgxODEsImV4cCI6MTc2NzY0NDE4MX0.7ZRv0XuaDItUUzizxe92JeZcHizA0p8-O6PBx0H7TI0"
export const setAccessToken = (token) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const getAccessToken = () => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const removeAccessToken = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
};


