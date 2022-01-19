const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');

require('dotenv').config();

const app = express();

app.use(cors({
        origin: [`http://88.200.63.148:8081`],
        methods: ['GET', 'POST'],   
        credentials: true    
    }
));
app.use(cookieParser('somesecret'));
app.use(session({
secret:"some",
resave:true,
saveUninitialized: true,
cookie: {expires: 60*2}
}));

// import my custom modules
const novice = require('./routes/novice')
const users = require('./routes/users');
app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.get('/', (req, res) => {
    res.send("<h1>Hello from Express Server!</h1>");
    res.end()
})

app.use('/novice', novice)
app.use('/users', users)

const PORT = process.env.PORT || 5056;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
