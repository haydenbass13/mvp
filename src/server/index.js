import "@babel/polyfill";
import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import router from './routes/index'

const app = express();


app.use(compression());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router)

const port = process.env.PORT || 8000;
app.listen(port, function listenHandler() {
  console.info(`Fully sprinting on port ${port}...`);
});
