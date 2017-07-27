function(context, args) { // target:#s.t1npc.loc
	if (!args || !args.target) {
		return {ok:false, msg:"usage: youruser.t1crack {target:#s.t1npc.loc}"}
	}
	// because lock values are always the same, i define them here
	let ez = ["open", "unlock", "release"];
	let primeNums = [2,3,5,7,11,13,17,19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
	let colors = ["red", "orange", "yellow", "green", "lime", "blue", "cyan", "purple"];
	let l0cket = ["6hh8xw", "cmppiq", "sa23uw", "tvfkyq", "uphlaw", "vc2c7q", "xwz7ja"]
	// this is used to call the script with args {} so i can find the lock type
	let lock = {};
	// i define the regex values here
	let regexUnlocked = /(LOCK_UNLOCKED)\s(ez_[0-9]{2}|c00[1-3]|l0cket)/g;
	let regexLocked = /LOCK_ERROR/g;
	
	//used for development purposes, also gives output
	function logicController() {
		
		return whatever;
	}
	return logicController();
}