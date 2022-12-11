import mauSacServices from "../services/mauSacServices"

let getHomePage = async (req, res) => {
    try {
        return res.render("homePage.ejs", {
        })
    } catch(e) {
        console.log(e)
    }
}

let handleGetMauSacById = async (req, res) => {
    let id = req.query.mauSacId;
    let mausac = await mauSacServices.getMauSacByIdMauSac(id)
    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Get success',
        mausac
    })
}
let handleGetKichCoById = async (req, res) => {
    let id = req.query.kichCoId;
    let mausac = await mauSacServices.getKichCocByIdKichCo(id)
    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Get success',
        mausac
    })
}
module.exports = {
    handleGetMauSacById: handleGetMauSacById,
    handleGetKichCoById: handleGetKichCoById,
    getHomePage: getHomePage
}