//importing nodejs modules
const express = require('express');
const cors = require('cors');
const Fuse = require('fuse.js');
const bcrypt = require('bcrypt');
const path = require('path');
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
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
});
//creating routes
app.post('/', (req, res) => {
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
    //console.log(user);
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
        const data = await Blog.find({}, { title: 1, blogPreview: 1, likes: 1, authorname: 1, _id: 1 }, { sort: { date: -1, likes: -1 } });
        console.log("Tile data sent successfully");
        // console.log(data);
        res.send(data);

    } catch (err) {
        console.log(err);
    }
});

//blog tiles image logic
app.get('/tile-image/:id', async (req, res) => {
    //console.log(`./uploads/${(req.params.id).replace(':','')}.jpg`);
    //console.log(`/uploads/${(req.params.id).replace(':','')}.jpg`);
    res.send(`/uploads/${(req.params.id).replace(':', '')}.jpg`);
});

//blog page logic
app.get('/blog/:id', async (req, res) => {
    try {
        const data = await Blog.findOne({ _id: req.params.id });
        console.log("Blog data sent successfully");
        // console.log(data);
        res.send(data);

    } catch (err) {
        console.log(err);
    }
});

//blog page liking logic
app.post('/blog/like/:id', async (req, res) => {
    //console.log(req.params.id);
    uid = req.params.id.replace(':', '').split('+')[1];
    bid = req.params.id.replace(':', '').split('+')[0];
    // console.log(uid);
    // console.log(bid);
    try {
        const data = await Blog.findOne({ _id: bid }, { likesArr: 1, likes: 1 });
        if (data.likesArr.includes(uid)) {
            data.likes = data.likes - 1;
            data.likesArr = data.likesArr.filter((id) => {
                return id != uid;
            })
            await data.save();
            const response = { likes: `${data.likes}`, liked: false };
            res.send(response);
        }
        else {
            data.likesArr.push(uid);
            data.likes = data.likes + 1;
            await data.save();
            const response = { likes: `${data.likes}`, liked: true };
            res.send(response);
        }
    } catch (err) {
        console.log(err);
    }
})

//blog page comment post logic
app.post('/blog/comment/:id', async (req, res) => {
    //console.log(req.body.comment);
    bid = req.params.id.replace(':', '').split('+')[0];
    uid = req.params.id.replace(':', '').split('+')[1];
    try {
        const data = await Blog.findOne({ _id: bid }, { comments: 1 });
        const comment = { comment: req.body.comment, commenterid: uid, commentername: req.body.name };
        data.comments.push(comment);
        await data.save();
        res.send('Commented');
    } catch (err) {
        console.log(err);
    }
});

//blog page comment get logic
app.get('/blog/get-comments/:id', async (req, res) => {
    //console.log(req.body.comment);
    bid = req.params.id.replace(':', '').split('+')[0];
    try {
        const data = await Blog.findOne({ _id: bid }, { comments: 1 });
        res.send(data.comments);
    } catch (err) {
        console.log(err);
    }
});

//blog search logic
app.get('/search/:query', async (req, res) => {
    //console.log(req.params.query);
    const query = req.params.query.replace(':', '').toLowerCase();
    try {
        let data = await Blog.find({}, { title: 1, blogPreview: 1, likes: 1, authorname: 1, _id: 1, content: 1, tags:1 }, { sort: { date: -1, likes: -1 } });
        let tags = '';
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].tags.length; j++) {
                tags = tags + ', ' + data[i].tags[j];
            }
            data[i].newTags = tags;
            tags = '';
            //console.log(data[i].newTags);
        }
        const options = {
            includeScore: true,
            keys: [{name: 'title', weight: '0.2'}, {name: 'content', weight: 0.5},{name: 'newTags', weight: 0.3}]
        }
        const fuse = new Fuse(data, options);
        let result = fuse.search(query);
                
        //console.log(result);
        res.send(result);
    } catch (err) {
        console.log(err);
    }
});

//author page logic
app.get('/author-page/:id', async (req, res) => {
    //console.log(req.params.id);
    const id = req.params.id.replace(':', '');
    try {
        const data = await Blog.find({ authorid: id }, { title: 1, blogPreview: 1, likes: 1, authorname: 1, _id: 1 }, { sort: { date: -1, likes: -1 } });
        //console.log(data);
        res.send(data);
    } catch (err) {
        console.log(err);
    }
});