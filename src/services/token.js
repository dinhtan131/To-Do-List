const ACCESS_TOKEN_KEY = "access_token";

export const STATIC_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2OTU4ZGJlYzJhOWIzMGIxN2I3YWVhN2EiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3Njc1NTA4NzQsImV4cCI6MTc2NzU4Njg3NH0.8aSI7HZfJbKEXDkAj5fA-6UfdhRodiIEKinqUSWP1HE"
export const setAccessToken = (token) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const getAccessToken = () => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const removeAccessToken = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
};


