import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "../constants/appConstants";
import { history } from "../main";

//http.get
const http = axios.create({
  baseURL: BASE_URL,
  timeout: 20000, //giới hạn thời gian chờ kết quả
});

//http dành riêng refresh
const refreshHttp = axios.create({
  baseURL: BASE_URL,
  timeout: 20000, //giới hạn thời gian chờ kết quả
});

//cấu hình gửi request
http.interceptors.request.use((req) => {
  const accessToken = localStorage.getItem("accessToken");
  //   if (accessToken) {
  //     req.headers = {
  //       ...req.headers,
  //       'Authorization': accessToken,
  //       'tokenCybersoft': TOKEN_CYBERSOFT,
  //     };
  //   } else {
  //     req.headers = {
  //       ...req.headers,
  //       'tokenCybersoft': TOKEN_CYBERSOFT,
  //     };
  //   }
  // chỉ set khi đã đăng nhập
  if (accessToken) {
    req.headers.set("Authorization", accessToken);
  }
  req.headers.set("tokenCybersoft", TOKEN_CYBERSOFT);

  return req; // cần return req để axios tiếp tục gửi request
});

//cấu hình response
http.interceptors.response.use(
  (res) => {
    //2xx response
    return res;
  },
  async (err) => {
    // 400 -> 500
    if (err.response) {
      const status = err.response.status;
      const originalRequest = err.config;
      //xử lý về accessToken khi gặp lỗi 401 lần đầu -> thử refreshToken -> thử lại request 1 lần với accessToken mới
      if (
        status === 401 &&
        localStorage.getItem("accessToken") &&
        !originalRequest._retry
      ) {
        // đánh dấu request này đã thử refreshToken
        originalRequest._retry = true;
        // refreshtoken
        try {
          //để hạn chế việc lặp vô hạn khi refreshToken thất bại, tạo refreshhttp mới thay vì dùng http đã có interceptor
          const result = await refreshHttp.request({
            url: "/api/Users/RefeshToken",
            method: "POST",
            headers: {
              Authorization: localStorage.getItem("accessToken"),
              tokenCybersoft: TOKEN_CYBERSOFT,
            },
          });

          //accessToken mới nhận được từ refreshToken
          const { accessToken } = result.data.content;
          localStorage.setItem("accessToken", accessToken);
          //set header với accesstoken mới
          originalRequest.headers["Authorization"] = accessToken;
          return http(originalRequest); // thử lại request với accessToken mới
        } catch (error) {
          // nếu refreshToken thất bại -> xóa accessToken và điều hướng về login
          localStorage.removeItem("accessToken");
          return Promise.reject(error);
        }
      }

      switch (status) {
        case 400:
          alert("Bad Request");
          // console.error(err.response.data);
          console.error("400 - dữ liệu hợp lệ");
          break;
        case 401:
          console.error("401 - chưa xác thực");
          //điều hướng về /login
          //   window.location.href = "/login";
          history.push("/login");
          break;

        case 403:
          console.error("403 - không có quyền");
          break;

        case 404:
          console.error("404 - không tìm thấy");
          break;

        case 429:
          console.error("429 - quá nhiều yêu cầu");
          break;

        case 500:
          console.error("500 - lỗi server");
          break;
        default:
          console.error(`Lỗi không xác định: ${status}`);
          break;
      }
    } else if (err.request) {
      console.error("Server không phản hồi", err.message);
    } else {
      // lỗi khi cấu hình request
      console.error("Lỗi khi cấu hình request", err.message);
    }

    return Promise.reject(err); // cần return Promise.reject để axios biết request đã thất bại
  },
);

export default http;
