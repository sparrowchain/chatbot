const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());


app.get('*', (req,res) => {
 res.sendFile(path.join(__dirname, 'build/index.html'));
});

const port = process.env.PORT || 80;
app.listen(port, () => {
 console.log('Listening on port', port);
})
