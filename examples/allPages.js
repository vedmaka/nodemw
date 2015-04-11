/**
 * Example script getting the list of all pages
 */
'use strict';

var bot = require('..'),
	client = new bot({
		server: 'poznan.wikia.com',
		path: '',
		debug: true
	});

client.getAllPages(function(err, pages) {
	console.log('All pages: %d', pages.length);
	console.log(JSON.stringify(pages.slice(0, 50)));
});
