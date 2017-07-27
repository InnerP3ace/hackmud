function(context, args)  // target:#s.t1npc.corp
{
	if (!args || !args.target) {
		return {ok:false, msg:"usage: youruser.t1scrape {target:#s.t1npc.corp}"}
	}
	
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
			resultOfMatch.push(matches[1] || matches[2] || matches[3])
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
		// collects the info
		let usernames = search(/([A-Za-z0-9_-]+)\sof\sproject|-{2}\s(\w+)\s/g, response);
		let projects = search(/continues\son\s([A-Za-z0-9_()]+)|on\s([A-Za-z0-9_()]+)\sprogress/g, response);
		page[navArg] = pubPages[1];
		response = args.target.call(page);
		let password = search(/\sstrategy\s(\w+)\s/g, response);
		// displays all the info
		return [["`5usernames`", usernames], ["`5projects`", projects], ["`5password`", password]];
	}
	return logicController();
}