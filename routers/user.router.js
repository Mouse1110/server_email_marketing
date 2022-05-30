const express = require('express')
const router = express.Router()

// res config
let ress = require("../utils/res")

// controller
let controller = require("../controllers/mongoose/user.controller")

router.post('/regis',async (req,res)=>{
    if (!req.body.user || !req.body.pass) return ress(res,400,"query user not found")
    var result = await controller.regis(req.body)
    res.json(result)
})

router.post('/login',async (req,res)=>{
    if (!req.body.user || !req.body.pass) return ress(res,400,"user or password not found")
    var result = await controller.login(req.body)
    if (!result) return ress(res,400,"user or password not found")
    res.json(result)
})

router.put('/',async (req,res)=>{
   await controller.update_user(req.query.user,req.body)
    res.json()
})

module.exports = router