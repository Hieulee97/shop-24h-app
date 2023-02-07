import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTI0ZjJhYmU4YjM1ODUxMGZhMWI0OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTc4ODAyMiwiZXhwIjoxNjc2MDQ3MjIyfQ.A27HsVCsMvMigLvmudM6vJl3SFuya7RxijbNj7dtx5g";

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
