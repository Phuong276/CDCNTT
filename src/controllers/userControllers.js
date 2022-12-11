import userServices from "../services/userServices"

let handleCreateNewTeacher = async (req, res) => {
    let check = await userServices.checkUsernameTeacher(req.body.username)
    let teacher = await userServices.createNewTeacher(req.body)
    if(check) {
        return res.status(200).json( {
            errCode: 0,
            errMessage: 'Username teacher is exit',
        })
    }
    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        teacher
    })
}

let handleCreateNewStudent = async (req, res) => {
    let check = await userServices.checkUsernameStudent(req.body.username)
    let student = await userServices.createNewStudent(req.body)
    if(check) {
        return res.status(200).json( {
            errCode: 0,
            errMessage: 'Username student is exit',
        })
    }
    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        student
    })
}

module.exports = {
    handleCreateNewTeacher: handleCreateNewTeacher,
    handleCreateNewStudent: handleCreateNewStudent
}