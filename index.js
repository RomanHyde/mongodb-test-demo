// use the schema to add data to the DB

const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter');
const songRouter = require('./routes/songRouter');

const app = express();
const port = process.env.PORT || 5000;

const mongoDB = 'mongodb://localhost:27017/my_songs'
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

const db = mongoose.connection;
db.on('error', console.error.bind(console,'MongoDB connection error:'));

app.use(express.json());
app.use('/song', songRouter);
app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.get('/', (req, res) => {
    res.status(200).send('Hello world!');
});

