function(context, args) { // target:#s.t1npc.loc
	if (!args || !args.target) {
		return {ok:false, msg:"usage: youruser.t1crack {target:#s.t1npc.loc}"}
	}
	//used for development purposes, also gives output
	function logicController() {
		return whatever;
	}
	return logicController();
}
