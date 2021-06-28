'use strict';

const express = require('express');
const router = express.Router();
const SummerWine = require('../models/SummerWine');

router.get('/', async (req, res) => {
    const nameData = await SummerWine.getAllSummerWineData();
    res.render('template', {
        locals: {
            title: 'Review Blog',
            data: nameData
        },
        partials: {
            body: 'partials/home'
        }
    })
});

module.exports = router;