const data = 'Hi its data from post.';
const express = require('express');
const path = require('path');
const port = 6000;

// const publicPath = path.join(__dirname, 'views');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); //telling that we r using ejs as template engin

app.get('/', (req, res) => {
  const user = {
    name: 'Ved Chole',
    email: 'vedchole@gamil.com',
    city: 'Pune',
    skills: ['PHP', 'Node', 'Mongo', 'SQL'],
  };
  res.render('profile', { user });
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.listen(port, () => {
  s;
  console.log(`App listening on port =${port}`);
});
