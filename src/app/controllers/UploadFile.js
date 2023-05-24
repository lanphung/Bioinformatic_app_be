const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint for uploading a CSV file
class uploadFile {
    uploadFile(req, res) {
        if (!req.file || !req.file.csvFile) {
            return res.status(400).send('No CSV file found.');
        }
        const csvFile = req.files.csvFile;

        // Move the uploaded file to the "data" folder
        csvFile.mv('/data/data.csv', (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error saving the CSV file.');
            }

            return res
                .status(200)
                .send('CSV file uploaded and saved successfully.');
        });
    }
}

module.exports = new uploadFile();
