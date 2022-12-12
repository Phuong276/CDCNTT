import express from "express"
import ratringControllers from "../controllers/ratingControllers"
import userControllers from "../controllers/userControllers"


let router =express.Router()

let initWebRoutes = (app) => {
    router.get("/", ratringControllers.getHomePage)

    router.get('/api/get-ratings-by-id-teacher', ratringControllers.handleGetAllRatingByIdTeacher)
    router.post('/api/create-rating', ratringControllers.handleCreateNewRating)


    router.post('/api/create-teacher', userControllers.handleCreateNewTeacher)
    router.post('/api/create-student', userControllers.handleCreateNewStudent)
    router.post('/api/check-login-teacher', userControllers.handleCheckLoginTeacher)
    router.post('/api/check-login-student', userControllers.handleCheckLoginStudent)
    router.get('/api/get-teacher-by-id-teacher', userControllers.handleGetTeacherByIdTeacher)
    router.put('/api/update-student', userControllers.handleUpdateStudent)

    return app.use("/", router)
}

module.exports = initWebRoutes