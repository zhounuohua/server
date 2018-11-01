import express from 'express';
import React from 'react';
import { renderToString } from "react-dom/server";
import Home from './containers/Home';

const app = express();
app.get('/', (req, res) => res.send(renderToString(<Home />))
);

app.listen(3000)