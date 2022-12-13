import db from '../models/index'
import {Sequelize} from "sequelize";

let getAllTeacher = async () => {
    try {
        const docs = await db.Teacher.findAll({
                attributes: ["id",
                    "username",
                    "firstName",
                    "lastName",
                    "photo",
                    "phone",
                    "address",
                    "experience",
                    "dregree",
                    "cetificate",
                    "createdAt",]
            },
        )

        for(let i=0;i<docs.length;i++){
            const rs =await selectAVGRatingByTeacherId(docs[i].id)
            docs[i].rating = rs
        }

        return docs
    } catch (err) {
        console.log("Error from services.getAllTeacher", err)
        return []
    }
}
const selectAVGRatingByTeacherId = async (id) => {
    try {
        const avg = await db.Rating.findAll({
            where: {id_Teacher: id},
            attributes: [
                [Sequelize.fn('AVG', Sequelize.col('Rating.rating')), 'avgRating'],]
        })
        console.log(avg[0].avgRating)
        return avg[0].avgRating
    } catch (err) {
        console.log(err.message)
        return 0
    }
}
module.exports = {
    getAllTeacher,
}