import express from "express";
import dotenv from "dotenv"
import mongoose, { Mongoose } from "mongoose";

//env
dotenv.config()
const db_name = process.env.mongoDBURL
const PORT = process.env.PORT
//end env

const app = express();

//GET REQUEST
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send(response.status)
});


//connect to DB
mongoose.connect(db_name)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${ PORT }`);
            
        })
    })
    .catch((error) => {
        console.log(error);
    });
    
