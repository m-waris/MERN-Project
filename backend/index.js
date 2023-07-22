const express = require('express');
const app = express();
const port = 4000;
const mongodb = require('./db');

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);
app.use('/api', require('./Routes/CreateUsers'));
mongodb().then(() => {
    // Start your Express server or perform other operations that require a database connection
    app.listen(port, () => {
        console.log('Server started on port 4000');
    });
}).catch((error) => {
    console.error('Failed to establish the database connection:', error);
});

