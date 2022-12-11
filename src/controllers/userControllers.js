import userServices from "../services/userServices"
require("dotenv").config()
const jwt = require('jsonwebtoken')

let handleCheckToken = (token, next) => {
        let decoded = jwt.verify(token, process.env.JWT_SECRET)
        if(decoded) {
            next
        }
}

let handleCreateNewKhachHang = async (req, res) => {
    let khachhang = await userServices.createNewKhachHang(req.body)
    let check = await userServices.checkTenNguoiDungKH(req.body.tenNguoiDung)
    if(check) {
        return res.status(200).json( {
            errCode: 0,
            errMessage: 'Ten khach hang da ton tai',
        })
    }
    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        khachhang
    })
}
let handleCreateNewNhaCungCap = async (req, res) => {
    let nhacungcap = await userServices.createNewNhaCungCap(req.body)
    let check = await userServices.checkTenNguoiDungNCC(req.body.tenNguoiDung)
    if(check) {
        return res.status(200).json( {
            errCode: 0,
            errMessage: 'Ten nha cung cap da ton tai',
        })
    }
    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        nhacungcap
    })
}

let handleCheckLoginKH = async (req, res) => {
    let matKhau = req.body.matKhau
    let tenNguoiDung = req.body.tenNguoiDung
    if(!matKhau || !tenNguoiDung) {
        return res.status(500).json( {
            errCode: 1,
            message: 'Missing inputs parameter!'
        })
    }
    let userData = await userServices.checkLoginKhachHang(tenNguoiDung, matKhau)
    return res.status(200).json( {
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user,
        token: userData.token
    })
}

let handleCheckLoginNCC = async (req, res) => {
    let matKhau = req.body.matKhau
    let tenNguoiDung = req.body.tenNguoiDung
    if(!matKhau || !tenNguoiDung) {
        return res.status(500).json( {
            errCode: 1,
            message: 'Missing inputs parameter!'
        })
    }
    let userData = await userServices.checkLoginNhaCungCap(tenNguoiDung, matKhau)
    return res.status(200).json( {
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user,
        token: userData.token
    })
}


let handleGetKhachHangById = async (req, res, next) => {
    let id = req.query.khachHangId;
    let khachhang = await userServices.getKhachHangById(id)
    if(!id) {
        return res.status(200).json( {
            errCode: 1,
            errMessage: 'Missing required parameters',
            khachhang: []
        })
    }

    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        khachhang
    })
}


let handleGetNhaCungCapById = async (req, res) => {
    let id = req.query.NCCId;
    let khachhang = await userServices.getNhaCungCapById(id)
    if(!id) {
        return res.status(200).json( {
            errCode: 1,
            errMessage: 'Missing required parameters',
            khachhang: []
        })
    }

    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        khachhang
    })
}

module.exports = {
    handleCreateNewKhachHang: handleCreateNewKhachHang,
    handleCreateNewNhaCungCap: handleCreateNewNhaCungCap,
    handleCheckLoginKH: handleCheckLoginKH,
    handleCheckLoginNCC: handleCheckLoginNCC,
    handleGetKhachHangById: handleGetKhachHangById,
    handleGetNhaCungCapById: handleGetNhaCungCapById,
    handleCheckToken: handleCheckToken
}