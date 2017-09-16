var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
     'article-one' : {
        title : 'Spandana Article One :)',
        heading : 'Article One',
        date : 'Sep 16, 2017',
        content : `<p>
                    This article-one is to learn JS/CSS through IMAD-Hasura taught by Tanmai:D
                </p>
                <p>
                    Here is some cool stuff have not learnt before!!!
                </p>
                <p>
                    Most amazing things are here ;)
                </p>`
    },
     'article-two' : {
        title : 'Spandana Article Two :)',
        heading : 'Article One',
        date : 'Sep 17, 2017',
        content : `<p>
                    This article-two is to learn JS/CSS through IMAD-Hasura taught by Tanmai:D
                </p>
                <p>
                    Here is some cool stuff have not learnt before!!!
                </p>
                <p>
                    Most amazing things are here ;)
                </p>`
    }
};


function createTemplate(data){
    //var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content= data.content;
    var commomHtmlTemplate =
        `<html>
        <head>
            <title>
               Spandana Artivle
            </title>
            <meta name="viewport" content="width=device-width, intial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" /> 
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <h3>
                   ${heading}
                </h3>
                <hr/>
                <div>
                    ${date}
                </div>
                <hr/>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return commomHtmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.param.articleName;
    res.send(createTemplate(articles[articleName]));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
