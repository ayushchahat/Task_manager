const express = require('express');
const connectDb = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();
connectDb();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', require('./routes/taskRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
