import dotenv from 'dotenv';

dotenv.config({
    path: './.env',
});

let myusername = process.env.MY_USERNAME;

console.log("Username is: " + myusername);
console.log("Start of my first backend project");
