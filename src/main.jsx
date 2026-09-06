import { createRoot } from 'react-dom/client'

//? jsx : chứa các code tạo nên các đối tương component(các thành phần UI)  trong reactjs
//? complier : chuyển đổi các code jsx sang các code js & html thuần 
//? lệnh chạy npm run dev : chạy ứng dụng reactjs (biên dịch code , chạy localhost)
//? lệnh build npm run build : build code reactjs sang code js & html thuần để deploy lên server => đóng gói code (bundle) reactjs thành các file js & html thuần để deploy lên server (một file js, một file html, một file css, ...)
createRoot(document.getElementById('root')).render(
 <h1>Render reactjs</h1>
)
