'use strict';

const express = require('express');
const persistence = require('../persistence/person_persistence.js');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());


module.exports = function() {

    router.get('/person', function(req, res, next) {
        persistence.getAllPersons().then(function interpretResultsPersons(resultSet) {
            let listofPersons = [];
            for (let i = 0; i < resultSet.length; i++) {
                listofPersons.push(resultSet[i]);
            }
            res.status(200).json(listofPersons);
        })
        .catch(err => {
            res.status(500).send('something went wrong');
        });
    });

    router.get('/person/:id_angajat', function(req, res, next) {
        persistence.getPerson(req.params.id_angajat)
        .then(d=>{
            console.log("OK");
            console.log(d);
            res.send(d);
            res.status(200).json(d);
        })
        .catch(err => {
            res.status(500).send(err);
        });
    });
    // router.post('/angajat', function(req, res, next) {
    //     var employee = req.body;
    //     console.log(JSON.stringify(req.body));
    //     persistence.createEmployee(employee, function() {
    //         res.send(req.body);
    //     });
    // });


    // router.put('/angajat', function(req, res, next) {
    //     var employee = req.body;
    //     console.log(JSON.stringify(req.body));
    //     persistence.updateEmployee(employee, function() {
    //         res.send(req.body);
    //     });
    // });

    // router.delete('/angajat', function(req, res, next) {
    //     var employee = req.body;
    //     console.log(JSON.stringify(req.body));
    //     persistence.deleteEmployee(employee, function() {
    //         res.send(req.body);
    //     });
    // });


    return router;
};
