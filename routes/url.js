const express = require('express')
const router = express.Router()
const {shortenUrl}= require('../controller/controller')
router.get('/',(req,res)=>{
res.send('Hello')
})
router.get('/short/:url',shortenUrl)
module.exports = router