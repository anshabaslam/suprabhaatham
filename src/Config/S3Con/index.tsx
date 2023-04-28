// const S3con = {
//    bucketName: "suprabhaatham-cms",
//    region: "eu-west-2",
//    accessKeyId: "AKIAYCY7LW3IVD3BX3WJ",
//    secretAccessKey: "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",
// };
// export default S3con; 
import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: 'AKIAYCY7LW3IVD3BX3WJ',
  secretAccessKey: '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',
  region: 'eu-west-2'
});


export const uploadImageToS3 = (file :File, filename:string) => {
   const params = {
     Bucket: 'suprabhaatham-cms',
     Key: filename,
     Body: file,
     ACL: 'public-read'
   };
 
   return s3.upload(params).promise();
 };