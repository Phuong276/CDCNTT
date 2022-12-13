import { reject, resolve } from "promise";
import db from "../models/index"
import {Sequelize} from "sequelize";

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

let createNewRating = async (data) => {
    try {
        let ratring = ''
        ratring = await db.Rating.create( {
            id_Teacher: data.id_Teacher,
            id_Student: data.id_Student,
            comment: data.comment,
            rating: data.rating,
        })
        resolve(ratring)
    } catch(e) {
        reject(e)
    }
}

const selectAVGRatingByTeacherId = async (id) => {
    try {
        const avg = await db.Rating.findAll({
            where: {id_Teacher: id},
            attributes: [
                [Sequelize.fn('AVG', Sequelize.col('Rating.rating')), 'avgRating'],]
        })
        let a = 0
        if(avg[0].avgRating){
            a = Math.round(avg[0].avgRating*100)/100
        }
        return a
    } catch (err) {
        console.log(err.message)
        return 0
    }
}

module.exports = {
    getAllRatingByIdTeacher: getAllRatingByIdTeacher,
    createNewRating: createNewRating,
    selectAVGRatingByTeacherId
}