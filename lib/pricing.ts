import type { FurnitureItem } from './types';

export const PRICE_PER_BOX = 14.99;
export const INSURANCE_PRICE = 29.0;
export const DEPOSIT_PERCENTAGE = 0.2; // 20%

export function calculateFurnitureBoxes(items: FurnitureItem[]): number {
  return items.reduce((total, item) => {
    return total + item.boxEquivalent * item.quantity;
  }, 0);
}

export function calculateTotalBoxes(
  standardBoxes: number,
  furnitureItems: FurnitureItem[]
): number {
  return standardBoxes + calculateFurnitureBoxes(furnitureItems);
}

export function calculateStoragePrice(totalBoxes: number): number {
  return totalBoxes * PRICE_PER_BOX;
}

export function calculateTotalPrice(
  totalBoxes: number,
  hasInsurance: boolean
): number {
  const storagePrice = calculateStoragePrice(totalBoxes);
  const insurancePrice = hasInsurance ? INSURANCE_PRICE : 0;
  return storagePrice + insurancePrice;
}

export function calculateDeposit(totalPrice: number): number {
  return Math.ceil(totalPrice * DEPOSIT_PERCENTAGE * 100) / 100;
}

export function calculateBalance(
  totalPrice: number,
  depositAmount: number
): number {
  return totalPrice - depositAmount;
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}
