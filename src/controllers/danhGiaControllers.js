import danhGiaServices from "../services/danhGiaServices"

let handleGetAllDanhGiasByIdMatHang = async (req, res) => {
    let id = req.query.matHangId;
    let danhgias = await danhGiaServices.getAllDanhGiasByIdMatHang(id)

    if(!id) {
        return res.status(200).json( {
            errCode: 1,
            errMessage: 'Missing required parameters',
            danhgias: []
        })
    }

    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        danhgias,
        total: danhgias.length
    })
}

let handleCreateNewDanhGia = async (req, res) => {
    let message = await danhGiaServices.createNewDanhGia(req.body)
    return res.status(200).json( {
        errMessage: message
    })
}

let handleGetAllHinhAnhDanhGiasByIdDanhGia = async (req, res) => {
    let id = req.query.danhgiaId;
    if(!id) {
        return res.status(200).json( {
            errCode: 1,
            errMessage: 'Missing required parameters',
            hinhanhdanhgias: []
        })
    }
    let hinhanhdanhgias = await danhGiaServices.getAllHinhAnhDanhGiasByIdDanhGia(id)
    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        hinhanhdanhgias,
    })
}

module.exports = {
    handleGetAllDanhGiasByIdMatHang: handleGetAllDanhGiasByIdMatHang,
    handleCreateNewDanhGia: handleCreateNewDanhGia,
    handleGetAllHinhAnhDanhGiasByIdDanhGia: handleGetAllHinhAnhDanhGiasByIdDanhGia
}