const { dialog } = require('electron');
const { Extension, log, INPUT_METHOD, PLATFORMS } = require('deckboard-kit');
const { exec } = require("child_process");

class Amarok extends Extension {
	constructor() {
		super();
		this.name = 'Amarok';
		this.platforms = [PLATFORMS.LINUX];
                this.inputs = [
		    {
			label: 'Amarok',
			value: "amarok",
			icon: 'music',
			color: '#38761D',
                        input: [
                        {
				label: "Control",
				ref: "control",
				type: INPUT_METHOD.INPUT_SELECT,
                                items: [
                                {
					value: "play_pause",
					label: "Play / Pause",
					icon: 'play',
					fontIcon: 'fas',
                                }, {
					value: "stop",
					label: "Stop",
					icon: 'stop',
					fontIcon: 'fas',
                                }, {
					value: "next",
					label: "Next",
					icon: 'fast-forward',
					fontIcon: 'fas',
                                }, {
					value: "previous",
					label: "Previous",
					icon: 'fast-backward',
					fontIcon: 'fas',
                                }, {
					value: "stop_after_current",
					label: "Stop after the current Song",
					icon: 'eject',
					fontIcon: 'fas',
                                }, {
					value: "replay",
					label: "Replay",
					icon: 'redo',
					fontIcon: 'fas',
                                }, {
					value: "toggle_main_window",
					label: "Toggle Main Window",
					icon: 'clone',
					fontIcon: 'fas',
                                }, {
					value: "mute",
					label: "Mute",
					icon: 'mute',
					fontIcon: 'fas',
                                }, {
					value: "increase_volume",
					label: "Increase Volume",
					icon: 'volume-up',
					fontIcon: 'fas',
                                }, {
					icon: 'volume-down',
					fontIcon: 'fas',
					value: "decrease_volume",
					label: "Decrease Volume",
                                },
			    ]
			},
		    ]
		},
	    ];
        this.initExtension();
    }

    // Executes when the extensions loaded every time the app start.
    initExtension() {
		return;
    }

	execute(action, {control}) {
		switch (control) {
		    case 'play_pause': {
			    const playPauseControl ='qdbus org.kde.kglobalaccel /component/amarok invokeShortcut "play_pause"';
				if (control != undefined) {
					console.log(`Running Command: ${playPauseControl}`);
					exec(playPauseControl, (error, stdout) => {
						if (error) {
							dialog.showErrorBox('Command Failed!',`${error}`);
						}
						console.log(`stdout: ${stdout}`);
					});
				}
			}
			    break;
			case 'stop': {
			    const stopControl ='qdbus org.kde.kglobalaccel /component/amarok invokeShortcut "stop"';
				if (control != undefined) {
					console.log(`Running Command: ${stopControl}`);
					exec(stopControl, (error, stdout) => {
						if (error) {
							dialog.showErrorBox('Command Failed!',`${error}`);
						}
						console.log(`stdout: ${stdout}`);
					});
				}
			}	
			    break;
			case 'next': {
			    const nextControl ='qdbus org.kde.kglobalaccel /component/amarok invokeShortcut "next"';
				if (control != undefined) {
					console.log(`Running Command: ${nextControl}`);
					exec(nextControl, (error, stdout) => {
						if (error) {
							dialog.showErrorBox('Command Failed!',`${error}`);
						}
						console.log(`stdout: ${stdout}`);
					});
				}
			}	
			    break;
			case 'previous': {
			    const previousControl ='qdbus org.kde.kglobalaccel /component/amarok invokeShortcut "prev"';
				if (control != undefined) {
					console.log(`Running Command: ${previousControl}`);
					exec(previousControl, (error, stdout) => {
						if (error) {
							dialog.showErrorBox('Command Failed!',`${error}`);
						}
						console.log(`stdout: ${stdout}`);
					});
				}
			}	
			    break;
			case 'stop_after_current': {
			    const stopAfterCurrentControl ='qdbus org.kde.kglobalaccel /component/amarok invokeShortcut "stop_after_current"';
				if (control != undefined) {
					console.log(`Running Command: ${stopAfterCurrentControl}`);
					exec(stopAfterCurrentControl, (error, stdout) => {
						if (error) {
							dialog.showErrorBox('Command Failed!',`${error}`);
						}
						console.log(`stdout: ${stdout}`);
					});
				}
			}	
			    break;
			case 'replay': {
			    const replayControl ='qdbus org.kde.kglobalaccel /component/amarok invokeShortcut "replay"';
				if (control != undefined) {
					console.log(`Running Command: ${replayControl}`);
					exec(replayControl, (error, stdout) => {
						if (error) {
							dialog.showErrorBox('Command Failed!',`${error}`);
						}
						console.log(`stdout: ${stdout}`);
					});
				}
			}	
			    break;
			case 'toggle_main_window': {
			    const toggleMainWindowControl ='qdbus org.kde.kglobalaccel /component/amarok invokeShortcut "toggleMainWindow"';
				if (control != undefined) {
					console.log(`Running Command: ${toggleMainWindowControl}`);
					exec(toggleMainWindowControl, (error, stdout) => {
						if (error) {
							dialog.showErrorBox('Command Failed!',`${error}`);
						}
						console.log(`stdout: ${stdout}`);
					});
				}
			}	
			    break;
			case 'mute': {
			    const muteControl ='qdbus org.kde.kglobalaccel /component/amarok invokeShortcut "mute"';
				if (control != undefined) {
					console.log(`Running Command: ${muteControl}`);
					exec(muteControl, (error, stdout) => {
						if (error) {
							dialog.showErrorBox('Command Failed!',`${error}`);
						}
						console.log(`stdout: ${stdout}`);
					});
				}
			}	
			    break;
			case 'increase_volume': {
			    const increaseVolumeControl ='qdbus org.kde.kglobalaccel /component/amarok invokeShortcut "increaseVolume"';
				if (control != undefined) {
					console.log(`Running Command: ${increaseVolumeControl}`);
					exec(increaseVolumeControl, (error, stdout) => {
						if (error) {
							dialog.showErrorBox('Command Failed!',`${error}`);
						}
						console.log(`stdout: ${stdout}`);
					});
				}
			}	
			    break;
			case 'decrease_volume': {
			    const decreaseVolumeControl ='qdbus org.kde.kglobalaccel /component/amarok invokeShortcut "decreaseVolume"';
				if (control != undefined) {
					console.log(`Running Command: ${decreaseVolumeControl}`);
					exec(decreaseVolumeControl, (error, stdout) => {
						if (error) {
							dialog.showErrorBox('Command Failed!',`${error}`);
						}
						console.log(`stdout: ${stdout}`);
					});
				}
			}	
			    break;
			default:
			    break;
		}
	}
	    
}

module.exports = sendData => new Amarok(sendData);
