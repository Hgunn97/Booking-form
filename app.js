const express = require('express');
const app = express();
const mongoose = require("mongoose")
const {mongoURL} = require('./keys')
const ejs = require('ejs')
const bodyParser = require('body-parser')

const port = 4000;

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const postSchema = {
    title: String,
    description: String,
    date: Date,
    author: String
};

const Post = mongoose.model("Bookings", postSchema);

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));

app.get('/', (req, res) => {
        res.render('home')
})

app.post('/compose', (req, res) => {
    const post = new Post({
        title: req.body.postTitle,
        description: req.body.postDescription,
        date: req.body.postDate,
        author: req.body.postAuthor
    })

    post.save(function (err) {
        if(!err){
            res.redirect("/")
        }
    });
});

app.get('/posts', (req, res) => {
    Post.find({}, (err, posts) => {
        res.render('Posts', {
            posts: posts
        })
    })
})

app.get('/posts/:postId', (req, res) => {
    const requestedPostId = req.params.postId;
    Post.findOne({ _id: requestedPostId }, (err, post) => {
        res.render("post", {
            title: post.title,
            description: post.description,
            date: post.date,
            author: post.author
        });
    });
});

app.get("/compose", (req, res) => {
    res.render("compose")
})

//Listen to server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})