function(context, args)  // target:#s.t1npc.corp
{
	let ret = "";
	// formats the string to one line, no \n.
	function formatString(stringToFormat) {
		return stringToFormat.split("\n").join(" ");
	}
	// searches the front page for public access pages.
	// regex only returns a single match, so it is called
	// multiple times until it is done.
	function pubAccessPageSearch(regex, response) {
		let resultOfMatch = [];
		let matches = regex.exec(response);
		while (matches) {
			if (matches.index === regex.lastIndex) {
				regex.lastIndex++;
			}
			matches.forEach((match, groupIndex) => {
				if (groupIndex) {
					resultOfMatch.push(match)
				}
			})
			matches = regex.exec(response);
		}
		return resultOfMatch;
	}
	// main source of output.
	function logicController() {
		let response = formatString(args.target.call());
		let regex = /\s(\w+)\s\|/g;
		return pubAccessPageSearch(regex, response);
	}
	return logicController();
}