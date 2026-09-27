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
    email: '',
    password: ''
  })

  console.log("component render", accountUser)

  const handleInput = (e) => {
    let { value, name } = e.target
    setAccount({
      ...accountUser,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // chặn sự kiện load trang khi submit form
    console.log("khi submit", accountUser) // giá trị nhập từ form sau khi user click button

  }





  return (
    <div className='container'>
      <h2>ReactFormDemo</h2>
      <form className='w-50' onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name='email' value={accountUser.email} onInput={(e) => {
            //xảy ra khi người dùng nhập vào input
            //lấy giá trị nhập thông qua tham số event (e, evt, event) => gọi thuộc tính target (đại diện cho thẻ đang được nhâp liệu)
            // console.log(e.target)
            // let valueEmail = e.target.value
            let { value, name } = e.target

            //? spread operator :  
            //? Tính năng 1: {...copy thuộc tính cũ, thuộc tính mới} => thêm một thuộc tính nữa cho đối tượng .
            // // Ví dụ: {...accountUser, fullName:value} => {email:value, pass: value, fullName:value}
            //? Tính năng 2: cập nhật giá trị {...copy thuộc tính cũ, thuộc tính cũ nhưng gán giá trị mới}
            //  // Ví dụ: {...accountUser, email:valueNew} => {email:valueNew, pass: value}

            //Object literal => sử dụng được giá trị của biến thành tên thuộc tính
            // setAccount({
            //   ...accountUser,
            //   email: value
            // })
            setAccount({
              ...accountUser,
              [name]: value
            })

          }} />

        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          {/* <input type="password" className="form-control" id="password" name='password' value={accountUser.password} onInput={(e) => {
            handleInput(e)
          }} /> */}
          <input type="password" className="form-control" id="password" name='password' value={accountUser.password} onInput={handleInput} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default ReactFormDemo