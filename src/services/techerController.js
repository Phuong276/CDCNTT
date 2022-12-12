import db from '../models/index'

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
                "createdAt",],
        })

        return docs
    } catch (err) {
        console.log("Error from services.getAllTeacher", err)
        return []
    }
}

module.exports = {
    getAllTeacher,
}