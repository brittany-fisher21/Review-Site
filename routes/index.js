'use strict';

const express = require('express');
const router = express.Router();
const SummerWine = require('../models/SummerWine');
router.get('/:slug?', async (req, res) => {

if (!!req.params.slug) {
    const {slug} = req.params;
    const wineDetails = await SummerWine.getBySlug(slug);
    console.log('This wine is:', wineDetails);


    res.render('template', {
       locals: {
           title: 'Wine Details',
           wine: wineDetails
       }, 
       partials: {
           body: 'partials/wine-details',
       },
    });
} else {
    const nameData = await SummerWine.getAllSummerWineData();
    res.render('template', {
        locals: {
            title: 'Review Blog',
            data: nameData
        },
        partials: {
            body: 'partials/home'
        },
    })
}
});

module.exports = router;