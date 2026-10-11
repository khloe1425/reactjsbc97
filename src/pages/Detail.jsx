import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

// B1: Truyền data (không bảo mật) lên url  (input) => khai báo tham số cho path, truyền data vào thuộc tính to của Navlink
// B2: Lấy data từ url xuống component => useParam lấy data từ url => // đưa xuống BE để get dữ liệu cần thiết sau khi có id sản phẩm 

// Tạo state cho dữ liệu lấy được từ BE => Xác định giá trị state , binding data từ sate
// Call api để lấy dữ liệu mới => set lại giá trị cho state để render dữ liệu mới từ BE lên UI

const Detail = () => {

  const params = useParams()

  const [productDetail, setProductDetail] = useState({})

  // https://apistore.cybersoft.edu.vn/api/Product/getbyid?id={id sản phẩm}

  // async: đặt ở hàm có  bất đồng bộ data (call API), await

  //Code gọi API
  const getDetail = async () => {
    try {
      //thành công
      // axios rút gọn, fetch()
      const res = await axios.get(`https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${params.id}`)
      // console.log(res)

      //set lại state 
      setProductDetail(res.data.content)

    } catch (error) {
      //thất bại
      console.log(error)
    }
  }

  useEffect(() => {
    //gọi lại API khi id thay đổi
    getDetail();
  }, [params.id]) // khai báo giá trị thay đổi vào tham số dependency

  return (
    <div className='product-page container'>
      <h2>Detail mã sản phẩm: {params.id}</h2>
      <div className="row g-4">
        {/* CỘT TRÁI: HÌNH ẢNH SẢN PHẨM */}
        <section className="col-12 col-md-5">
          <div className="card border-0 rounded-4 overflow-hidden">
            <div className="card-body p-3 p-lg-4">
              {/* Ảnh chính */}
              <img id="mainImage" src={productDetail.image} className="img-fluid w-100 rounded-3 border" alt="Máy sấy tóc LocknLock" />
              {/* Danh sách ảnh thumbnail */}
              <div className="d-flex gap-2 mt-3 pb-2 overflow-x-auto">

                {
                  productDetail.detaildetailedImages?.map((styleCSS) => {
                    return <button type="button" className="btn border border-primary border-3 p-1 flex-shrink-0" >
                      <img style={{ transform: styleCSS }} src={productDetail.image} width={64} height={64} alt="Ảnh 1" />
                    </button>

                  })
                }


              </div>
            </div>
            {/* Xem thêm ưu điểm */}
            <div className="border-top px-3 px-lg-4 py-3">
              <a href="#" className="text-decoration-none text-secondary d-flex align-items-center gap-2">
                <span className="text-primary fs-4">✦</span>
                <span>
                  Xem thêm
                  <strong className="text-dark">
                    Ưu điểm &amp; lưu ý của sản phẩm
                  </strong>
                </span>
                <span className="ms-auto fs-3">›</span>
              </a>
            </div>
          </div>
        </section>
        {/* CỘT PHẢI: THÔNG TIN SẢN PHẨM */}
        <section className="col-12 col-md-7">
          {/* Thông tin và giá sản phẩm */}
          <div className="card border-0 rounded-4 mb-4">
            <div className="card-body p-3 p-lg-4">
              {/* Nhãn thương hiệu và ưu đãi */}
              <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                <span className="badge rounded-pill bg-primary-subtle text-primary">
                  FREESHIP XTRA
                </span>
                <span className="badge rounded-pill bg-warning text-primary">
                  ◈ 30 NGÀY ĐỔI TRẢ
                </span>
                <span className="badge rounded-pill bg-primary-subtle text-primary">
                  ✓ CHÍNH HÃNG
                </span>
                <span>
                  Thương hiệu:
                  <a href="#" className="text-primary text-decoration-none">
                    LocknLock
                  </a>
                </span>
              </div>
              {/* Tên sản phẩm */}
              <h1 className="h3 fw-bold lh-base mb-3">
                {productDetail.name}
              </h1>
              <p className="text-secondary mb-3">
                Đã bán 6
              </p>
              {/* Giá sản phẩm */}
              <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                <span className="text-danger fw-bold fs-2">
                  {productDetail.price} $
                </span>

              </div>
              <p className="text-secondary mb-3">
                {productDetail.shortDescription}
              </p>

            </div>
          </div>
          {/* Banner khuyến mãi */}
          <div className="card border-0 rounded-0 mb-4">
            <div className="card-body p-3 p-lg-4">
              <div className="row align-items-center g-2">
                <div className="col">
                  <h2 className="h5 fw-bold text-primary mb-2">
                    ƯU ĐÃI ĐẾN 100K – ĐƠN ĐẦU TIÊN
                  </h2>
                  <p className="mb-0">
                    Giảm 50K + Freeship 50K |
                    Có sẵn trong ví khi đặt đơn trên TikiApp
                  </p>
                </div>
                <div className="col-auto text-center">
                  <span className="badge bg-primary fs-6">
                    BẠN MỚI
                    <span className="d-block text-warning fs-3">
                      100K*
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Thông tin vận chuyển */}
          <div className="card border-0 rounded-4">
            <div className="card-body p-3 p-lg-4">
              <h2 className="h4 fw-bold mb-4">
                Thông tin vận chuyển
              </h2>
              {/* Địa chỉ */}
              <div className="d-flex align-items-center justify-content-between gap-2 border-bottom pb-3">
                <span>
                  Giao đến Q. 1, P. Bến Nghé, Hồ Chí Minh
                </span>
                <a href="#" className="text-primary text-decoration-none">
                  Đổi
                </a>
              </div>
              {/* Giao nhanh */}
              <div className="py-3 border-bottom">
                <div className="fw-bold">
                  <span className="text-danger me-2">
                    NOW
                  </span>
                  Giao siêu tốc 2h
                </div>
                <p className="mb-0 mt-1">
                  Trước 17h hôm nay:
                  <span className="text-success">
                    Miễn phí
                  </span>
                  <del className="text-secondary small">
                    35.000₫
                  </del>
                </p>
              </div>
              {/* Giao tiêu chuẩn */}
              <div className="py-3 border-bottom">
                <div className="fw-bold">
                  <span className="text-secondary me-2">
                    🚚
                  </span>
                  Giao Thứ Tư
                </div>
                <p className="mb-0 mt-1">
                  Ngày 14/10:
                  <span className="text-success">
                    Miễn phí
                  </span>
                  <del className="text-secondary small">
                    16.500₫
                  </del>
                </p>
              </div>
              {/* Freeship */}
              <div className="pt-3">
                <p className="mb-0 fw-semibold">
                  <span className="text-primary fw-bold">
                    FREESHIP
                  </span>
                  <span className="text-success fw-bold">
                    XTRA
                  </span>
                  Freeship 15k đơn từ 45k,
                  Freeship 30k đơn từ 100k
                  <span className="text-secondary">ⓘ</span>
                </p>
              </div>
            </div>
          </div>

          <div className="card border-0 rounded-4">
            <div className="card-body p-3 p-lg-4">
              <h2 className="h4 fw-bold mb-4">
                Sản phẩm liên quan
              </h2>

              <div className="d-flex gap-2 mt-3 pb-2 overflow-x-auto">
                {
                  productDetail.relatedProducts?.map((product) => {
                    return <div className="col-3" key={product.id}>
                      <div className="card">
                        <img src={product.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text">{product.price}</p>

                          <NavLink to={`/detail/${product.id}`} className="btn btn-primary">Xem chi tiết</NavLink>
                        </div>
                      </div>

                    </div>
                  })
                }



              </div>

            </div>
          </div>


        </section>
      </div>




    </div>
  )
}

export default Detail