const core = require('@actions/core');
const github = require('@actions/github');
const EpubPress = require('epub-press-js');

try {
	console.log(JSON.stringify(github))
	//console.log(JSON.stringify(core))
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
