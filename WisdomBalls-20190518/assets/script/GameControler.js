// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },

        musicBtn:cc.Node,

        ballPrefab:cc.Prefab,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        let ballObj = cc.instantiate( this.ballPrefab );
        ballObj.x = 100;
        ballObj.y = 100;
        this.node.addChild( ballObj );
        let ballAction1 = cc.moveBy( 2, 100, -100 );
        ballObj.runAction( ballAction1 );

        //this.playBgMusic();

    },

    start () {

    },

    update (dt) {},

    playBgMusic(){
        cc.loader.loadRes( "sounds/BgMusic9", cc.AudioClip, function(err,clip){
            var audioID = cc.audioEngine.play( clip, true, 1 );
        } );
    },

});
