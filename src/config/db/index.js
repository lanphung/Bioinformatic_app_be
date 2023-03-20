// const mongoose = require('mongoose');

// async function connect() {
//     try {
//         await mongoose.connect('mongodb+srv://root:o791L39PiCokX2tX@cluster0.0zltnif.mongodb.net/?retryWrites=true&w=majority');
//         console.log('Connect successfully !');
//     } catch (error) {
//         console.log('Connect failure !');
//         console.log(error);
//     }
// }

const mongoose = require('mongoose');
const URL =
    'mongodb+srv://root:o791L39PiCokX2tX@cluster0.0zltnif.mongodb.net/?retryWrites=true&w=majority';

const connect = async () => {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to mongoDB');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = { connect };
