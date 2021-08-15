var loadQueue = new createjs.LoadQueue();
var loadDone = [];
var loadNeeded = [
	"bonziBlack",
	"bonziBlue",
	"bonziBrown",
	"bonziGreen",
	"bonziPurple",
	"bonziRed",
	"gd",
	"bonziYellow",
	"bonziOrange",
	"bonziWhite",
	"rover",
	"clippy",
	"peedy",
	"merlin",
	"unbojih",
	"vargskelethor",
	"bonziGray",
	"ghost",
	"robby",
	"packetman",
	"topjej"
];

$(window).load(function() {
	$("#login_card").show();
	$("#login_load").hide();

	loadBonzis();
});

function loadBonzis(callback) {
	loadQueue.loadManifest([
		{id: "bonziBlack", src:"./img/bonzi/black.png"},
		{id: "bonziBlue", src:"./img/bonzi/blue.png"},
		{id: "bonziBrown", src:"./img/bonzi/brown.png"},
		{id: "bonziGreen", src:"./img/bonzi/green.png"},
		{id: "bonziPurple", src:"./img/bonzi/purple.png"},
		{id: "bonziRed", src:"./img/bonzi/red.png"},
		{id: "gd", src:"./img/bonzi/gd.png"},
		{id: "bonziYellow", src:"./img/bonzi/yellow.png"},
		{id: "clippy", src:"./img/bonzi/clippy.png"},
		{id: "peedy", src:"./img/bonzi/peedy.png"},
		{id: "merlin", src:"./img/bonzi/merlin.png"},
		{id: "packetman", src:"./img/bonzi/packetman.png"},
		{id: "rover", src:"./img/bonzi/rover.png"},
		{id: "bonziOrange", src:"./img/bonzi/orange.png"},
		{id: "bonziWhite", src:"./img/bonzi/white.png"},
		{id: "bonziGray", src:"./img/bonzi/gray.png"},
		{id: "vargskelethor", src:"./img/bonzi/vargskelethor.png"},
		{id: "ghost", src:"./img/bonzi/ghost.png"},
		{id: "robby", src:"./img/bonzi/robby.png"},
		{id: "unbojih", src:"./img/bonzi/unbojih.png"},
		{id: "topjej", src:"./img/misc/topjej.png"}
	]);
	loadQueue.on("fileload", function(e) {
		loadDone.push(e.item.id);
	}, this);
	if (callback)
		loadQueue.on("complete", callback, this);
}