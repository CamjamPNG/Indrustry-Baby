const { Plugin } = require('powercord/entities');
window.lil = new Audio('https://v3-fastupload.s3-accelerate.amazonaws.com/1628170697-Lil%20Nas%20X%2C%20Jack%20Harlow%20-%20INDUSTRY%20BABY%20%28Official%20Video%29.mp3?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIASQBHBZCRVR4NVFHK%2F20210805%2Fap-southeast-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210805T133831Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=1e6d499d27de94092028d9e9c46ce3e1b2b880799c7a5a6af54a943811d90e85');
const Settings = require('./Settings');

module.exports = class Lofi extends Plugin {
	updateVolume() {
		window.lil.volume = this.settings.get('volume', 1);
	}

	startPlugin() {
		window.lil.pause();
		window.lil.loop = true;
		window.lil.volume = this.settings.get('volume', 1);
		window.lil.play();
		powercord.api.settings.registerSettings(this.entityID, {
			category: this.entityID,
			label: 'Industry Baby',
			render: Settings,
		});
	}

	pluginWillUnload() {
		window.lil.pause();
		powercord.api.settings.unregisterSettings(this.entityID);
	}
};
