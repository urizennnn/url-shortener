'use strict'
const URL = require('../model/urlModel')
const uuid = require('uuid')



const shortenUrl = async(req, res) => {
    const { url } = req.query
    if (url.startsWith('http') || url.startsWith('https')){
    const extraText=uuid()
    const newUrl = `https:${extraText}.short`
    const urlID = uuid().splice(7)
        await URL.create({ url, id: urlID, newUrl: newUrl })
    }
    const urlexists = await URL.find({})
    res.status(200).json(urlexists)
}

module.exports = {shortenUrl}