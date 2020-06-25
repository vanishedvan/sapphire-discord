const wi = require("@arcsine/win-info");
const fp = require("find-process");

const config = require("./config.json");

const { Client } = require("discord-rpc");
const client = new Client({ transport: "ipc" });

const start = new Date();

async function update() {
    client.setActivity({
        details: "sapphirebot.com",
        //state: "Playing with Sapphire",
        startTimestamp: start,
        largeImageKey: "sapphire",
        smallImageKey: "mmm",
        largeImageText: "Sapphire",
        smallImageText: "mmm"
    });
}

module.exports = function() {
	update();

	client.on("ready", () => {
		console.log("Connected to Discord.");
		update();
		setInterval(() => {
			update();
		}, 15000);
	});

	console.log("Connecting...");
	client.login({ clientId: config.application.id });
}

process.on("unhandledRejection", console.error);