import bcrypt from 'bcryptjs'
import { reject, resolve } from 'promise'
import db from '../models/index'

const salt = bcrypt.genSaltSync(10)

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => { 
        try {
            var hashPassword = await bcrypt.hashSync(password, salt)
            resolve(hashPassword)
        } catch(e) {
            reject(e);
        }
    })
}

let createNewTeacher = async (data) => {
    try {
        let teacher = ''
        let hashPasswordFromBcrypt = await hashUserPassword(data.password)
        teacher = await db.Teacher.create( {
            username: data.username,
            password: hashPasswordFromBcrypt,
            firstName: data.firstName,
            lastName: data.lastName,
            photo: data.photo,
            phone: data.phone,
            address: data.address,
            experience: data.experience,
            dregree: data.degree,
            cetificate: data.certificate,
        })
        resolve(teacher)
    } catch(e) {
        console.log(e)
        reject(e)
    }
}

let checkUsernameTeacher = (username) => {
    return new Promise(async (resolve, reject)=> {
        try {
            let teacher = await db.Teacher.findOne({
                where: { username: username}
            })
            if(teacher) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch(e) {
            reject(e)
        }
    })
}

let createNewStudent = async (data) => {
    try {
        let student = ''
        let hashPasswordFromBcrypt = await hashUserPassword(data.password)
        student = await db.Student.create( {
            username: data.username,
            password: hashPasswordFromBcrypt,
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
        })
        resolve(student)
    } catch(e) {
        reject(e)
    }
}

let checkUsernameStudent = (username) => {
    return new Promise(async (resolve, reject)=> {
        try {
            let student = await db.Student.findOne({
                where: { username: username}
            })
            if(student) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch(e) {
            reject(e)
        }
    })
}

let checkLoginTeacher = (username, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {}
            let isExit = await checkUsernameTeacher(username)
            if(isExit) {
                let user = await db.Teacher.findOne({
                    attributes:['username', 'password', 'id'],
                    where: {
                        username: username
                    },
                    raw: true
                })
                if(user) {
                    let check = await bcrypt.compareSync( password, user.password);
                    if(check) {
                        userData.errCode = 0,
                        userData.errMessage = 'Okk',
                        delete user.matKhau;
                        userData.user = user;
                        // userData.token = jwt.sign(userData.user.id, process.env.JWT_SECRET)
                    }
                    else {
                        userData.errCode = 3,
                        userData.errMessage = 'Wrong password';
                    }
                }
                else {
                    userData.errCode = 2,
                    userData.errMessage = 'Username isnt exist in your system';
                }
            }
            else {
                userData.errCode = 1;
                userData.errMessage = 'Username isnt exist in your system';  
            }
            resolve(userData)
        } catch (e) {
            reject(e)
        }
    })
}

let checkLoginStudent = (username, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {}
            let isExit = await checkUsernameStudent(username)
            if(isExit) {
                let user = await db.Student.findOne({
                    attributes:['username', 'password', 'id'],
                    where: {
                        username: username
                    },
                    raw: true
                })
                if(user) {
                    let check = await bcrypt.compareSync( password, user.password);
                    if(check) {
                        userData.errCode = 0,
                        userData.errMessage = 'Okk',
                        delete user.matKhau;
                        userData.user = user;
                        // userData.token = jwt.sign(userData.user.id, process.env.JWT_SECRET)
                    }
                    else {
                        userData.errCode = 3,
                        userData.errMessage = 'Wrong password';
                    }
                }
                else {
                    userData.errCode = 2,
                    userData.errMessage = 'Username isnt exist in your system';
                }
            }
            else {
                userData.errCode = 1;
                userData.errMessage = 'Username isnt exist in your system';  
            }
            resolve(userData)
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createNewTeacher: createNewTeacher,
    checkUsernameTeacher: checkUsernameTeacher,
    createNewStudent: createNewStudent,
    checkUsernameStudent: checkUsernameStudent,
    checkLoginTeacher: checkLoginTeacher,
    checkLoginStudent: checkLoginStudent
}
