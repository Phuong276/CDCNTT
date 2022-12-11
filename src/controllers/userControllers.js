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

let handleCheckLoginTeacher = async (req, res) => {
    let password = req.body.password
    let username = req.body.username
    if(!password || !username) {
        return res.status(500).json( {
            errCode: 1,
            message: 'Missing inputs parameter!'
        })
    }
    let userData = await userServices.checkLoginTeacher(username, password)
    return res.status(200).json( {
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user,
        // token: userData.token
    })
}

let handleCheckLoginStudent = async (req, res) => {
    let password = req.body.password
    let username = req.body.username
    if(!password || !username) {
        return res.status(500).json( {
            errCode: 1,
            message: 'Missing inputs parameter!'
        })
    }
    let userData = await userServices.checkLoginStudent(username, password)
    return res.status(200).json( {
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user,
        // token: userData.token
    })
}

module.exports = {
    handleCreateNewTeacher: handleCreateNewTeacher,
    handleCreateNewStudent: handleCreateNewStudent,
    handleCheckLoginTeacher: handleCheckLoginTeacher,
    handleCheckLoginStudent: handleCheckLoginStudent
}