import "dotenv/config";
import express from "express";
import { engine } from 'express-handlebars';
import cors from 'cors';
import indexRoutes from "./routes/api.routes";
import path from 'path';

const app = express();

//Templates
app.set('view engine', 'hbs');
app.set('views', './src/views');
app.engine('hbs',engine({
    extname: 'hbs',
    defaultLayout: '',
    layoutsDir: '',
}))

//Middleware
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(indexRoutes);







export default app;