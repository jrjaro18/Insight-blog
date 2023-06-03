const mongoose = require('mongoose');
const db = 'mongodb+srv://rohanjaiswal1500:rohan%400506@cluster0.fs36y0b.mongodb.net/';

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
