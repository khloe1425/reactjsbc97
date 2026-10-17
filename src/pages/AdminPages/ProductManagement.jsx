import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const ProductManagement = () => {
  //Trang danh sách sản phẩm

  const [arrProduct, setArrProduct] = useState([])

  //hàm call api =>khai báo từ khóa async
  const getAllProductAPI = async () => {
    try {
      const res = await axios.get('https://apistore.cybersoft.edu.vn/api/Product')
      console.log(res.data.content)
      setArrProduct(res.data.content)

    } catch (error) {
      console.log(error)
    }
  }

  //call API khi component được khởi tạo, và gọi 1 lần duy nhất
  useEffect(() => {
    getAllProductAPI();
  }, [])


  return (
    <div className='container'>
      <h2>Product Management</h2>
      <NavLink className={'btn btn-success'} to={'/admin/products/create'}>Add new product</NavLink>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          
          {
            arrProduct.map((product) => {
              return <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <img style={{ width: '50px', height: '50px' }} src={product.image} alt="" />
                </td>
                <td>{product.name}</td>
                <td>{product.price} $</td>
                <td>
                  <NavLink to={`/admin/products/edit/${product.id}`} className={'btn btn-info'}>Edit</NavLink>
                  <button className='btn btn-danger'>Delete</button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>


    </div>
  )
}

export default ProductManagement