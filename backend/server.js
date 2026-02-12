const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/user.route');
const categoryRouter = require('./routes/category.route');
const productRouter = require('./routes/product.route');
require('dotenv').config();

//middleware
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/category', categoryRouter);
app.use('/api/product',productRouter);


app.get('/', (req, res) => {
    res.send('Home Page')
})


const port = process.env.PORT;

mongoose.connect(process.env.MONGO_DB_URI)
  .then(() => console.log('Mongodb Connected!'));


app.listen(port, () => {
    console.log("server running...")
    console.log(`http://localhost:${port}`)

})