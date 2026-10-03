import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const DemoFormikYup = () => {

    // tạo đối tượng formik để quản lý form
    // B1: tạo đối tượng giá trị ban đầu của form: initialValues tương đương state ban đầu của form
    //B2: binding data lên UI
    // B3: thêm sự kiện handleChange để nhận data đang được nhập
    //B4: thêm sự kiện handleSubmit để nhận data khi click button
    const useFormikLogin = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            fullname: Yup.string().required('Fullname không để trống'),
            email: Yup.string().required('Email không để trống').email('Email chưa đúng định dạng - ví dụ: example@gmail.com'),
            password: Yup.string().required('Password không để trống').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/, 'Mật khẩu chưa đúng định dạng')
        }),
        onSubmit: (values) => {
            console.log("khi submit", values) // giá trị nhập từ form sau khi user click button
        }
    });


  return (
      <div className='container'>
          <h2>DemoFormikYup</h2>
          <form className='w-50'  onSubmit={useFormikLogin.handleSubmit}>
              <div className="mb-3">

                  <label htmlFor="fullname" className="form-label">FullName</label>
                  <input type="text" className="form-control" id="fullname" name='fullname' value={useFormikLogin.values.fullname} onInput={useFormikLogin.handleChange} />
                  <p className='text-danger'>
                      {useFormikLogin.errors.fullname}
                  </p>

              </div>
              <div className="mb-3">

                  <label htmlFor="email" className="form-label">Email</label>
                  <input dataType="email" type="email" className="form-control" id="email" name='email' value={useFormikLogin.values.email}  onInput={useFormikLogin.handleChange} />
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

export default DemoFormikYup