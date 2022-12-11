import { reject, resolve } from "promise";
import db from "../models/index"

let getAllRatingByIdTeacher = (id_Teacher) => {
    return new Promise(async (resolve, reject) => {
        try {
            let ratings = ''
            ratings = await db.Rating.findAll( {
                include: [
                    {model: db.Teacher, as: 'TeacherRating'},
                    {model: db.Student, as: 'StudentRating'}
                ],
                where: {
                    id_Teacher: id_Teacher
                },
                raw:true,
                nest:true
            }) 
            resolve(ratings)
        } catch(e) {
            reject(e)
        }
    })
}

module.exports = {
    getAllRatingByIdTeacher: getAllRatingByIdTeacher,
}