'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const UsersModel = require('../models/users');

router.get('/signup', (req,res) => {
    res.render('template', {
        locals: {
            title: 'Create an Account'
        },
        partials: {
            body: 'partials/signup',
        },
    });
});

router.get('/login', (req,res) => {
    res.render('template', {
        locals: {
            title: 'User Log In'
        },
        partials: {
            body:'partials/login',
        },
    });
});



module.exports = router;