import express from 'express';
import React from 'react';
import { renderToString } from "react-dom/server";
import Home from '../containers/Home';

const app = express();
app.use(express.static('public'));

const content = renderToString(<Home />)
app.get('/', (req, res) => res.send(
    `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <meta name="description" content="简书是一个优质的创作社区，在这里，你可以任性地创作，一篇短文、一张照片、一首诗、一幅画……我们相信，每个人都是生活中的艺术家，有着无穷的创造力。">
    <meta name="keywords" content="简书,简书官网,图文编辑软件,简书下载,图文创作,创作软件,原创社区,小说,散文,写作,阅读">
    <title>React - 创作你的创作</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    
    <div id="root">${content}</div>
    <script src='/index.js'></script>   
  </body>
</html>

    `
)
);

app.listen(3000)