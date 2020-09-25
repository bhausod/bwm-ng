const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const rental = require('./models/rentals');
const FakeDb = require('./Fake-db');
const rentalRoutes = require('./routes/rentals');

mongoose.connect(config.DB_URI).then(()=>{
    const fakeDb = new FakeDb();
    fakeDb.seekDb();
});
const app = express();

// app.get('/rentals',function(req,res){
//     res.json({"Success": true});
// })
app.use('/api/v1/rentals',rentalRoutes);
const PORT = process.env.PORT || 3001;

app.listen(PORT,function(){
    console.log('Hii Bhau');
});