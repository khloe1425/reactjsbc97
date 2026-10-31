import React from 'react'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';

//Hàm trả về các khai báo của hook routing
const useRouting = () => {

    //Khai báo tập trung ở 1 chỗ
    const location = useLocation()
    const params = useParams();
    const navigate = useNavigate();
    const [searchParam, setSearchParam] = useSearchParams();

    return {
        location: location,
        params: params,
        navigate: navigate,
        searchParam: searchParam,
        setSearchParam: setSearchParam

    }
}

export default useRouting