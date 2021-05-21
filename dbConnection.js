/**
 * connection with mongodb database using mongoose.
 */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/UserDb', { useUnifiedTopology: true },
    (err) => {
        if (!err) {
            console.log('Successfully Established Connection with MongoDB')
        }
        else {
            console.log('Failed to Establish Connection with MongoDB with Error: ' + err)
        }
    });
module.exports = mongoose;