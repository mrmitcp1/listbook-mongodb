import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import bookRoutes from './src/router/book.router';


const PORT = 3333;
const app = express();
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/book', bookRoutes);
const DB_URL = 'mongodb+srv://Viet:Anhlaai%40111@viet.ygv7f2b.mongodb.net/'
mongoose.connect(DB_URL)
    .then(() => console.log('DB Connected!'))

    .catch(error => console.log('DB connection error:', error.message));

app.use(bodyParser.json());



app.listen(PORT, () => {

    console.log("App running on port: " + PORT)

})
