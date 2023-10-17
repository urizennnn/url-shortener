'use strict'
const express = require('express');
const router = express.Router();
const { shortenUrl, getAllUrl, getUrl, deleteUrl } = require('../controller/controller');

router.post('/shortenUrl', shortenUrl);
router.get('/getUrl', getUrl)
router.get('/getAll', getAllUrl)
router.delete('/deleteUrl', deleteUrl)

module.exports = router;
