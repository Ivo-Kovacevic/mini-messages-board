const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

const showMessages = asyncHandler(async (req, res) => {
    const messages = await db.getAllMessages();
    res.render("index", { messages });
});

const getMessage = asyncHandler(async (req, res) => {
    res.render("form");
});

const storeMessage = asyncHandler(async (req, res) => {
    const { messageAuthor, messageContent } = req.body;
    await db.insertNewMessage(messageAuthor, messageContent);
    res.redirect("/");
});

const showMessage = asyncHandler(async (req, res) => {
    const messageId = parseInt(decodeURIComponent(req.params.id));
    const messageDetail = await db.findMessage(messageId);
    res.render("message-details", { messageDetail });
});

const deleteMessage = asyncHandler(async (req, res) => {
    const { id } = req.params;
    await db.deleteMessage(id);
    res.redirect("/");
});

module.exports = {
    showMessages,
    getMessage,
    storeMessage,
    showMessage,
    deleteMessage,
};
