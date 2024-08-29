const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 5001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const usersFilePath = path.join(__dirname, 'users.json');

const readUsersFile = () => {
    if (!fs.existsSync(usersFilePath)) {
        fs.writeFileSync(usersFilePath, JSON.stringify([]));
    }
    const data = fs.readFileSync(usersFilePath);
    return JSON.parse(data);
};

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const users = readUsersFile();
    const userExists = users.find(user => user.username === username);
    
    if (userExists) {
        return res.status(400).json({ success: false, message: 'Username already exists' });
    }
    
    users.push({ username, password });
    fs.writeFileSync(usersFilePath, JSON.stringify(users));
    res.status(200).json({ success: true, message: 'User registered successfully' });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const users = readUsersFile();
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        res.status(200).json({ success: true, message: 'Login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
