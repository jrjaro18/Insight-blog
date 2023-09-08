const mongoose = require('mongoose');
const db = 'enterhere';

const dbase = () => {
    mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    }); 
}
module.exports = dbase;
