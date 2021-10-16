const core = require('@actions/core');
const EpubPress = require('epub-press-js');

try {
	console.log("Hello, World!")
	/*
	const url = core.getInput('url'); //kk
	const title = core.getInput('title'); //kk
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
