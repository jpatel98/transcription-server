
# Transcription App - Server

The app uses [Assembly AI's](https://www.assemblyai.com/) API to convert user inputted audio to text, making it easier for everyone from journalists to students to transcribe speech and make notes.

*NOTE: This app needs the [transcription-client](https://github.com/jpatel98/transcription-client) to run in parallel for full functionality*
## Backend Stack


![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

![AssemblyAI](https://img.shields.io/badge/AssemblyAI-white?style=for-the-badge)

![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

![AWS S3](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)

![Axios](https://img.shields.io/badge/Axios-white?style=for-the-badge)

![Auth0](https://img.shields.io/badge/Auth0-white?style=for-the-badge)

![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
## Run Locally

Clone the project

```bash
  git clone git@github.com:jpatel98/transcription-server.git
```

Go to the project directory

```bash
  cd transcription-server
```

Install dependencies

```bash
  npm install
```
### Environment Variables
To locally run this project, you will need to add the following env variables and configure your AWS S3 bucket.
[Here is a good walkthrough](https://javascript.plainenglish.io/file-upload-to-amazon-s3-using-node-js-42757c6a39e9) to configure your S3 bucket.

`AWS_BUCKET_NAME`

`AWS_BUCKET_REGION`

`AWS_ARN`

`AWS_ACCESS_KEY`

`AWS_SECRET_KEY`

`ASSEMBLY_API_KEY`

Start the app

```bash
  npm run start
```

Run in a dev environment

```bash
  npm run dev
```

Make a prod build

```bash
  npm run build
```
## Lessons Learned

Lessons learned while building this project.
- Divide the problem in smaller chunks.
- Learn to get better at time management.
- Read documentation before diving in.
- Simple is better.


## Roadmap

- Connect to a database and allow users to save their transcripts.

- Enable video transcription and implement a video player on screen.

- Create a transcript editor using Draft.js.

- Add realtime transcription feature.

