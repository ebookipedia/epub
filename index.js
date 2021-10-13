const core = require('@actions/core');
//const github = require('@actions/github');
const EpubPress = require('epub-press-js');

try {
	const url = core.getInput('url'); //kk
	const title = core.getInput('title'); //kk
	// Get the JSON webhook payload for the event that triggered the workflow
	//const payload = JSON.stringify(github.context.payload, undefined, 2);
	//console.log(`The event payload: ${payload}`);
	const ebook = new EpubPress({
	    title: title,
	    description: 'An eBook-friendly mirror of a Wikipedia article',
	    urls: [url]
	});
	ebook.publish().then(() => 
		ebook.download()).then(() => 
		console.log('Success!')).catch(
		error => core.setFailed(error)
	);
} catch (error) {
	core.setFailed(error.message);
}