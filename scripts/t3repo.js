function(context, args) { // target:#s.t3.corp, username:"username", pin:"4nums"}
	//puts the string on one line
	function formatString(stringToFormat) {
		return stringToFormat.split("\n").join(" ");
	}
	// same function as in my t1scrape script
	function search(regex, response) {
		let resultOfMatch = [];
		let matches = regex.exec(response);
		while (matches) {
			if (matches.index === regex.lastIndex) {
				regex.lastIndex++;
			}
			resultOfMatch.push(matches[1] || matches[2] || matches[3])
			matches = regex.exec(response);
		}
		return [...new Set(resultOfMatch)];
	}
	function logicController() {
		let regex = /\+\s+(\w+)\s+\+/g;
		let response = formatString(args.target.call({username:args.username, pin:args.pin}));
		response = args.target.call({username:args.username, pin:args.pin})
		let pages = regex.exec(response);
		return pages;
	}
	return logicController();
}