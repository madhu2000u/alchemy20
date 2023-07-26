# Alchemy 21
This is the codebase for [Alchemy](https://alchemy.nitt.edu) made with [NextJs](https://nextjs.org/) (React framework) for the front-end and Express mongo for the back-end.
## Demo Credentials:
user: madhu@demo.com
pwd: demo1234
## Getting Started

**Important: Fork this repository and clone your fork**
Then, install the node modules for the back-end and front-end:
```bash
cd backend/nodeServer
npm install
cd ../../alchemy-20-front/
npm install
```
Get the .env files from maintainers and put them in the front-end and back-end folders

### Running the back-end server without docker
Make sure mongodb service is running.
```bash
cd backend/nodeServer
npm run start
```
Open another terminal and run
```bash
mongod
```
Server will start running in port 4700
### Running the back-end server using docker

**Note:** Make sure you have docker and mongo service running
```bash
cd backend/nodeServer
docker-compose up
```
Server will start running in port 5700

### Running the front-end server

```bash
cd alchemy-20-front/
npm run dev
```
Open [http://localhost:3612](http://localhost:3612) with your browser to see the website.

## Contributing guidelines
- Fork this repository
- Clone your fork and start working in it.
- Create a new branch for every major feature/update.
- Give Pull requests from your forked repository

## Resources
To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Learn Express and Mongoose](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose)
