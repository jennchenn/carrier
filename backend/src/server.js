const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });
const cors = require('cors');

const health = require('./routes/health/health.routes');
const user = require('./routes/user/user.routes');
const group = require('./routes/group/group.routes');
const post = require('./routes/post/post.routes');
const question = require('./routes/question/question.routes');

const authentication = require('./middleware/authentication');

const app = express();

// Connect to the database
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', (err) => {
  console.log(`Error connecting to MongoDB: ${err}`);
  process.exit();
});
mongoose.connection.on('connected', () => {
  console.log('Connected to database!');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  },
    {
      origin: 'https://carrierpigeon.netlify.app',
      credentials: true
    })
);
app.use(cookieParser());

// Routes
app.get('/health', health.health);
app.post('/user/register', user.register);
app.post('/user/login', user.login);
app.get('/user/info/:email', user.find);
app.post('/group/create', authentication, group.create);
app.get('/group/info/:id', group.find);
app.post('/group/invite', group.invite);
app.get('/question/:id', question.find);
app.post('/question', question.create);
app.get('/post/:postId', post.find);
app.get('/posts/:groupId', post.findByGroup);
app.post('/post', post.create);
app.put('/post/question', post.addQuestions);
app.get('/post/reply/:postId/:questionId', post.findReplies);
app.post('/post/reply', authentication, post.createReply);
module.exports = app;
