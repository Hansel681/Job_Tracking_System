const express = require('express ');
const app = express();
const port = 3000
app.get('/', (require, res) => {
    res.send('Hello from the backend');
});

app.listen(port, () => {
    console.log(`server is runnon on http://localhost:${ports}`);
});