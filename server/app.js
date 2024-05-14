import express from "express";
import bodyparser from "body-parser";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import {notFound, errorHandler} from "./middleware/errorHandler.js";
import testRouter from './routes/testRouter.js';
import userRouter from './routes/router.js';
import OneToOneRouter from './routes/oneToOneRoute.js'
import OneToManyRouter from './routes/oneToManyRoute.js';
import MantToManyRouter from './routes/ManyToManyRoute.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json({ limit: '10mb' })); 

app.set("view engine", "ejs");

app.use('/css', express.static(resolve(__dirname, "../public/css")));
app.use('/img', express.static(resolve(__dirname, "../public/img")));
app.use('/js', express.static(resolve(__dirname, "../public/js")));


app.use('/', userRouter);
app.use('/api/test', testRouter);
app.use('/api/user',OneToOneRouter);
app.use('/api/user',OneToManyRouter);
app.use('/api/user',MantToManyRouter);

app.use(notFound);
app.use(errorHandler);

export { app };
