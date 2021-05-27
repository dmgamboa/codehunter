import aws from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";
import config from "../config/index.js";

aws.config.update({
    secretAccessKey: config.awsSecretKey,
    accessKeyId: config.awsAccessKeyId,
    region: "ca-central-1",
});

const s3 = new aws.S3();

const storage = multerS3({
    s3: s3,
    bucket: "codehunterbucket",
    acl: "public-read",
    metadata: (req, file, cb) => {
        cb(null, {fieldName: file.fieldname});
    },
    key: (req, file, cb) => {
        cb(null, Date.now().toString() + "-" + file.originalname);
    },
});

const upload = multer({
    storage: storage,
});

export default upload;
