import ratingServices from "../services/ratingServices"
require("dotenv").config()

let getHomePage = async (req, res) => {
    try {
        return res.render("homePage.ejs", {
        })
    } catch(e) {
        console.log(e)
    }
}

let handleGetAllRatingByIdTeacher = async (req, res) => {
    let id = req.query.teacherId;
    let mathangs = await ratingServices.getAllRatingByIdTeacher(id)
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

let handleCreateNewRating = async (req, res) => {
    let rating = await ratingServices.createNewRating(req.body)
    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        rating
    })
}

module.exports = {
    handleGetAllRatingByIdTeacher: handleGetAllRatingByIdTeacher,
    getHomePage: getHomePage,
    handleCreateNewRating: handleCreateNewRating
}