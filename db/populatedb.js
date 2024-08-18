const { Client } = require("pg");
require("dotenv").config();

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name VARCHAR ( 30 ),
        message VARCHAR ( 255 )
    );

    INSERT INTO messages (name, message)
    VALUES
        ('Charles', 'You can send new message by clicking ''New message'''),
        ('Me', 'If you put User as ''Me'', your message will be on the right'),
        ('Bob', 'If you click on message you can see more info about it');
`;

const main = async function () {
    try {
        const connectionString = process.argv[2];
        if (!connectionString) {
            console.error('Please provide the database connection string as an argument.');
            process.exit(1);
        }

        console.log('Seeding...');
        const client = new Client({ connectionString });

        await client.connect();
        await client.query(SQL);
        await client.end();

        console.log('Done');
    } catch (error) {
        console.error('Error during seeding: ', error);
        process.exit(1);
    }
};

main();
