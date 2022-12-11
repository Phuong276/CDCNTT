import express from "express"
import mauSacControllers from "../controllers/mauSacControllers"
import matHangControllers from "../controllers/matHangControllers"
import danhGiaControllers from "../controllers/danhGiaControllers"
import donHangControllers from "../controllers/donHangControllers"
import userControllers from "../controllers/userControllers"

let router =express.Router()

let initWebRoutes = (app) => {
    router.get("/", mauSacControllers.getHomePage)

    router.get('/api/get-mausac-by-id', mauSacControllers.handleGetMauSacById)
    router.get('/api/get-kichco-by-id', mauSacControllers.handleGetKichCoById)
    router.get('/api/get-mathangs' ,matHangControllers.handleGetAllMatHangs)
    router.get('/api/get-danhmucs', matHangControllers.handleGetAllDanhMucs)
    router.get('/api/get-all-mathangs-by-id-giohang',matHangControllers.handleGetAllMatHangsByIdGioHang)
    router.get('/api/get-all-mathangs-by-id-danhmuc',matHangControllers.handleGetAllMatHangsByIdDanhMuc)
    router.get('/api/get-all-mathangs-by-id-nhacungcap',matHangControllers.handleGetAllMatHangsByIdNhaCungCap)
    router.get('/api/get-all-chi-tiet-mathangs-by-id-mathang',matHangControllers.handleGetAllChiTietMatHangsByIdMatHang)
    router.get('/api/get-all-hinh-anh-mathangs-by-id-mathang',matHangControllers.handleGetAllHinhAnhMatHangsByIdMatHang)
    router.post('/api/create-new-mat-hang', matHangControllers.handleCreateNewMatHang)
    router.delete('/api/delete-mat-hang',matHangControllers.handleDeleteMatHang)
    router.put('/api/update-mat-hang', matHangControllers.handleEditMatHang)
    router.post('/api/create-new-chi-tiet-mat-hang', matHangControllers.handleCreateNewChiTietMatHang)
    router.post('/api/create-new-hinh-anh-mat-hang', matHangControllers.handleCreateNewHinhAnhMatHang)
    router.get('/api/get-nhacungcap-by-id-mathang', matHangControllers.handleGetNhaCungCapByMatHang)
    router.get('/api/get-avg-rating-by-id-mathang', matHangControllers.handleGetAVGRatingMatHangById)
    router.get('/api/get-mathangs-by-search', matHangControllers.handleGetMatHangsBySearch)
    router.get('/api/get-danhmucs-by-id-nhacungcap', matHangControllers.handleGetAllDanhMucsByIdNhaCungCap)
    router.get('/api/get-all-mathangs-by-id-nhacungcap-and-id-danhmuc',matHangControllers.handleGetAllMatHangsByIdNhaCungCapAndIdDanhMuc)
    router.get('/api/get-avg-rating-nhacungcap',matHangControllers.handleGetAVGRatingNhaCungCapById)

    router.get('/api/get-all-danhgias-by-id-mathang',danhGiaControllers.handleGetAllDanhGiasByIdMatHang)
    router.post('/api/create-danh-gia-by-id-mat-hang-khach-hang', danhGiaControllers.handleCreateNewDanhGia)
    router.get('/api/get-all-hinhanh-danhgias-by-id-danhgia',danhGiaControllers.handleGetAllHinhAnhDanhGiasByIdDanhGia)
    
    router.get('/api/get-all-donhangs-by-id-khachhang', donHangControllers.handleGetAllDonHangsByIdKhachHang)
    router.get('/api/get-all-chi-tiet-donhangs-by-id-donhang', donHangControllers.handleGetAllChiTietDonHangsByIdDonHang)
    router.post('/api/create-new-don-hang', donHangControllers.handleCreateNewDonHang)
    router.post('/api/create-new-chi-tiet-don-hang', donHangControllers.handleCreateNewChiTietDonHang)
    router.post('/api/create-new-chi-tiet-tinh-trang-don-hang', donHangControllers.handleCreateNewChiTietTinhTrangDonHang)
    router.put('/api/update-chi-tiet-tinh-trang-don-hang', donHangControllers.handleEditChiTietTinhTrangDonHang)
    router.get('/api/get-all-donhangs-by-id-nhacungcap', donHangControllers.handleGetAllDonHangsByIdNhaCungCap)
    router.put('/api/update-don-hang', donHangControllers.handleEditDonHang)

    router.post('/api/create-khachhang', userControllers.handleCreateNewKhachHang)
    router.post('/api/create-nhacungcap', userControllers.handleCreateNewNhaCungCap)
    router.post('/api/check-login-khachhang', userControllers.handleCheckLoginKH)
    router.post('/api/check-login-nhacungcap', userControllers.handleCheckLoginNCC)
    router.get('/api/get-khachhang-by-id', userControllers.handleGetKhachHangById)
    router.get('/api/get-nhacungcap-by-id', userControllers.handleGetNhaCungCapById)

    return app.use("/", router)
}

module.exports = initWebRoutes