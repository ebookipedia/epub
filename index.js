const core = require('@actions/core');
const github = require('@actions/github');

try {
  const nameToGreet = core.getInput('who-to-greet'); //kk
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
  const ebook = new EpubPress({
    title: 'Abiogenesis',
    description: 'eBook-friendly mirror of the Wikipedia article',
    urls: [
        'http://es.wikipedia.org/Abiogenesis'
    ]
  });
} catch (error) {
  core.setFailed(error.message);
}