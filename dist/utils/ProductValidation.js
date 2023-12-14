"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidation = void 0;
const ProductValidationError_1 = require("./ProductValidationError");
class ProductValidation {
    static validate(name, price, weight) {
        if (!name)
            throw new ProductValidationError_1.ProductValidationError("Product name is missing");
        if (!price)
            throw new ProductValidationError_1.ProductValidationError("Product price is missing");
        if (!weight)
            throw new ProductValidationError_1.ProductValidationError("Product weight is missing");
    }
}
exports.ProductValidation = ProductValidation;
//# sourceMappingURL=ProductValidation.js.map