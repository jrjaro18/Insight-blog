//importing nodejs modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const multer = require('multer');
const fs = require('fs');

//importing self made modules
const dbase = require('./database');
const User = require('./models/user_model');
const Blog = require('./models/blog_model');
// Configure multer storage
const upload = multer({ dest: 'uploads/' });

const saltRounds = 10;
//creating an express app and using the modules
const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(express.urlencoded({ extended: true }));

/*connecting to the mongoose database*/ dbase();

const port = 5000;
app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
});
//creating routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

//register logic 
app.post('/register', async (req, res) => {
    const user = req.body;

    bcrypt.hash(user.password, saltRounds, async function (err, hash) {
        try {
            user.password = hash;
            const newUser = new User(user);
            await newUser.save();
            console.log("User created successfully");
            res.send('User created successfully');
        } catch (err) {
            console.log("User already exists");
            res.send('User already exists');
            console.log(err);
        }
    });

});

//login logic
app.post('/login', async (req, res) => {
    const user = req.body;
    console.log(user);
    try {
        const data = await User.findOne({ email: user.email });
        
        if (data) {
            bcrypt.compare(user.password, data.password, function (err, result) {
                if (result == true) {
                    const val = { name: data.name, email: data.email, id: data._id };
                    console.log("User logged in successfully");
                    res.send(val);

                } else {
                    console.log("Incorrect password");
                    res.send('Incorrect password');
                }
            });
        }
        else {
            res.send('User does not exist');
        }
    } catch (err) {
        console.log(err);
    }
});

//blog upload logic
const removeHtmlTags = (str) => {
    return str.replace(/<[^>]*>?/gm, '');
}

app.post('/upload', upload.single('thumbnail'), async (req, res) => {
    const blog = {};
    blog.title = req.body.title;
    blog.content = req.body.content;
    blog.blogPreview = removeHtmlTags(req.body.content).substring(0, 200);
    blog.tags = req.body.tags;
    blog.authorid = req.body.authorid;
    blog.authorname = req.body.authorname;
    try {
        const newBlog = new Blog(blog);
        await newBlog.save();
        res.send('Blog uploaded successfully');
        console.log("Blog uploaded successfully");
        const id = newBlog._id;
        const oldPath = req.file.path;
        const newPath = `./uploads/${id}.jpg`;
        fs.rename(oldPath, newPath, function (err) {
            if (err) throw err
            console.log('Successfully renamed - AKA moved!')
        });
    } catch (err) {
        console.log(err);
    }

});

//blog tiles text logic
app.get('/tile-data', async (req, res) => {
    try {
        const data = await Blog.find({},{ title: 1, blogPreview: 1, likes: 1, authorname: 1, _id: 1});
        console.log("Tile data sent successfully");
        console.log(data);
        res.send(data);

    } catch (err) {
        console.log(err);
    }
});
//blog tiles image logic
app.get('/tile-image/:id', async (req, res) => {
    //console.log(`./uploads/${(req.params.id).replace(':','')}.jpg`);
    console.log(`/uploads/${(req.params.id).replace(':','')}.jpg`);
    res.send(`/uploads/${(req.params.id).replace(':','')}.jpg`);
});

//blog page logic
app.get('/blog/:id', async (req, res) => {
    try {
        const data = await Blog.findOne({ _id: req.params.id });
        console.log("Blog data sent successfully");
        console.log(data);
        res.send(data);

    } catch (err) {
        console.log(err);
    }
});