const express = require('express');
const router = express.Router();
const Rental = require('../models/rentals');

router.get('', function (req, res) {
    Rental.find({}, function (err, rentalDoc) {
        res.json(rentalDoc);
    });
});

router.get('/:id', function(req, res){
    const rentId = req.params.id;
    Rental.findById(rentId,function(err, rentalDoc){
        if(err){
            res.status(422).send({errors: [{title : 'Error 422', details:'Record is not found in the database'}]});
        }
        res.json(rentalDoc);
    })
})

module.exports = router;