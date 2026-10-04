import React from 'react'
import { useLocation } from 'react-router-dom';
const ForgotPass = () => {
  // useLocation: lưu data vào ram của máy tính/ trình duyệt
  const location = useLocation();


  return (
    <div>ForgotPass
      <p>Email: {location.state?.email}</p>
    </div>
    
  )
}

export default ForgotPass