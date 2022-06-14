const express = require('express')
const router = express.Router()

// res config
let ress = require("../utils/res")

router.get('/list', async (req, res) => {

    res.json([{ "_id": "312dw3213das23", "name": "Chien dich 1", "date": 1312312312, "count_sended": 1000, "count_opened": 780, "count_see": 750, "count_spam": 14 }, { "_id": "312dw3213das23", "name": "Chien dich 1", "date": 1312312312, "count_sended": 1000, "count_opened": 780, "count_see": 750, "count_spam": 14 }])
})

router.get('/outstanding', async (req, res) => {

    res.json({ "_id":"312dw3213das23", "name": "Chien dich 1", "date": 1312312312, "count_sended":1000, "count_opened":780, "count_see":750, "count_spam":14 })
})

router.get('/:id', async (req, res) => {

    res.json( { "_id":"312dw3213das23", "name": "Chien dich 1", "date": 1312312312, "count_sended":1000, "count_opened":780, "count_see":750, "count_spam":14 })})

router.post('/create',async (req,res)=>{
       console.log(req.body)
        res.json(true)
    })
       
module.exports = router