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
        teacher = await db.KhachHang.create( {
            username: data.username,
            password: hashPasswordFromBcrypt,
            firstName: data.firstName,
            lastName: data.lastName,
            photo: data.photo,
            phone: data.phone,
            address: data.address,
            experience: data.experience,
            dregree: data.address,
            cetificate: data.experience,
        })
        resolve(teacher)
    } catch(e) {
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
        student = await db.KhachHang.create( {
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

module.exports = {
    createNewTeacher: createNewTeacher,
    checkUsernameTeacher: checkUsernameTeacher,
    createNewStudent: createNewStudent,
    checkUsernameStudent: checkUsernameStudent
}
