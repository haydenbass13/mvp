import express from "express";
import App from "../../components/App";
import React from "react";
import { renderToString } from "react-dom/server";
import hbs from "handlebars";
import serialize from "serialize-javascript";

const router = express.Router();

router.get("/", (req, res) => {
  const theHtml = `
<head>
  <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
   <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
   <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
</head>
<body>
   <script>window.__SCHEDULE__ = ${serialize(null)}</script>
   <script>window.__EMPLOYEE__ = ${serialize(req.params.employee)}</script>
   <div id="root"></div>
   <script src="/app.js" charset="utf-8"></script>

</body>
`;
  const hbsTemplate = hbs.compile(theHtml);
  const reactComp = renderToString(<App />);
  const htmlToSend = hbsTemplate({ reviews: reactComp });
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.status(200).send(htmlToSend);
});

router.post("/", (req, res) => {
  res.send("router post working");
});

router.put("/", (req, res) => {
  res.send("router put working");
});

export default router;
