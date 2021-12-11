# basic-node-webserver

Simple exercise for understanding basic webserver functionality using nodejs (sans express) to host and dispatch simple html files.

A request to the plain url (ie: http://localhost:PORT) will redirect to the home page (index.html).
Requests to other urls (ie: /about, /contact-me) will redirect to their corresponding html files.
Requests to urls which do not exist on the webserver will direct to a customizable 404 error page.

Written as part of [the odin project series on nodejs](https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs/lessons/basic-informational-site).
