#  MedifyMe

## _A smart Health Record platfrom to ease your journey_

The entire UI has been built in Figma and is available [here](https://www.figma.com/file/p850Ggh3o7Wx06xZKHPmRP/Epsilon-Delta-HackItOut?node-id=0%3A1&t=irTJFFggJAagLQ1M-1). The live deployed link
of the website can be accessed [here](https://medifyme.vercel.app/).

<br>

![image](https://user-images.githubusercontent.com/103768983/226119391-774e8c2c-6b63-4fc6-9bac-9dbc3c197163.png)

## Techstack

Frontend: React, a popular JavaScript library for building user interfaces, has been used for the frontend. Vite has been used as a tool for faster builds.

Backend: Node.js, a JavaScript runtime built on Chrome's V8 JavaScript engine, has been used for the backend along with Express, a fast and minimalist web framework for Node.js. MongoDB, a NoSQL document-oriented database, has been used as the database.

Authentication: The website has Google login authentication implemented for users.

Generative AI: The website uses GPT-3.5Turbo API for various generative AI functionalities.

Image storage: Cloudinary, a cloud-based image and video management platform, has been used for storing images.

State management: Redux, a predictable state container for JavaScript apps, has been used for state management. Redux-toolkit-query has also been used for making API requests and caching their responses.

Deployment: The frontend has been deployed on Netlify, a popular hosting platform for static websites. The backend has been deployed on onRender, a application for building, deploying, and managing applications and services.

## Problem 

Patients often have to visit multiple doctors, clinics, or hospitals for their treatment, which can lead to fragmented and incomplete medical records. This can be a major issue for patients and healthcare providers, especially those with chronic conditions. It can lead to ineffective or even dangerous treatments due to a lack of information about previous diagnoses, medications, and procedures. In cases of emergencies or sudden health issues, it is challenging to provide relevant medical information to healthcare providers in a timely and accurate manner. Moreover, patients may face difficulties in tracking their medication schedules, keeping up with follow-up appointments, and accessing their medical records when needed.

## Objective

Our Idea, MedifyMe, is a web application that aims to simplify healthcare management for both patients and doctors aims to solve these issues by providing a centralized platform for patients to store and manage their medical records, including doctor's notes, prescriptions, test results, and appointment history utilizing OCR and generative AI to ease the record management process for both patients and the healthcare provider. This allows for a more complete and accurate medical record, which can facilitate better treatment outcomes and reduce the risk of medical errors. The platform helps patients keep track of their medical history, prescriptions, appointments, and test reports. It also provides reminders for medications and tests, allowing patients to give feedback about their treatment experiences. The tool is segmented into various tabs to ease different parts of the healthcare process.

## Methodology

MedifyMe's frontend is built using React, to build user interfaces. The backend is built using Node.js, Express is used as the web application framework, and MongoDB is used as the NoSQL database, used for storing Patients and Doctors data. 

The application uses Google Oauth2 for authentication, React-Redux for state management, React-Toolkit-Query for handling query requests, React-Cookies for storing and accessing cookies, and React-Toastify for displaying toast information. The application also utilizes OCR Space’s API to extract medicine data from prescriptions, tests, and reports uploaded by users.

## Results

MedifyMe provides an easy and secure communication channel for patients and doctors to exchange messages and medical information. Patients can ask questions, get advice, and share updates with their doctors in a timely and convenient manner. Payments for various appointments and tests can be made on the platform itself, reducing the hassle.

MedifyMe provides users with a user-friendly and secure platform for managing their health records and appointments. The application allows users to view their medical history, schedule appointments with doctors, and receive personalized recommendations based on their input.

## Getting Started

To get started with MedifyMe, follow the steps below:
1. Fork this repository by clicking on the Fork button in the top right corner of this page.
2. Clone your forked repository to your local machine.
3. Navigate to both the frontend and backend folders in the terminal and run the command `npm install` to install the required dependencies.
4. Run the command `npm start` to start the application.

## Tech Stack
### Frontend
- React
- React-Redux
- React-Toolkit-Query
- Google Oauth2
- React-Cookies
- React-Toastify
- Vite

### Backend
- Node.js
- Express
- MongoDB
- OCR Space
- OPENAI's API with prompt engineering

## Getting started

- Fork this repository (Click the Fork button in the top right of this page, click your Profile Image)
- Clone your fork down to your local machine
- run npm install for both frontend and backend folders
- finally run npm start

