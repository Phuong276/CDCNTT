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

let handleGetTeacherByIdTeacher = async (req, res) => {
    let id = req.query.teacherId;
    let teacher = await userServices.getTeacherByIdTeacher(id)
    if(!id) {
        return res.status(200).json( {
            errCode: 1,
            errMessage: 'Missing required parameters',
            teacher: []
        })
    }
    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        teacher
    })
}

let handleUpdateStudent = async (req, res) => {
    let data = req.body
    let message = await userServices.updateStudent(data)
    return res.status(200).json( {
        errMessage: message
    })
}

let handleUpdateTeacher = async (req, res) => {
    let data = req.body
    let message = await userServices.updateTeacher(data)
    return res.status(200).json( {
        errMessage: message
    })
}

module.exports = {
    handleCreateNewTeacher: handleCreateNewTeacher,
    handleCreateNewStudent: handleCreateNewStudent,
    handleCheckLoginTeacher: handleCheckLoginTeacher,
    handleCheckLoginStudent: handleCheckLoginStudent,
    handleGetTeacherByIdTeacher: handleGetTeacherByIdTeacher,
    handleUpdateStudent: handleUpdateStudent,
    handleUpdateTeacher: handleUpdateTeacher
}