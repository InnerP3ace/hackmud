function(context, args)  // target:#s.t1npc.corp
{
	let response = args.target.call();
	response = response.split("\n").join(" ");
	let ret = "";
	let regex = /\s(\w+)\s\|/g;
	
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