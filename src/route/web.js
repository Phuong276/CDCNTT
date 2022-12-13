import express from "express"
import ratringControllers from "../controllers/ratingControllers"
import userControllers from "../controllers/userControllers"

let router = express.Router()

let initWebRoutes = (app) => {
    router.get("/", ratringControllers.getHomePage)

    router.get('/api/ratings', ratringControllers.handleGetAllRatingByIdTeacher)
    router.post('/api/ratings', ratringControllers.handleCreateNewRating)

    router.get('/api/teachers', userControllers.getAllTeacher)
    router.post('/api/teachers', userControllers.handleCreateNewTeacher)
    router.post('/api/students', userControllers.handleCreateNewStudent)
    router.post('/api/teachers/login', userControllers.handleCheckLoginTeacher)
    router.post('/api/students/login', userControllers.handleCheckLoginStudent)
    router.get('/api/get-teacher-by-id-teacher', userControllers.handleGetTeacherByIdTeacher)
    router.put('/api/update-student', userControllers.handleUpdateStudent)
    router.put('/api/update-teacher', userControllers.handleUpdateTeacher)
    router.delete('/api/delete-teacher', userControllers.handleDeleteTeacher)
    router.delete('/api/delete-student', userControllers.handleDeleteStudent)
    router.get('/api/get-student-by-id-student', userControllers.handleGetStudentByIdStudent)


    return app.use("/", router)
}

module.exports = initWebRoutes