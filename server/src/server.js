import express from 'express'
import bodyParser from 'body-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import moviesRoutes from './routes/movies.routes'
import throttle from "express-throttle";
const PORT = "1337";
const app = express()
app.use(throttle({ "burst": 10, "rate": "5/s" }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compress())
app.use(helmet())
app.use(cors())

app.use('/', moviesRoutes)

app.listen(PORT, (err) => {
	if (err) console.log("error", err);
	console.log(`> Running on localhost:${PORT}`);
});