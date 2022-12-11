import express from "express"
import ratringControllers from "../controllers/ratringControllers"

let router =express.Router()

let initWebRoutes = (app) => {
    router.get("/", ratringControllers.getHomePage)

    router.get('/api/get-ratings-by-id-teacher', ratringControllers.handleGetAllRatingByIdTeacher)

    return app.use("/", router)
}

module.exports = initWebRoutes