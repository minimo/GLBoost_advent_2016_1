/*
 *  SceneFlow.js
 *  2016/06/15
 *  @auther minimo  
 *  This Program is MIT license.
 *
 */

phina.define("sample.SceneFlow", {
    superClass: "phina.game.ManagerScene",

    init: function(options) {
        options = options || {};
        this.superInit(options.$safe({
            scenes: [{
                label: "splash",
                className: "sample.SplashScene",
                nextLabel: "load",
            },{
                label: "load",
                className: "sample.LoadingScene",
                arguments: {
                    assetType: "common"
                },
                nextLabel: "main",
            },{
                label: "title",
                className: "sample.TitleScene",
            },{
                label: "main",
                className: "sample.MainScene",
                nextLabel: "title",
            }],
        }));
    }
});
