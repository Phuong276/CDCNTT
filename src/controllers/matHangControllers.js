import matHangServices from "../services/matHangServices"

let handleGetAllMatHangs = async (req, res) => {
    let idMatHang = req.query.idMatHang;
    let mathangs = await matHangServices.getAllMatHangs(idMatHang);

    if(!idMatHang) {
        return res.status(200).json( {
            errCode: 1,
            errMessage: 'Missing required parameters',
            mathangs: []
        })
    }

    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        mathangs
    })
}

let handleGetAllMatHangsByIdGioHang = async (req, res) => {
    let id = req.query.gioHangID;
    let mathangs = await matHangServices.getAllMatHangsByIdGioHang(id)

    if(!id) {
        return res.status(200).json( {
            errCode: 1,
            errMessage: 'Missing required parameters',
            mathangs: []
        })
    }

    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        mathangs
    })
}

let handleCreateNewMatHang = async (req, res) => {
    let message = await matHangServices.createNewMatHang(req.body)
    return res.status(200).json( {
        errMessage: message
    })
}


let handleDeleteMatHang = async (req, res) => {
    if(!req.body.id) {
        return res.status(200).json( {
            errCode: 1,
            errMessage: "Missing requid parameters"
        })
    }
    let message = await matHangServices.deleteMatHang(req.body.id)
    return res.status(200).json( {
        errMessage: message
    })
}

let handleEditMatHang = async (req, res) => {
    let data = req.body
    let message = await matHangServices.updateMatHang(data)
    return res.status(200).json( {
        errMessage: message
    })
}

let handleCreateNewChiTietMatHang = async (req, res) => {
    let message = await matHangServices.createNewChiTietMatHang(req.body)
    return res.status(200).json( {
        errMessage: message
    })
}

let handleGetAllChiTietMatHangsByIdMatHang = async (req, res) => {
    let id = req.query.matHangID;
    let chitietmathangs = await matHangServices.getAllChiTietMatHangsByIdMatHang(id)

    if(!id) {
        return res.status(200).json( {
            errCode: 1,
            errMessage: 'Missing required parameters',
            chitietmathangs: []
        })
    }

    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        chitietmathangs
    })
}

let handleGetAllHinhAnhMatHangsByIdMatHang = async (req, res) => {
    let id = req.query.matHangID;
    let hinhanhs = await matHangServices.getAllHinhAnhMatHangsByIdMatHang(id)

    if(!id) {
        return res.status(200).json( {
            errCode: 1,
            errMessage: 'Missing required parameters',
            hinhanhs: []
        })
    }

    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        hinhanhs
    })
}

let handleCreateNewHinhAnhMatHang = async (req, res) => {
    let message = await matHangServices.createNewHinhAnhMatHang(req.body)
    return res.status(200).json( {
        errMessage: message
    })
}

let handleGetAllDanhMucs = async (req, res) => {
    let danhmucs = await matHangServices.getAllDanhMucs();

    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        danhmucs
    })
}

let handleGetAllMatHangsByIdDanhMuc = async (req, res) => {
    let id = req.query.danhMucID;
    let mathangs = await matHangServices.getAllMatHangsByIdDanhMuc(id)
    if(!id) {
        return res.status(200).json( {
            errCode: 1,
            errMessage: 'Missing required parameters',
            mathangs: []
        })
    }

    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        mathangs
    })
}

let handleGetNhaCungCapByMatHang = async (req, res) => {
    let idMatHang = req.query.idMatHang;
    let nhacungcap = await matHangServices.getNhaCungCapByIdMatHang(idMatHang);
    if(!idMatHang) {
        return res.status(200).json( {
            errCode: 1,
            errMessage: 'Missing required parameters',
            nhacungcap: []
        })
    }
    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        nhacungcap
    })
}

