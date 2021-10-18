const core = require('@actions/core');
const github = require('@actions/github');
const EpubPress = require('epub-press-js');

async function run() {
	try {
		const url = core.getInput('url');
		title = decodeURIComponent(url.substring(url.indexOf("/wiki/")).substring(6))
		console.log(title)
		const ebook = new EpubPress({
		    title: title,
		    description: 'Wikipedia: ' + url,
		    urls: [url]
		});
		ebook.publish().
		  then(() => 
		    ebook.download()).
		  catch(error => 
		    core.setFailed(error)
		);
		console.log('before')
		const octokit = github.getOctokit("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");
		console.log('after')
		const { data: result } = await octokit.request('GET /users/ebookipedia/packages/maven/java', {
		  package_type: 'maven',
		  package_name: 'java',
		  username: 'ebookipedia'
		})
		console.log(result)
	} catch (error) {
		core.setFailed(error.message);
	}
}
run()
