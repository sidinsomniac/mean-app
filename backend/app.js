const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Post = require('./models/post');
const mongoose = require('mongoose');



const connectUrl = 'mongodb+srv://sid:5UTH2Vrh70Fd2u4E@cluster0-rfgny.mongodb.net/message-app?retryWrites=true&w=majority';
const connectConfig = {
    useNewUrlParser:true,
    useUnifiedTopology:true
}

mongoose.connect(connectUrl, connectConfig)
.then(() => {
    console.log("Connected to database!");
})
.catch(() => {
    console.log("Connection failed!");
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

app.post('/api/posts', (req,res,next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    post.save();
    console.log(post);
    res.status(201).json({
        message: 'Post added successfully.'
    });
});

app.get('/api/posts',(req,res,next) => {
    Post.find().then(resData => {
        res.status(200).json({
            message: 'Posts fetched successfully',
            posts: resData
        });
    })
    
});

module.exports = app;