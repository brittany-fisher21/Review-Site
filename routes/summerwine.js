const SummerWine = require('../models/SummerWine');

const express = require('express'),
    router = express.Router(),
    SummerWineModel = require('../models/SummerWine'),
    ReviewsModel = require('../models/reviews');

router.get('/', async (req, res, next) => {
    const SummerWineData = await SummerWineModel.getAll();

    res.render('template', {
        locals: {
            title: 'List of Wine',
            SummerWineData: SummerWineData,
            
        },
        partials: {
            body: 'home',
        },
    });
});

router.get('/:slug', async (req, res) => {
    const {slug} = req.params;
       const wineData = await SummerWineModel.getBySlug(slug);
       console.log(wineData);

    res.render('template', {
        locals: {
            title: wineData.name,
            wineData,
           
        },
        partials: {
            body: 'partials/wine-details',
        },
    });
});

module.exports = router;
