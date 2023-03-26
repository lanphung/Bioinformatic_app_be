const mongoose = require('mongoose');
const URL = "mongodb+srv://root:o791L39PiCokX2tX@cluster0.0zltnif.mongodb.net/?retryWrites=true&w=majority";
// const URL = 'mongodb://localhost:27017/Informatic_Lab';

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
