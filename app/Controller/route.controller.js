const express = require('express');
const router = express.Router();
const Grill_01 = require('../Controller/Grill_01.Controller');
const Grill_02 = require('../Controller/Grill_02.Controller');
const Grill_03 = require('../Controller/Grill_03.Controller');
const Grill_04 = require('../Controller/Grill_04.Controller');


module.exports = {
    router,
    Grill_01
};