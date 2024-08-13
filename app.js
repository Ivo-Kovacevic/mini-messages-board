const express = require('express');
const path = require('node:path');

const app = express();
const PORT = 8080;

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

  
app.get('/', (req, res) => {
    res.render('index', { messages: messages });
});

app.listen(PORT, () => console.log('Port is live'));