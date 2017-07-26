function(context, args)  // target:#s.t1npc.corp
{
	// formats the string to one line, no \n.
	function formatString(stringToFormat) {
		return stringToFormat.split("\n").join(" ");
	}
	// searches the front page for public access pages.
	// regex only returns a single match, so it is called
	// multiple times until it is done.
	function search(regex, response) {
		let resultOfMatch = [];
		let matches = regex.exec(response);
		while (matches) {
			if (matches.index === regex.lastIndex) {
				regex.lastIndex++;
			}
			resultOfMatch.push(matches[1])
			matches = regex.exec(response);
		}
		return [...new Set(resultOfMatch)];
	}
	// main source of output.
	function logicController() {
		let page = {};
		// gets the page names
		let response = formatString(args.target.call());
		let pubPages = search(/\s(\w+)\s\|/g, response);
		// get navigation arg
		response = formatString(args.target.call({}));
		let navArg = search(/(\w+)\:/g, response);
		// navigation added to page name
		page[navArg] = pubPages[0];
		// get the wall of text on the first page
		response = args.target.call(page);
		let usernames = search(/\-{2}\s(\w+)\s/g, response);
		
		return usernames;
	}
	return logicController();
}