export class PriceCalculator {
  static calculatePriceWithDelivery(basePrice: number, weight: number): number {
    let priceWithDelivery = basePrice;
    for (let i = 0; i < weight; i++) {
      if (i % 10 === 0) {
        priceWithDelivery += priceWithDelivery * 0.05;
      }
    }
    return priceWithDelivery;
  }
}
