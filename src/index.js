import express from 'express';
import './Config/dotenv.js'
import { router } from './routes.js';

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

app.listen(process.env.PORT)