import donHangServices from "../services/donHangServices"


let handleGetAllDonHangsByIdKhachHang = async (req, res) => {
    let id = req.query.khachHangID;
    let donhangs = await donHangServices.getAllDonHangsByIdKhachHang(id)

    if(!id) {
        return res.status(200).json( {
            errCode: 1,
            errMessage: 'Missing required parameters',
            donhangs: []
        })
    }

    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        donhangs
    })
}

let handleGetAllChiTietDonHangsByIdDonHang = async (req, res) => {
    let id = req.query.donHangID;
    let chitietdonhangs = await donHangServices.getAllChiTietDonHangsByIdDonHang(id)

    if(!id) {
        return res.status(200).json( {
            errCode: 1,
            errMessage: 'Missing required parameters',
            chitietdonhangs: []
        })
    }

    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        chitietdonhangs
    })
}

let handleCreateNewDonHang = async (req, res) => {
    let message = await donHangServices.createNewDonHang(req.body)
    return res.status(200).json( {
        errMessage: message
    })
}

let handleEditDonHang = async (req, res) => {
    let data = req.body
    let message = await donHangServices.updateDonHang(data)
    return res.status(200).json( {
        errMessage: message
    })
}

let handleCreateNewChiTietDonHang = async (req, res) => {
    let message = await donHangServices.createNewChiTietDonHang(req.body)
    return res.status(200).json( {
        errMessage: message
    })
}

let handleCreateNewChiTietTinhTrangDonHang = async (req, res) => {
    let message = await donHangServices.createNewChiTietTinhTrangDonHang(req.body)
    return res.status(200).json( {
        errMessage: message
    })
}

let handleEditChiTietTinhTrangDonHang = async (req, res) => {
    let data = req.body
    let message = await donHangServices.updateChiTietTinhTrangDonHang(data)
    return res.status(200).json( {
        errMessage: message
    })
}

let handleGetAllDonHangsByIdNhaCungCap = async (req, res) => {
    let nhaCungCapId = req.query.nhaCungCapId;
    let donhangs = await donHangServices.getAllDonHangsByIdNhaCungCap(nhaCungCapId)

    if(!nhaCungCapId) {
        return res.status(200).json( {
            errCode: 1,
            errMessage: 'Missing required parameters',
            donhangs: []
        })
    }

    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        donhangs
    })
}

module.exports = {
    handleGetAllDonHangsByIdKhachHang: handleGetAllDonHangsByIdKhachHang,
    handleGetAllChiTietDonHangsByIdDonHang: handleGetAllChiTietDonHangsByIdDonHang,
    handleCreateNewDonHang: handleCreateNewDonHang,
    handleCreateNewChiTietDonHang: handleCreateNewChiTietDonHang,
    handleCreateNewChiTietTinhTrangDonHang: handleCreateNewChiTietTinhTrangDonHang,
    handleEditChiTietTinhTrangDonHang: handleEditChiTietTinhTrangDonHang,
    handleGetAllDonHangsByIdNhaCungCap: handleGetAllDonHangsByIdNhaCungCap,
    handleEditDonHang: handleEditDonHang
}