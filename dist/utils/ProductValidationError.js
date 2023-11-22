"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidationError = void 0;
class ProductValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "Product Validation Error";
    }
}
exports.ProductValidationError = ProductValidationError;
//# sourceMappingURL=ProductValidationError.js.map