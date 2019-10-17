import express from "express";
import bodyParser from "body-parser";
import exphbs from "express-handlebars";

const app = express();

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true
  })
);
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

export default app;
