/**
 * Example script getting pages from "Bosons" category on English Wikipedia
 *
 * @see http://en.wikipedia.org/wiki/Category:Bosons
 * @see http://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category%3ABosons&cmlimit=500&format=json
 */

var bot = require('../lib/bot').bot;

var client = new bot({
	server: 'en.wikipedia.org',
 	path: '/w',
	debug: false
});

client.getPagesInCategory('Bosons', function(pages) {
	console.log(JSON.stringify(pages, null, '\t'));
});
