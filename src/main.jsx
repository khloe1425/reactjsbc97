import { createRoot } from 'react-dom/client'
import HeaderHome from './components/HeaderHome'
import HomePage from './pages/HomePage'
import DataBinding from './pages/DataBinding'
import HandleEvent from './pages/HandleEvent'
import RenderCondition from './pages/RenderCondition'
import ChangeNumber from './pages/StateDemo/ChangeNumber'
import ChangeFontSize from './pages/StateDemo/ChangeFontSize'
import StyleComponentDemo from './pages/StyleComponent/StyleComponentDemo'
//css dùng cho cả dự án
import './assets/css/main.css'
import CarDemo from './pages/StateDemo/CarDemo'

//? jsx : chứa các code tạo nên các đối tương component(các thành phần UI)  trong reactjs
//? complier : chuyển đổi các code jsx sang các code js & html thuần 
//? lệnh chạy npm run dev : chạy ứng dụng reactjs (biên dịch code , chạy localhost)
//? lệnh build npm run build : build code reactjs sang code js & html thuần để deploy lên server => đóng gói code (bundle) reactjs thành các file js & html thuần để deploy lên server (một file js, một file html, một file css, ...)
createRoot(document.getElementById('root')).render(
  <>

    {/* <ChangeNumber /> */}
    {/* <ChangeFontSize /> */}
    {/* <StyleComponentDemo /> */}

    <CarDemo />

  </>

)


//render(đối số): truyền 1 đối tương 
// bọc trong 1 thẻ cha (div), thẻ fragment (<> </>) 
// tạo hàm (tham số): parameter 
// gọi hàm (giá trị truyền vào là đối số) argument