import express from "express";
import App from "../../components/App";
import React from "react";
import { renderToString } from "react-dom/server";
import hbs from "handlebars";
import serialize from "serialize-javascript";
import appointmentsByMonth from "../models/index";

const router = express.Router();

router.get("/:id", async (req, res) => {
  await appointmentsByMonth(Number(req.params.id), response => {
    console.log(response[0][0])
    res.send(response[0]);
  });
});


router.get("/", async (req, res) => {
  let month = new Date().getMonth();
  await appointmentsByMonth(month, response => {
    console.log(response[0][0])
    const theHtml = `
  <head>
  <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
  <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  </head>
  <body>
  <script>window.__SCHEDULE__ = ${serialize(response[0])}</script>
  <div id="root"></div>
  <script src="/app.js" charset="utf-8"></script>
  
  <link rel="stylesheet" type="text/css" href="/app.css">
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
});

export default router;
