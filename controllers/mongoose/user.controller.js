// model
let UserModel = require("../../models/user.model")

module.exports.regis = async function(data){
    let check = await UserModel.findOne({user:data.user})
    if (check) return
    let user = await UserModel({
        user:data.user,
        pass:data.pass,
        phone:data.phone,
    })
    var result = await user.save()
    return result
}

module.exports.login = async function(data){
    let result = await UserModel.findOne({$and:[{user:data.user},{pass:data.pass}]})
    return result
}

module.exports.update_user = async function(id,data){
    if (data.phone) await UserModel.updateOne({_id:id},{$set:{phone:data.phone}})
    if (data.date) await UserModel.updateOne({_id:id},{$set:{date:data.date}})
    if (data.direction) await UserModel.updateOne({_id:id},{$set:{direction:data.direction}})
}