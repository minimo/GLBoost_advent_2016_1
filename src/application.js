/*
 *  Application.js
 *  2016/06/07
 *  @auther minimo  
 *  This Program is MIT license.
 */

sample = {};

phina.define("sample.Application", {
    superClass: "phina.display.CanvasApp",

	_static: {
        version: "0.0.1",
        assets: {
            "preload": {
                font: {
                    "UbuntuMono":   "fonts/UbuntuMono-Bold.ttf",
                    "Orbitron":     "fonts/Orbitron-Regular.ttf",
                },
            },
            "common": {
                mqo: {
                    "gradriel":     "assets/gradriel_pose.mqo",
                    "ground":       "assets/ground.mqo",
                },
            },
        },
    },

    init: function() {
        this.superInit({
            query: '#world',
            width: SC_W,
            height: SC_H,
            backgroundColor: 'rgba(0, 0, 0, 1)',
        });

        this.fps = 60;

        this.replaceScene(sample.SceneFlow());
    },
});
