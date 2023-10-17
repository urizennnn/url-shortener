const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes/url');
const connect = require('./db/connectDb');
require('dotenv').config();

// Middleware
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/api/url', routes);

app.get('/', (req, res) => {
    res.send('Hello').status(200);
});

(async () => {
    try {
        const connectionString = process.env.CONNECTION_STRING || undefined;
        await connect(connectionString);
        console.log("Connected to the database");
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Something went wrong:", error.message);
    }
})();
