import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTI0ZjJhYmU4YjM1ODUxMGZhMWI0OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTc3NTk1MCwiZXhwIjoxNjc2MDM1MTUwfQ.LztDW7EpcQh6A-e0WfH_RTh0ls1yaKhGrPIGLjN_c-8";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers:{ token:`Bearer ${TOKEN}` },
})


// import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/";
// // const TOKEN =
// //   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
// //     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

// export const publicRequest = axios.create({
//   baseURL: BASE_URL,
// });

// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   header: { token: `Bearer ${TOKEN}` },
// });
