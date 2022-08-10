require("dotenv").config();
const express = require("express");
const app = express();
const upload = require("./common");
const axios = require("axios");
const { uploadFile } = require('./s3');
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);
const cors = require('cors');
const S3 = require("aws-sdk/clients/s3");
const { v4: uuidv4 } = require('uuid');
const { get } = require("http");
const refreshInterval = 15000;

// env variables
const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;
const ASSEMBLY_API_KEY = process.env.ASSEMBLY_API_KEY;

app.use(cors());
app.use(express.json());

// Function to read JSON file
const readData = () => {
  // tempData.json file stored in a variable
  // parsing the buffer data after fs.readFileSync
  const tempDataJSONFile = fs.readFileSync('./data/tempData.json');
  const tempDataParsed = JSON.parse(tempDataJSONFile);
  return tempDataParsed;
}

const s3 = new S3({  region,  accessKeyId,  secretAccessKey,});

app.get('/',(req, res) => {
  res.send("Fired up 🚀🚀🚀🚀")
})

// Single file Upload to AWS S3 bucket
app.post("/transcript", upload.single("audio"), async (req, res) => {
  // console.log(req.body);  
  // uploading to AWS S3  
  const result = await uploadFile(req.file);  // Calling above function in s3.js
  
  const { Location, Bucket, Key } = result;
  
  let params = {Bucket: bucketName, Key: Key};
  let url = s3.getSignedUrl('getObject', params);

  // Deleting from local if uploaded in S3 bucket
  await unlinkFile(req.file.path); 

  const uploadDataArr = readData();

  console.log("S3 Upload Success");

  const assembly = axios.create({
    baseURL: "https://api.assemblyai.com/v2",
    headers: {
        authorization: ASSEMBLY_API_KEY,
        "content-type": "application/json",
    },
  });
  
  const getTranscript = async () => {
    // Sends the audio file to AssemblyAI for transcription
    const response = await assembly.post("/transcript", {
      audio_url: url,
      speaker_labels: true
    })

    const checkCompletionInterval = setInterval(async () => {
      const transcript = await assembly.get(`/transcript/${response.data.id}`)
      const transcriptStatus = transcript.data.status
  
      if (transcriptStatus !== "completed") {
        console.log(`Transcript Status: ${transcriptStatus}`)
      } else if (transcriptStatus === "completed") {
        console.log(`Transcript ID:${transcript.data.id} is ready`)
        res.status(200).send(JSON.stringify(transcript.data));
        clearInterval(checkCompletionInterval)
      }
    }, refreshInterval)
  }
  getTranscript();
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server fired up on port ${PORT} 🫡`);
    console.log("Stop with Ctrl+C");
});
