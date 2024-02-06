const Parser = require('rss-parser');
let parser = new Parser();

const date_fns = require('date-fns');

module.exports = async function() {

	let feed = await parser.parseURL('https://medium.com/feed/@cfjedimaster');

	feed.items.forEach(f => {
		f.niceDate = date_fns.formatISO(date_fns.parseISO(f.isoDate), {representation: 'date'});

	});
	return feed.items;
	
};