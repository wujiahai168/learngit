"use strict";
cc._RF.push(module, '9f1d440juJBgqdwVALTCD4k', 'SequenceAction');
// cases/03_gameplay/02_actions/SequenceAction/SequenceAction.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        }
    },

    start: function start() {
        var _this = this;

        var startTime = 0;
        var eachTime = 0.5;

        var sequence1 = cc.sequence(cc.moveBy(eachTime, cc.p(0, -300)), cc.moveBy(eachTime / 2, cc.p(0, 300))).repeat(2);

        var sequence2 = cc.sequence(cc.moveBy(eachTime, cc.p(0, -200)), cc.moveBy(eachTime, cc.p(0, 200))).repeat(2);

        this.node.runAction(cc.sequence(cc.callFunc(function () {
            startTime = Date.now();
        }), sequence1, sequence2, cc.callFunc(function () {
            var difference = Math.abs(Date.now() - startTime) / 1000;
            if (difference - eachTime * 7 >= 0.05) {
                _this.label.string = "Failed - ElapseTime: " + difference.toFixed(1);
                _this.label.node.color = cc.color(255, 0, 0);
            } else {
                _this.label.string = "Succeed - ElapseTime: " + difference.toFixed(1);
                _this.label.node.color = cc.color(0, 255, 0);
            }
        })));
    }
});

cc._RF.pop();