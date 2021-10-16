const core = require('@actions/core');
const github = require('@actions/github');
const EpubPress = require('epub-press-js');

try {
	const url = core.getInput('url');
	title = url.substring(url.indexOf("/wiki/").substring(6))
	console.log(title)
	/*
	const ebook = new EpubPress({
	    title: title,
	    description: 'An eBook-friendly mirror of a Wikipedia article',
	    urls: [url]
	});
	ebook.publish().
          then(() => 
	    ebook.download()).
          catch(error => 
            core.setFailed(error)
	);
	*/
} catch (error) {
	core.setFailed(error.message);
}
