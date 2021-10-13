import { getInput, setOutput, setFailed } from '@actions/core';
import { context } from '@actions/github';
import { EpubPress } from 'epub-press-js@0.5.3';

try {
	const url = getInput('url'); //kk
	const title = getInput('title'); //kk
	// Get the JSON webhook payload for the event that triggered the workflow
	const payload = JSON.stringify(context.payload, undefined, 2);
	console.log(`The event payload: ${payload}`);
	const ebook = new EpubPress({
		title: title,
		description: 'eBook-friendly version',
		urls: [
			url
		]
	});
	ebook.publish().
		then(() => {
			ebook.download();
		}).
		then(() => {
			console.log('Success!');
			setOutput("feedback", "ok");
		})
		.catch(error => {
			setOutput("feedback", `Error: ${error}`);
	});
} catch (error) {
	setFailed(error.message);
}