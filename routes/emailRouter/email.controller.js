const request = require('request');
var express = require('express');
var router = express.Router();
var url = require('url');
const axios = require('axios');
const db = require("../../models");
const { query } = require('express');
const Domain = db.domain;
const mongoose = db.mongoose;


router.get('/email', function (req, res, next) {
    const queryObject = url.parse(req.url, true).query
    if (queryObject.address) {
        if (queryObject.address.indexOf('@') == -1) {
            res.status(200).send({ 'message': 'The email address provided is not a valid email address, it does not contain the character @' });
            return;
        }
        const address = queryObject.address.split('@');
        const domainProvided = address[1];

        Domain.find({
            domain: domainProvided
        }).exec((err, domains) => {
            if (err) {
                res.status(500).send({ 'message': 'Something went wrong' + err });
                return;
            }
            if (domains[0]) {
                res.status(200).send({ 'message': 'Valid email address ' + queryObject.address });
            } else {
                res.status(200).send({ 'message': 'Not valid Address' });
            }
        })

    } else {
        res.status(200).send({ 'message': 'No email address provided' });
    }
});

router.get('/newDomain', function (req, res, next) {
    const queryObject = url.parse(req.url, true).query
    if (queryObject.address) {
        const dom = new Domain({
            domain: queryObject.address
        });

        dom.save((err, domain) => {
            if (err) {
                res.status(500).send({ 'error': 'Cant store novel domain' });
            }
            res.send({ 'message': 'Successfully stored new email domain' });
        });
    } else {
        res.status(200).send({ 'message': 'No email domain address provided' });
    }
})
module.exports = router;