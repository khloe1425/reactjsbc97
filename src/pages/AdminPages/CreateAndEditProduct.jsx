import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useParams, useMatch, useNavigate } from 'react-router-dom'

// if(true) : true type boolean
// if(truthy: {}, [], "", number) => trả kết quả true
// if(falsy : null, NaN, undefined..) => trả kết quả false

const CreateAndEditProduct = () => {
  // Tối ưu dùng chung form cho 2 tính năng Thêm mới và Cập nhật sản phẩm
  const navigate = useNavigate()
  //useMatch kiểm tra path hiện tại có trùng với cấu trúc '/admin/product/:id'
  const match = useMatch('/admin/product/:id')
  //Nếu trùng => return object , ngược lại => return null
  console.log('useMatch', match)
  //ép giá trị truthy thành true
  // !{} => false , !false => true
  const isEdit = !!match  // true
  console.log('isEdit', isEdit)


  const productInfo = useFormik({
    enableReinitialize: isEdit,
    initialValues: {
      "id": 0,
      "name": "string",
      "price": 0,
      "description": "string",
      "shortDescription": "string",
      "quantity": 0,
      "imgLink": "string"
    },
    onSubmit: async (values) => {
      // values dữ liệu input từ form
      console.log(values)

      let urlAPI = 'https://apistore.cybersoft.edu.vn/api/Product/addNew';
      let method = 'post'
      if (isEdit) {
        //nếu là cập nhật thì đổi urlAPI và method tương ứng với update
        urlAPI = 'https://apistore.cybersoft.edu.vn/api/Product/updateProduct'
        method = 'put'
      }

      //gọi API thêm sản phẩm
      try {
        // post(urlAPI , input)
        const res = await axios[method](urlAPI, values)
        console.log(res.data)
        //nếu thành công
        alert('Lưu dữ liệu thành công')
        //chuyển hướng về tranh danh sách 
        navigate('/admin/products')

      } catch (error) {
        console.log(error)
        alert('Lưu dữ liệu thất bại')
      }


    }
  })

  const getProductDetailAPI = async () => {
    try {
      const res = await axios.get(`https://apistore.cybersoft.edu.vn/api/Product/getid?id=${match?.params?.id}`)
      console.log(res.data.content)
      // gán giá trị mới vào state values của formik
      productInfo.setValues(res.data.content)


    } catch (error) {
      console.log(error)
    }
  }

  //gọi API khi giá trị id thay đổi
  useEffect(() => {
    if (isEdit) {
      getProductDetailAPI()
    }

  }, [match?.params?.id])





  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white p-3">
              <h4 className="mb-0">Thêm hoặc cập nhật sản phẩm</h4>
            </div>
            <div className="card-body p-4">
              <form onSubmit={productInfo.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="id" className="form-label">
                    ID sản phẩm
                  </label>
                  <input type="text" className="form-control" id="id" name="id" placeholder="Nhập ID sản phẩm"
                  disabled={isEdit}
                    value={productInfo.values.id}
                    onInput={productInfo.handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Tên sản phẩm
                  </label>
                  <input type="text" className="form-control" id="name" name="name" placeholder="Nhập tên sản phẩm"
                    value={productInfo.values.name}
                    onInput={productInfo.handleChange} />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="price" className="form-label">
                      Giá sản phẩm
                    </label>
                    <input type="number" className="form-control" id="price" name="price" placeholder="Nhập giá sản phẩm"
                      value={productInfo.values.price}
                      onInput={productInfo.handleChange} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="quantity" className="form-label">
                      Số lượng
                    </label>
                    <input type="number" className="form-control" id="quantity" name="quantity" placeholder="Nhập số lượng"
                      value={productInfo.values.quantity}
                      onInput={productInfo.handleChange} />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="shortDescription" className="form-label">
                    Mô tả ngắn
                  </label>
                  <input type="text" className="form-control" id="shortDescription" name="shortDescription" placeholder="Nhập mô tả ngắn"
                    value={productInfo.values.shortDescription}
                    onInput={productInfo.handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Mô tả chi tiết
                  </label>
                  <textarea className="form-control" id="description" name="description" rows={4} placeholder="Nhập mô tả chi tiết sản phẩm"
                    value={productInfo.values.description}
                    onInput={productInfo.handleChange} />
                </div>
                <div className="mb-4">
                  <label htmlFor="imgLink" className="form-label">
                    Link hình ảnh
                  </label>
                  <input type="text" className="form-control" id="imgLink" name="imgLink" placeholder="https://example.com/image.jpg"
                    value={productInfo.values.imgLink}
                    onInput={productInfo.handleChange} />
                </div>
                <div className="d-flex justify-content-end gap-2">
                  <button type="submit" className="btn btn-primary">
                    Lưu sản phẩm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )


}

export default CreateAndEditProduct