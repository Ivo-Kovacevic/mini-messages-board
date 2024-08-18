const pool = require("./pool");

const getAllMessages = async () => {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
};

const insertNewMessage = async (name, message) => {
    await pool.query("INSERT INTO messages (name, message) VALUES ($1, $2)", [
        name,
        message,
    ]);
};

const findMessage = async (messageId) => {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
        messageId,
    ]);
    const [messageDetail] = rows;
    return messageDetail;
};

const deleteMessage = async (messageId) => {
    await pool.query("DELETE FROM messages WHERE id = $1", [messageId]);
};

module.exports = {
    getAllMessages,
    insertNewMessage,
    findMessage,
    deleteMessage,
};
