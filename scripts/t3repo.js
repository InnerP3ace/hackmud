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
	//array "pages" has to be lowercase, so its done here
	function arrayToLowerCase(array) {
		array = array.join("~").toLowerCase()
		array = array.split("~")
		return array;
	}
	//the calendar will have to be searched for indexes, and store them for later, so its done using this function
	// function scanCalendar(listOfIndexes) {
		// for (var d = -48; d > 48; d+12) {
			// listOfIndexes
		// }
		// return listOfIndexes;
	// }
	function logicController() {
		//stores all the args
		let currentArgs = {username:args.username, pin:args.pin};
		//calls the script
		let response = formatString(args.target.call(currentArgs));
		//get the pages
		let pages = search(/\+\s+`V(\w+\s?\w+?)`\s+\+|\|\s+`V(\w+\s?\w+?)`\s+\|/g, response);
		//get the navigation arg
		let pageNav = search(/\s{2}`N(\w+)`\s{2}/g, response);
		//this is where it should add them together, and call the calendar
		pages = arrayToLowerCase(pages);
		currentArgs[pageNav] = pages[2]
		response = args.target.call(currentArgs);
		//i could have used a loop, but there seemed to be some issues with that
		let calNav = ["d"];
		let indexRead = -48;
		currentArgs[calNav] = indexRead;
		response = args.target.call(currentArgs);
		let indexes1 = search(/-\s(\w+)\s|\|\s(\w+)\s|\|\s(\w+)\s-/g, response)
		indexRead = -36;
		currentArgs[calNav] = indexRead;
		response = args.target.call(currentArgs);
		let indexes2 = search(/-\s(\w+)\s|\|\s(\w+)\s|\|\s(\w+)\s-/g, response)
		indexRead = -24;
		currentArgs[calNav] = indexRead;
		response = args.target.call(currentArgs);
		let indexes3 = search(/-\s(\w+)\s|\|\s(\w+)\s|\|\s(\w+)\s-/g, response)
		indexRead = -12;
		currentArgs[calNav] = indexRead;
		response = args.target.call(currentArgs);
		let indexes4 = search(/-\s(\w+)\s|\|\s(\w+)\s|\|\s(\w+)\s-/g, response)
		indexRead = 0;
		currentArgs[calNav] = indexRead;
		response = args.target.call(currentArgs);
		let indexes5 = search(/-\s(\w+)\s|\|\s(\w+)\s|\|\s(\w+)\s-/g, response)
		indexRead = 12;
		currentArgs[calNav] = indexRead;
		response = args.target.call(currentArgs);
		let indexes6 = search(/-\s(\w+)\s|\|\s(\w+)\s|\|\s(\w+)\s-/g, response)
		indexRead = 24;
		currentArgs[calNav] = indexRead;
		response = args.target.call(currentArgs);
		let indexes7 = search(/-\s(\w+)\s|\|\s(\w+)\s|\|\s(\w+)\s-/g, response)
		indexRead = 36;
		currentArgs[calNav] = indexRead;
		response = args.target.call(currentArgs);
		let indexes8 = search(/-\s(\w+)\s|\|\s(\w+)\s|\|\s(\w+)\s-/g, response)
		indexRead = 48;
		currentArgs[calNav] = indexRead;
		response = args.target.call(currentArgs);
		let indexes9 = search(/-\s(\w+)\s|\|\s(\w+)\s|\|\s(\w+)\s-/g, response)
		let finalIndex = indexes1.concat(indexes2, indexes3, indexes4, indexes5, indexes6, indexes7, indexes8, indexes9)
		return #D(finalIndex);
	}
	return logicController();
}