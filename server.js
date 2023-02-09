const express = require("express");
const path = require('path');
const app = express();
const morgan = require('morgan')
const transactions = require("./routes/transactions");
const userRouter = require("./routes/userRoutes");
const cors = require('cors')
const connectDB = require('./config/db');
const dotenv = require('dotenv')

dotenv.config({ path: './config/config.env' });

connectDB();

app.use(express.json())
app.use(cors())
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

app.use('/users',userRouter)
app.use('/transactions',transactions)

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

