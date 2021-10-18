import { ProductCode } from "./products";

export type rule = {
    code: ProductCode,
    rule: (count: number, price: number) => number
}

export const cartRules: rule[] = [
    { code: ProductCode.LB1, rule: (count: number, price: number) => Math.ceil(count / 2) * price },
    { code: ProductCode.CS1, rule: (count: number, price: number) => count * (count >= 3 ? 4.5 : price) },
]
