import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



const EditProduct = () => {
//B1: get ID sản phẩm từ url => lấy được thông tin chi tiết của sản phẩm
//B2 : Hiển thị thông tin chi tiết lên form
//B3: Lấy thông tin update mới từ form
//B4: call API để update dữ liệu

  const params = useParams() //get ID sản phẩm từ url
  const id = params.id;
  const navigate = useNavigate()

  const productInfo = useFormik({
    //giúp khỏi tạo lại giá trị ban đầu của formik sau khi call api lấy thông tin chi tiết sản phẩm
    // Component khởi tạo => binding initialValues lên form => call API get thông tin chi tiết sp (by id) => enableReinitialize true thì formik gán lại giá trị initialValues , render lại UI của form
    enableReinitialize:true,
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
      //Khi user nhấn button Cập nhật để đưa dữ liệu cần update xuống BE
      // values dữ liệu input từ form
      console.log(values)

      //gọi API cập nhật sản phẩm
      try {
        // put(urlAPI , input)
        const res = await axios.put('https://apistore.cybersoft.edu.vn/api/Product/updateProduct', values)
        console.log(res.data)
        //nếu thành công
        alert('Cập nhật sản phẩm thành công')
        //chuyển hướng về tranh danh sách 
        navigate('/admin/products')

      } catch (error) {
        alert('Cập nhật sản phẩm thất bại')
        console.log(error)
      }

     
    }
  })


  const getProductDetailAPI = async () => { 
    try {
      const res = await axios.get(`https://apistore.cybersoft.edu.vn/api/Product/getid?id=${id}`)
      console.log(res.data.content)
      // gán giá trị mới vào state values của formik
      productInfo.setValues(res.data.content)


    } catch (error) {
      console.log(error)
    }
   }

   //gọi API khi giá trị id thay đổi
   useEffect(() => { 
    getProductDetailAPI()
    }, [id])

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white p-3">
              <h4 className="mb-0">Thông tin chi tiết sản phẩm</h4>
            </div>
            <div className="card-body p-4">
              <form onSubmit={productInfo.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="id" className="form-label">
                    ID sản phẩm
                  </label>
                  <input type="text" className="form-control" id="id" name="id" placeholder="Nhập ID sản phẩm" disabled
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
                    Cập nhật sản phẩm
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

export default EditProduct