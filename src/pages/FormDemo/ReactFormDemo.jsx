import React, { useState } from 'react'

const ReactFormDemo = () => {
  /**
   * Code validate thuần với reactjs
   * + nhận hoặc truyền dữ liệu lên các control form => thuộc tính value và data binding
   * + các dữ liệu từ form hoặc dữ liệu lưu vào state
   * + xử lý sự kiện nhập cho các control form onChange, onInput
   */

  //kiểu dữ liệu của state: đối tượng tài khoản của user
  const [accountUser, setAccount] = useState({
    fullname: '',
    email: '',
    password: ''
  })

  //lưu các thông báo kiểm tra lỗi vào state => hiển thị lên UI sau khi kiểm tra
  const [errorAccount, setErrorAccount] = useState({
    fullname: '',
    email: '',
    password: ''
  })


  console.log("component render account", accountUser)
  console.log("component render error", errorAccount)


  const handleInput = (e) => {
    let { value, name } = e.target
    let dataType = e.target.getAttribute('dataType') // lấy ra kiểu dữ liệu tự định nghĩa của dev
    //? Tạo đối tượng dữ liệu từ người dùng nhập vào form => lưu vào state accountUser
    let newAccount = { ...accountUser, [name]: value }
    // setAccount({
    //   ...accountUser,
    //   [name]: value
    // })

    //validate dữ liệu nhập vào

    let newError = { ...errorAccount }
    //? kiểm tra dữ liệu rỗng
    // "  email   ".trim() => "email" => loại bỏ khoảng trắng đầu và cuối chuỗi

    if (newAccount[name].trim() === '') {
      //bị lỗi
      newError[name] = `${name} không được để trống`

    } else {
      // có nhập liệu => kiểm tra tiếp định dạng đúng không
      newError[name] = ''
      //? kiểm tra dữ liệu nhập có đúng định dạng không
      //? dataType (dữ liệu tự định nghĩa của dev): email, password, phone, number, text
      switch (dataType) {
        case 'email': {
          let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          //test(), match() => true/false
          if (accountUser.email.match(regexEmail)) {
            //đúng định dạng
            newError.email = ''
          } else {
            //! bị lỗi
            newError.email = 'Email chưa đúng định dạng - ví dụ:email@domain.com'
          }

        }
          break;
        case 'password': {
          let regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/;
          //test(), match() => true/false
          if (accountUser.password.match(regexPass)) {
            //đúng định dạng
            newError.password = ''
          } else {
            //! bị lỗi
            newError.password = 'Mật khẩu chưa đúng định dạng - phải chứa ít nhất 6-15 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt'
          }

        }

          break;
        default:
          break;
      }

    }

    //cập nhật lại state accountUser => render lại UI
    setAccount(newAccount)
    setErrorAccount(newError)


  }

  const handleSubmit = (e) => {
    e.preventDefault(); // chặn sự kiện load trang khi submit form
    // console.log("khi submit", accountUser) // giá trị nhập từ form sau khi user click button
    let isValid = true;

    //!nếu user không kích hoạt sự kiện onInput / onChange
    for (let key in accountUser) {
      if (accountUser[key].trim() === '') {
        isValid = false;
        return;
      }
    }
    //!Chỉ gửi dữ liệu khi tất cả data đều hợp lệ => kiểm tra errorAccount   

    for (let key in errorAccount) {
      if (errorAccount[key] !== '') {
        //nếu có một thuộc tính đang chứa nội dung thông báo lỗi
        isValid = false;
        return;
      }
    }

    if (isValid) {
      console.log("Dữ liệu hợp lệ, gửi lên server", accountUser)
    }

  }





  return (
    <div className='container'>
      <h2>ReactFormDemo</h2>
      <form className='w-50' onSubmit={handleSubmit}>
        <div className="mb-3">

          <label htmlFor="fullname" className="form-label">FullName</label>
          <input type="text" className="form-control" id="fullname" name='fullname' value={accountUser.fullname} onInput={handleInput} />
          <p className='text-danger'>{errorAccount.fullname}</p>

        </div>
        <div className="mb-3">

          <label htmlFor="email" className="form-label">Email</label>
          <input dataType="email" type="email" className="form-control" id="email" name='email' value={accountUser.email} onInput={handleInput} />
          <p className='text-danger'>{errorAccount.email}</p>

        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          {/* <input type="password" className="form-control" id="password" name='password' value={accountUser.password} onInput={(e) => {
            handleInput(e)
          }} /> */}
          <input dataType="password" type="password" className="form-control" id="password" name='password' value={accountUser.password} onInput={handleInput} />
          <p className='text-danger'>{errorAccount.password}</p>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default ReactFormDemo