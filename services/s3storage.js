const AWS = require('aws-sdk');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const s3 = new AWS.S3({
    accessKeyId: config.aws_access_key,
    secretAccessKey: config.aws_secret_key
});

const s3storage = (fileContent,fileName) => {

    // Setting up S3 upload parameters
    const params = {
        Bucket: config.aws_bucket,
        Key: fileName, // File name you want to save as in S3
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};

module.exports = s3storage;