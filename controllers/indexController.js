const asyncHandler = require('express-async-handler');

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "You can send new message by clicking 'New message'",
      user: "Charles",
      added: new Date()
    },
    {
      text: "If you put User as 'Me', your message will be on the right",
      user: "Me",
      added: new Date()
    },
    {
      text: "If you click on message you can see more info about it",
      user: "Bob",
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

const showMessage = asyncHandler(async (req, res) => {
    const messageText = decodeURIComponent(req.params.text);
    const messageDetail = messages.find(msg => msg.text === messageText);
    res.render('message-details', { messageDetail });
});

module.exports = { showMessages, getMessage, storeMessage, showMessage };