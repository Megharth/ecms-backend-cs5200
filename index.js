import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// routes
import productRoutes from './routes/productRoutes.js';

const PORT = 3000;
const app = express();

dotenv.config();

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true }).then(() => {
    console.log('Connected to DB');
})

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/product/', productRoutes);

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});


export default app;