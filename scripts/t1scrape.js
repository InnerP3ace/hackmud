function(context, args) // target:#s.t1npc.corp
{
	// this formats the output to one line
	function format(response) {
		return response.split("\n").join(" ")
	}
	// this whole process returns an array of regex matches, then put it in an array
	function pubpages(regex, response) {
	let matches = regex.exec(response);
	let resultsofmatch = []
	while (matches) {
		if (matches.index === regex.lastIndex) {
			regex.lastIndex++;
		}
		matches.forEach((match, groupIndex) => {
			if (groupIndex) {
			resultsofmatch.push(match)
			}
		})
		matches = regex.exec(response);
	}
	return resultsofmatch;
	}
	
	function logincontroller() {
		let response = format(args.target.call());
		let regex = /\s(\w+)\s\|/g;
		return pubpages(regex, response)
	}
	return logincontroller()
}
