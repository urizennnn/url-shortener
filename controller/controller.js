'use strict'
const URL = require('../model/urlModel')
const { v4: uuidv4 } = require('uuid')
const short = require('shortid')

const shortenUrl = async (req, res) => {
    const { url } = req.query;
    try {
        console.log(url);
        if (url.startsWith('http://') || url.startsWith('https://')) {
            const extraText = uuidv4();
            const newUrl = `https://${extraText}.short`;
            const urlID = short.generate()
            await URL.create({ url, ID: urlID, newUrl: newUrl });
            res.status(201).json(`Successful. Please use this id to retrieve your shortened URL :${urlID}`);

        }
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const getUrl = async (req, res) => {
    const { id } = req.query
    try {
        const urlexist = await URL.find({id})
        if (!urlexist) {
            return res.status(404).json('No url with this id found')
        }
        return res.status(200)
    } catch (err) {
        res.status(500).json(err.message);
    }
}
const getAllUrl = async (req, res) => {
    const url = URL.find({})
    res.status(200).json(url)
}

module.exports = { shortenUrl, getAllUrl, getUrl };
