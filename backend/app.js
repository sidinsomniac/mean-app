const express = require('express');
const app = express();
const bodyParser = require('body-parser');

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
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: 'Post added successfully.'
    });
});

app.get('/api/posts',(req,res,next) => {
    posts = [
        {
            id: '1fds213fd',
            title: 'First server-side post',
            content: 'This is the first post coming from the backend.',
        },
        {
            id: '6k54iyuier',
            title: 'Second server-side post',
            content: 'This is the second post coming from the backend.',
        }
    ]
    res.status(200).json({
        message: 'Posts fetched successfully',
        posts:posts
    });
});

module.exports = app;