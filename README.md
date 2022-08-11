
# Scribe11.xyz - Server

Scribe11.xyz uses a machine learning API to convert user inputted audio to text, making it easier for 1) journalists to transcribe interview quotes, press conferences etc 2) students to transcribe long tutorials, lectures etc and have them for notes 3) office teams to make meeting notes for members who may have missed the meeting.
## BackEnd Stack


![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

![AssemblyAI](https://img.shields.io/badge/AssemblyAI-white?style=for-the-badge)

![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

![AWS S3](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)

![Axios](https://img.shields.io/badge/Axios-white?style=for-the-badge)

![Auth0](https://img.shields.io/badge/Auth0-white?style=for-the-badge)

![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
## Environment Variables

To locally run this project, you will need to add the following env variables and configure your AWS S3 bucket.
[Here is a good walkthrough](https://javascript.plainenglish.io/file-upload-to-amazon-s3-using-node-js-42757c6a39e9) of the process.

`AWS_BUCKET_NAME`

`AWS_BUCKET_REGION`

`AWS_ARN`

`AWS_ACCESS_KEY`

`AWS_SECRET_KEY`

`ASSEMBLY_API_KEY`
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



## Deployment
You can check the live app at - https://scribe11.xyz/ 

**NOTE**: A bug is preventing users from uploading files longer than 30 seconds. Please refrain from uploading files longer than 30 seconds until the issue resolves. 
You may use files from [this repository.](https://github.com/jpatel98/scribe11-test-audio)
