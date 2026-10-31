import React from 'react'
import useRouting  from '../../customhooks/useRouting'
import useRedux from '../../customhooks/useRedux'


const DemoCustomHook = () => {

    //!Muốn sử dung các hook routing bắt buộc phải liệt kê khai báo cho từng component 
    //! Khai báo ở từng component
    // const location = useLocation();
    // const params = useParams()
    // const navigate = useNavigate()
    // const [searchParam, setSearchParam] = useSearchParams()

   //? lặp code => chuyển thành custom hook riêng => useRouting (đặt tên luôn bắt đầu cụm từ "use")

    const routing = useRouting()
    const { rootState, dispatch } = useRedux();

  return (
    <div className='container'>
          <h2>DemoCustomHook</h2> 
          <button className='btn btn-success' onClick={() => { 
            routing.navigate('/')
           }} > Back to Home </button>
          <p>Redux number reducer: {rootState.numberReducer}</p>
    </div>
  )
}

export default DemoCustomHook