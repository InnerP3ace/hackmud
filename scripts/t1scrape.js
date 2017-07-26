function(context, args) // target:#s.t1npc.corp
{
	// this formats the output to one line
	function format(ret) {
		return ret.split("\n").join(" ")
	}
	// this whole process returns an array of regex matches, then put it in an array
	function pubpages(regex, ret) {
	let matches;
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
	}
	return resultsofmatch;
	}
	
	function logincontroller() {
		let ret = format(args.target.call());
		let regex = /\s(\w+)\s\|/g;
		return pubpages(regex, ret)
	}
	let target = args.target; // stores the autocomplete (target)
	
	return logincontroller()
}
