function(context, args) { // target:#s.t3.corp, username:"username", pin:"4nums"}
	//puts the string on one line
	function formatString(stringToFormat) {
		return stringToFormat.split("\n").join(" ");
	}
	function logicController() {
		let response = formatString(args.target.call({username:args.username, pin:args.pin}));
		return response;
	}
	return logicController();
}