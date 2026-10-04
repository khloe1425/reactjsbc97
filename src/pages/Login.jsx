import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  //useNavigate: giúp chuyển hướng trang theo điều kiện
  /**
   * Login thành công => profile thông tin người dùng
   * Ngược lại, thất bị bại => Fotgot Password
   */

  //Hook: khai báo ở phía trên đầu mới đem đi xài, không đường phép dùng trực tiếp useNavigate trong các hàm
  const navigate = useNavigate();

  const useFormikLogin = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email không để trống').email('Email chưa đúng định dạng - ví dụ: example@gmail.com'),
      password: Yup.string().required('Password không để trống').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/, 'Mật khẩu chưa đúng định dạng')
    }),
    onSubmit: (values) => {
      if (values.email === "test@gmail.com" && values.password === "Test@123") {
        console.log("Login thành công")
        navigate("/profile")


      } else {
        console.log("Login thất bại")
        // navigate("/forgot-password") // lưu lịch sử duyệt web
        // không muốn lưu lịch sử duyệt web 
        // navigate("/forgot-password", { replace: true })

        // gửi data sang trang forgot-password
        
        navigate("/forgot-password",{
          state: {
            email: values.email,
          }
        }) 


      }
    }
  });


  return (
    <div className='container'>
      <h2>Demo useNavigate</h2>
      <form className='w-50' onSubmit={useFormikLogin.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input dataType="email" type="email" className="form-control" id="email" name='email' value={useFormikLogin.values.email} onInput={useFormikLogin.handleChange} />
          <p className='text-danger'>
            {useFormikLogin.errors.email}
          </p>

        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input dataType="password" type="password" className="form-control" id="password" name='password' value={useFormikLogin.values.password} onInput={useFormikLogin.handleChange} />
          <p className='text-danger'>
            {useFormikLogin.errors.password}
          </p>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default Login