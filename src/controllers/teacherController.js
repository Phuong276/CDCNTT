import services from "../services/techerController"
let getAllTeacher = async (req,res)=>{
    let records = await services.getAllTeacher()
    res.status(200).json({
        data: records,
            message:"success"
    })
}

module.exports = {
    getAllTeacher,

}