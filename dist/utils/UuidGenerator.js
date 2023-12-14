"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUUID = void 0;
function generateUUID() {
    const generatedUUID = 'xxxxxxxx9xxyxxx'.replace(/[xy]/g, function () {
        const random = Math.random() * 16 | 0;
        return random.toString();
    });
    return generatedUUID;
}
exports.generateUUID = generateUUID;
//# sourceMappingURL=UuidGenerator.js.map