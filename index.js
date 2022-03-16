import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import userRoutes from './routes/user.js'

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded( {limit : "30mb", extended: true}));

app.use('/users', userRoutes)
app.use(cors());



app.get('/', (req, res) => {
    console.log('[TEST]!');

    res.send('HELLO FROM HOMEPAGE')
});

const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then( () => app.listen( PORT, () => console.log(`Server running on port http://localhost:${PORT}`)))
.catch((err) => console.log(err.message));

// mongoose.set('useFindAndModify', false)


