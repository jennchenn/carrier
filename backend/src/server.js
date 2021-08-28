const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });
const cors = require('cors');

const health = require('./routes/health/health.routes');
const user = require('./routes/user/user.routes');
const group = require('./routes/group/group.routes');

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
// app.get('/posts/:groupId');
// app.get('post/:postId');
// app.get('post/reply/:questionId');
// app.post('post/reply');
module.exports = app;
