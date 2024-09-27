require('dotenv').config()
const express = require('express');
const app = express();

const cors = require('cors');

const contactRoutes = require('./routes/contact.routes');

app.use(cors(
    {
        origin: ['https://devsumukha.vercel.app/'],
        methods: ['GET','POST'],
        credentials: true
    }
));
app.use(express.json());

app.use('/api/user',contactRoutes);


app.listen(process.env.PORT,()=>{
    console.log('server started');
});