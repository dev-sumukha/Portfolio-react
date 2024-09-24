require('dotenv').config()
const express = require('express');
const app = express();

const cors = require('cors');

const contactRoutes = require('./routes/contact.routes');

const corsOptions = {
    origin:'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}

app.use(express.json());
app.use(cors(corsOptions));

app.use('/api/user',contactRoutes);


app.listen(process.env.PORT,()=>{
    console.log('server started');
});