let handleGetAVGRatingMatHangById = async (req, res) => {
    let idMatHang = req.query.idMatHang;
    let avgrating = await matHangServices.getAVGRatingMatHangById(idMatHang);
    if(!idMatHang) {
        return res.status(200).json( {
            errCode: 1,
            errMessage: 'Missing required parameters',
            avgrating: []
        })
    }
    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        avgrating
    })
}

let handleGetMatHangsBySearch = async (req, res) => {
    let search = req.query.search;
    let mathangs = await matHangServices.getMatHangsBySearch(search);

    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        mathangs
    })
}

let handleGetAllMatHangsByIdNhaCungCap = async (req, res) => {
    let id = req.query.nhaCungCapId;
    let mathangs = await matHangServices.getAllMatHangsByIdNhaCungCap(id)
    if(!id) {
        return res.status(200).json( {
            errCode: 1,
            errMessage: 'Missing required parameters',
            mathangs: []
        })
    }

    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        mathangs,
        total: mathangs.length
    })
}

let handleGetAllDanhMucsByIdNhaCungCap = async (req, res) => {
    let id = req.query.nhaCungCapId;
    let mathangs = await matHangServices.getAllDanhMucsByIdNhaCungCap(id)
    if(!id) {
        return res.status(200).json( {
            errCode: 1,
            errMessage: 'Missing required parameters',
            mathangs: []
        })
    }

    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        mathangs
    })
}

let handleGetAllMatHangsByIdNhaCungCapAndIdDanhMuc = async (req, res) => {
    let nhaCungCapId = req.query.nhaCungCapId;
    let danhMucId = req.query.danhMucId;
    if(!nhaCungCapId || !danhMucId) {
        return res.status(200).json( {
            errCode: 1,
            errMessage: 'Missing required parameters',
            mathangs: []
        })
    }
    let mathangs = await matHangServices.getAllMatHangsByIdNhaCungCapAndIdDanhMuc(nhaCungCapId,danhMucId)
    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        mathangs
    })
}

let handleGetAVGRatingNhaCungCapById = async (req, res) => {
    let id = req.query.nhaCungCapId;
    if(!id) {
        return res.status(200).json( {
            errCode: 1,
            errMessage: 'Missing required parameters',
            avgNCC: []
        })
    }
    let avgNCC = await matHangServices.getAVGRatingNhaCungCapById(id)
    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        avgNCC,
    })
}

module.exports = {
    handleGetAllMatHangs: handleGetAllMatHangs,
    handleGetAllMatHangsByIdGioHang: handleGetAllMatHangsByIdGioHang,
    handleCreateNewMatHang: handleCreateNewMatHang,
    handleDeleteMatHang: handleDeleteMatHang,
    handleEditMatHang: handleEditMatHang,
    handleCreateNewChiTietMatHang: handleCreateNewChiTietMatHang,
    handleGetAllChiTietMatHangsByIdMatHang: handleGetAllChiTietMatHangsByIdMatHang,
    handleGetAllHinhAnhMatHangsByIdMatHang: handleGetAllHinhAnhMatHangsByIdMatHang,
    handleCreateNewHinhAnhMatHang: handleCreateNewHinhAnhMatHang,
    handleGetAllDanhMucs: handleGetAllDanhMucs,
    handleGetAllMatHangsByIdDanhMuc: handleGetAllMatHangsByIdDanhMuc,
    handleGetNhaCungCapByMatHang: handleGetNhaCungCapByMatHang,
    handleGetAVGRatingMatHangById: handleGetAVGRatingMatHangById,
    handleGetMatHangsBySearch: handleGetMatHangsBySearch,
    handleGetAllMatHangsByIdNhaCungCap: handleGetAllMatHangsByIdNhaCungCap,
    handleGetAllDanhMucsByIdNhaCungCap: handleGetAllDanhMucsByIdNhaCungCap,
    handleGetAllMatHangsByIdNhaCungCapAndIdDanhMuc: handleGetAllMatHangsByIdNhaCungCapAndIdDanhMuc,
    handleGetAVGRatingNhaCungCapById: handleGetAVGRatingNhaCungCapById
}