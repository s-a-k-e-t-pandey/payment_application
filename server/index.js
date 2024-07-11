const express = require('express')
const AccRouter = require('./routes/account')
const UserRouter = require('./routes/user')
const cors = require('cors')

const app = express();

app.use(cors());

app.use(express.json())

app.use('/api/v1', UserRouter)
app.use('/api/v1', AccRouter)

app.listen(3000);