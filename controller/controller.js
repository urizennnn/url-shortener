'use strict'
const URL = require('../model/urlModel')
const { v4: uuidv4 } = require('uuid')
const short = require('shortid')

const shortenUrl = async (req, res) => {
    const { url } = req.query;
    try {
        console.log(url);
        if (url.startsWith('http://') || url.startsWith('https://')) {
            const newUrl = `https://shortened.short`;
            const urlID = short.generate()
            await URL.create({ url, ID: urlID, newUrl: newUrl });
            res.status(201).json(`Successful. Please use this id to retrieve your shortened URL :${urlID}`);

        }
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const getUrl = async (req, res) => {
    const { id } = req.query;
    console.log(id);

    try {
        const urlexist = await URL.findOne({ ID: id });

        if (!urlexist) {
            return res.status(404).json('No URL with this id found');
        }
        return res.status(200).redirect(urlexist.url)

    } catch (err) {
        return res.status(500).json(err.message);
    }

}
const getAllUrl = async (req, res) => {
    const url = await URL.find({})
    res.status(200).json(url)
}
const deleteUrl = async (req, res) => {
    const { id } = req.query;
    try {
        const deletedUrl = await URL.findOneAndDelete({ ID: id });

        if (!deletedUrl) {
            return res.status(404).json('No URL with this id found');
        }

        res.status(200).json('URL Deleted Successfully');
    } catch (err) {
        res.status(500).json(err.message);
    }
}

module.exports = { shortenUrl, getAllUrl, getUrl, deleteUrl };
