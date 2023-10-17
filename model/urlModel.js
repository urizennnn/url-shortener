const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    url: {
        type: String,
        required: [true, 'Please input the URL type'],
    },
    ID: {
        type: mongoose.Schema.Types.Mixed,
        required: [true, 'Please input the ID'],
    },
    newUrl: {
        type: String,
        required: true
    }

});

const UrlModel = mongoose.model('Url', urlSchema);

module.exports = UrlModel;
