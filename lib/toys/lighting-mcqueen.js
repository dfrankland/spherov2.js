"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-unused-variable
const core_1 = require("./core");
class LightingMcQueen extends core_1.Core {
    driveAsRc(heading, speed) {
        const cmd = this.commands.driving.driveAsRc(heading, speed);
        // console.log(Array.from(cmd.raw).map((x) => x.toString(16).padStart(2, '0')).join(':'));
        return this.queueCommand(cmd);
    }
}
LightingMcQueen.advertisement = {
    name: 'Lighting McQueen',
    prefix: 'LM-',
    class: LightingMcQueen,
};
exports.LightingMcQueen = LightingMcQueen;
