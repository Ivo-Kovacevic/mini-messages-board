const asyncHandler = require('express-async-handler');

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
  

const showMessages = asyncHandler(async (req, res) => {
    res.render('index', { messages: messages });
});

const getMessage = asyncHandler(async (req, res) => {
    res.render('form');
});

const storeMessage = asyncHandler(async (req, res) => {
    messageText = req.body.messageContent;
    messageUser = req.body.messageAuthor;
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect('/');
});

module.exports = { showMessages, getMessage, storeMessage };