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
		let currentArgs = {username:args.username, pin:args.pin};
		//calls the script
		let response = formatString(args.target.call(currentArgs));
		//get the pages
		let pages = search(/\+\s+`V(\w+\s?\w+?)`\s+\+|\|\s+`V(\w+\s?\w+?)`\s+\|/g, response);
		//get the navigation arg
		let pageNav = search(/\s{2}`N(\w+)`\s{2}/g, response);
		//this is where it should add them together, and call the calendar
		response = args.target.call(currentArgs);
		return #D(response);
	}
	return logicController();
}