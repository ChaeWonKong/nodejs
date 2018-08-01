const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const path = require('path');
const template = require('./static/template.js');

var app = http.createServer(function(request, response){
	const _url = request.url;
	const queryData = url.parse(_url, true).query;
	const pathname = url.parse(_url, true).pathname;

	if (pathname === '/') {
		if (queryData.id === undefined) {
			fs.readdir('./data', function(err, filelist){
				const title = 'Welcome';
				const description = "Hello, Leon Kong's Blog";
				const list = template.list(filelist);
				const html = template.HTML(title, list, 
					`<h2>${title}</h2><p>${description}</p>`,
					`<a href="/create">create</a>`,
					);
				response.writeHead(200);
				response.end(html);
			});
		} else {
			fs.readdir('./data', function(err, filelist) {
				fs.readFile(`data/${id}`, 'utf8', function(err, description){
					const title = queryData.id;
					const list = template.list(filelist);
					const html = template.HTML(title, list, 
						`<h2>${title}</h2><p>${description}</p>`,
						`
			              <a href="/create">create</a>
			              <a href="/update?id=${sanitizedTitle}">update</a>
			              <form action="/delete_process" method="post">
			                <input type="hidden" name="id" value="${sanitizedTitle}">
			                <button type="submit">delete</button>
			              </form>
			            `
						);
					response.writeHead(200);
					response.end(html);
				});
			});
		}
	} else {
		response.writeHead(404);
		response.end('Not Found');
	}
});
app.listen(3000);