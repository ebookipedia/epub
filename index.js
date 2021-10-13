const core = require('@actions/core');
const github = require('@actions/github');
const epub = require('epub-press-js');

try {
	const url = core.getInput('url'); //kk
	const title = core.getInput('title'); //kk
	// Get the JSON webhook payload for the event that triggered the workflow
	const payload = JSON.stringify(github.context.payload, undefined, 2);
	console.log(`The event payload: ${payload}`);
	const ebook = new epub.EpubPress({
		title: title,
		description: 'eBook-friendly version',
		urls: [url]
	});
	ebook.publish().
		then(() => {
			ebook.download();
		}).
		then(() => {
			core.setOutput("id", ebook.getId());
		})
		.catch(error => {
			core.setFailed(error);
		}
	);
} catch (error) {
	core.setFailed(error.message);
}