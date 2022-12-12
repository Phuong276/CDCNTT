import express from "express"
import ratringControllers from "../controllers/ratingControllers"
import userControllers from "../controllers/userControllers"
import teacherControllers from "../controllers/teacherController"


let router =express.Router()

let initWebRoutes = (app) => {
    router.get("/", ratringControllers.getHomePage)

    router.get('/api/ratings', ratringControllers.handleGetAllRatingByIdTeacher)
    router.post('/api/rating', ratringControllers.handleCreateNewRating)

    router.get('/api/teacher', teacherControllers.getAllTeacher)
    router.post('/api/teacher', userControllers.handleCreateNewTeacher)
    router.post('/api/student', userControllers.handleCreateNewStudent)
    router.post('/api/teacher/login', userControllers.handleCheckLoginTeacher)
    router.post('/api/student/login', userControllers.handleCheckLoginStudent)


    return app.use("/", router)
}

module.exports = initWebRoutes