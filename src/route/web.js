import express from "express"
import ratringControllers from "../controllers/ratingControllers"
import userControllers from "../controllers/userControllers"
import teacherControllers from '../controllers/teacherController'

let router =express.Router()

let initWebRoutes = (app) => {
    router.get("/", ratringControllers.getHomePage)

    router.get('/api/ratings', ratringControllers.handleGetAllRatingByIdTeacher)
    router.post('/api/ratings', ratringControllers.handleCreateNewRating)

    router.get('/api/teachers', teacherControllers.getAllTeacher)
    router.post('/api/teachers', userControllers.handleCreateNewTeacher)
    router.post('/api/students', userControllers.handleCreateNewStudent)
    router.post('/api/teachers/login', userControllers.handleCheckLoginTeacher)
    router.post('/api/students/login', userControllers.handleCheckLoginStudent)
    router.get('/api/get-teacher-by-id-teacher', userControllers.handleGetTeacherByIdTeacher)


    return app.use("/", router)
}

module.exports = initWebRoutes