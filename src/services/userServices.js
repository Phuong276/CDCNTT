import bcrypt from 'bcryptjs'
import { reject, resolve } from 'promise'
import db, { Sequelize } from '../models/index'
import ratingServices from './ratingServices'

const salt = bcrypt.genSaltSync(10)

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            var hashPassword = await bcrypt.hashSync(password, salt)
            resolve(hashPassword)
        } catch (e) {
            reject(e);
        }
    })
}

let createNewTeacher = async (data) => {
    try {
        let teacher = ''
        let hashPasswordFromBcrypt = await hashUserPassword(data.password)
        teacher = await db.Teacher.create({
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

    } catch (e) {
        console.log(e)
    }
}

let checkUsernameTeacher = (username) => {
    return new Promise(async (resolve, reject) => {
        try {
            let teacher = await db.Teacher.findOne({
                where: { username: username }
            })
            if (teacher) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e)
        }
    })
}

let createNewStudent = async (data) => {
    try {
        let student = ''
        let hashPasswordFromBcrypt = await hashUserPassword(data.password)
        student = await db.Student.create({
            username: data.username,
            password: hashPasswordFromBcrypt,
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
        })
        resolve(student)
    } catch (e) {
        reject(e)
    }
}

let checkUsernameStudent = (username) => {
    return new Promise(async (resolve, reject) => {
        try {
            let student = await db.Student.findOne({
                where: { username: username }
            })
            if (student) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e)
        }
    })
}

let checkLoginTeacher = (username, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {}
            let isExit = await checkUsernameTeacher(username)
            if (isExit) {
                let user = await db.Teacher.findOne({
                    attributes: ['username', 'password', 'id'],
                    where: {
                        username: username
                    },
                    raw: true
                })
                if (user) {
                    let check = await bcrypt.compareSync(password, user.password);
                    if (check) {
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
            if (isExit) {
                let user = await db.Student.findOne({
                    attributes: ['username', 'password', 'id'],
                    where: {
                        username: username
                    },
                    raw: true
                })
                if (user) {
                    let check = await bcrypt.compareSync(password, user.password);
                    if (check) {
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

let getTeacherByIdTeacher = (id_Teacher) => {
    return new Promise(async (resolve, reject) => {
        try {
            let teacher = ''
            teacher = await db.Teacher.findAll({
                where: {
                    id: id_Teacher
                },
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
                raw: true,
                nest: true
            })
            for (let i = 0; i < teacher.length; i++) {
                const rs = await ratingServices.selectAVGRatingByTeacherId(teacher[i].id)
                teacher[i].rating = rs
            }

            resolve(teacher)
        } catch (e) {
            reject(e)
        }
    })
}

let updateStudent = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: 'Missing required paramets!'
                })
            }
            let student = await db.Student.findOne({
                where: { id: data.id },
                raw: false
            })
            if (student) {
                student.firstName = data.firstName,
                    student.lastName = data.lastName,
                    student.phone = data.phone,
                    await student.save()
                resolve({
                    errCode: 0,
                    message: 'Update the user succeeds!'
                })
            }
            else {
                resolve({
                    errCode: 1,
                    errMessage: 'Mat hang not found'
                });
            }
        } catch (e) {
            reject(e)
        }
    })
}

let updateTeacher = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: 'Missing required paramets!'
                })
            }
            let teacher = await db.Teacher.findOne({
                where: { id: data.id },
                raw: false
            })
            if (teacher) {
                teacher.firstName = data.firstName,
                    teacher.lastName = data.lastName,
                    teacher.photo = data.photo,
                    teacher.phone = data.phone,
                    teacher.address = data.address,
                    teacher.experience = data.experience,
                    teacher.dregree = data.dregree,
                    teacher.cetificate = data.cetificate,
                    await student.save()
                resolve({
                    errCode: 0,
                    message: 'Update the user succeeds!'
                })
            }
            else {
                resolve({
                    errCode: 1,
                    errMessage: 'Mat hang not found'
                });
            }
        } catch (e) {
            reject(e)
        }
    })
}

let deleteTeacher = (teacherId) => {
    return new Promise(async (resolve, reject) => {
        let foundTeacher = await db.Teacher.findOne({
            where: { id: teacherId }
        })
        if (!foundTeacher) {
            resolve({
                errCode: 2,
                errMessage: 'Teacher isnt exit'
            })
        }
        await db.Teacher.destroy({
            where: { id: teacherId }
        })
        resolve({
            errCode: 0,
            errMessage: 'Delete Ok'
        })
    })
}

let deleteStudent = (studentId) => {
    return new Promise(async (resolve, reject) => {
        let foundStudent = await db.Student.findOne({
            where: { id: studentId }
        })
        if (!foundStudent) {
            resolve({
                errCode: 2,
                errMessage: 'Teacher isnt exit'
            })
        }
        await db.Student.destroy({
            where: { id: studentId }
        })
        resolve({
            errCode: 0,
            errMessage: 'Delete Ok'
        })
    })
}

let getStudentByIdStudent = (id_Student) => {
    return new Promise(async (resolve, reject) => {
        try {
            let student = ''
            student = await db.Student.findAll({
                where: {
                    id: id_Student
                },
                raw: true,
                nest: true
            })
            resolve(student)
        } catch (e) {
            reject(e)
        }
    })
}

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

        for (let i = 0; i < docs.length; i++) {
            const rs = await ratingServices.selectAVGRatingByTeacherId(docs[i].id)
            docs[i].rating = rs
        }

        return docs
    } catch (err) {
        console.log("Error from services.getAllTeacher", err)
        return []
    }
}

let searchTeacher = async (nameTeacher) => {
    let Op = Sequelize.Op;
    let teacher = await db.Teacher.findAll({
        where: {
            lastName: {
                [Op.like]: `%${nameTeacher}%`
            }
        }
    })
    return teacher;
}

module.exports = {
    createNewTeacher: createNewTeacher,
    checkUsernameTeacher: checkUsernameTeacher,
    createNewStudent: createNewStudent,
    checkUsernameStudent: checkUsernameStudent,
    checkLoginTeacher: checkLoginTeacher,
    checkLoginStudent: checkLoginStudent,
    getTeacherByIdTeacher: getTeacherByIdTeacher,
    updateStudent: updateStudent,
    updateTeacher: updateTeacher,
    deleteTeacher: deleteTeacher,
    deleteStudent: deleteStudent,
    getStudentByIdStudent: getStudentByIdStudent,
    getAllTeacher,
    searchTeacher: searchTeacher,

}
