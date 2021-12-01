import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

// routes
import productRoutes from './routes/productRoutes.js';

const PORT = 3000;
const app = express();

mongoose.connect('some_random_url', { useNewUrlParser: true })

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/product/', productRoutes);

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});


export default app;