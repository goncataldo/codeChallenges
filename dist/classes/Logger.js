"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel["INFO"] = "INFO";
    LogLevel["WARNING"] = "WARNING";
    LogLevel["ERROR"] = "ERROR";
})(LogLevel || (LogLevel = {}));
class Logger {
    log(message, level) {
        console.log(`[${level}] ${message}`);
    }
    info(message) {
        this.log(message, LogLevel.INFO);
    }
    warning(message) {
        this.log(message, LogLevel.WARNING);
    }
    error(message) {
        this.log(message, LogLevel.ERROR);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map