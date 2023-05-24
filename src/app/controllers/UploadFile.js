const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const multer = require('multer');
const path = require('path');

// Endpoint for uploading a CSV file
class uploadFile {
    uploadFile(req, res) {
        const dataDirectory = path.join(__dirname, '../../../data');
        const storage = multer.diskStorage({
            destination: dataDirectory,
            filename: (req, file, cb) => {
                cb(null, `${file.originalname}`);
            },
        });

        const upload = multer({
            storage,
            // Thêm middleware để theo dõi tiến độ upload
            fileFilter: (req, file, cb) => {
                cb(null, true);
            },
            limits: {
                // Giới hạn kích thước file
                fileSize: 1024 * 1024 * 1024 * 1024, // Ví dụ giới hạn 10MB
            },
        }).single('file');

        // Thêm middleware để in ra tiến độ upload
        upload(req, res, (err) => {
            if (err instanceof multer.MulterError) {
                // Xử lý lỗi từ multer
                console.log('Multer Error:', err);
                res.status(400).json({
                    error: 'Có lỗi xảy ra khi tải lên tệp tin.',
                });
            } else if (err) {
                // Xử lý lỗi khác
                console.log('Error:', err);
                res.status(500).json({
                    error: 'Có lỗi xảy ra khi tải lên tệp tin.',
                });
            } else {
                // Upload thành công
                res.send('Tệp tin đã được tải lên thành công!');
            }
        });
    }
}

module.exports = new uploadFile();
