"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCalculator = void 0;
class PriceCalculator {
    static calculatePriceWithDelivery(basePrice, weight) {
        let priceWithDelivery = basePrice;
        for (let i = 0; i < weight; i++) {
            if (i % 10 === 0) {
                priceWithDelivery += priceWithDelivery * 0.05;
            }
        }
        return priceWithDelivery;
    }
}
exports.PriceCalculator = PriceCalculator;
//# sourceMappingURL=CalculateDelivery.js.map