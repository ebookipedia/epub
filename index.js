import { getInput, setOutput, setFailed } from '@actions/core';
import { context } from '@actions/github';

try {
	const nameToGreet = getInput('who-to-greet'); //kk
	console.log(`Hello ${nameToGreet}!`);
	const time = (new Date()).toTimeString();
	setOutput("time", time);
	// Get the JSON webhook payload for the event that triggered the workflow
	const payload = JSON.stringify(context.payload, undefined, 2);
	console.log(`The event payload: ${payload}`);
	const ebook = new EpubPress({
		title: 'Abiogenesis',
		description: 'eBook-friendly mirror of the Wikipedia article',
		urls: [
			'http://es.wikipedia.org/Abiogenesis'
		]
	});
} catch (error) {
	setFailed(error.message);
}