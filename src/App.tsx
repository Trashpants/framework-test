import React, { useState } from "react";
import { allProducts, ProductCode } from './types/products';
import { rule, cartRules } from "./types/cart";

import './App.css';

const Checkout = ({ cart, rules }: {cart: ProductCode[], rules: rule[]}): JSX.Element => {

  const calculateCartValueWithDiscounts = (cartItems: ProductCode[]): string => {
    /**
     * Get unique items in our cart
     */
    const uniqueItems = cartItems.filter((el, index, arr) => arr.indexOf(el) === index)

    /**
     * For each item type get the count,
     * Then use the rule for that product to calculate the price
     *
     * Finally reduce each calculated value and add them all together to get a combined price
     * bang on a toFixed to give us pennies
     */
     return uniqueItems.map(itemType => {
       const count = cartItems.filter(i => i === itemType).length;
       const price = allProducts.find(i => i.code === itemType)?.price ?? 0;
        return rules.find(e => e.code === itemType)?.rule(count, price) ?? (count * price);
    }).reduce((a, b) => a + b, 0).toFixed(2);
  }

  return (
    <table className="totals">
      <tbody>
        <tr>
          <th scope="row">Total</th>
          <td data-testid="total">{calculateCartValueWithDiscounts(cart)}</td>
        </tr>
      </tbody>
    </table>
   );
};

const App = () => {
  const [cartItems, setCartItems] = useState<ProductCode[]>([]);
  const rules: rule[] = cartRules;

  const resetCart = () => setCartItems([]);
  const addItem = (code: ProductCode) => setCartItems([...cartItems, code]);

  return (
    <div className="App">
      <div className="cart">
        {allProducts.map((item, index) =>
          <button
            key={`${item.label}_${index}`}
            onClick={() => addItem(item.code)}>
            {item.label}
          </button>
        )}
      </div>
      <Checkout cart={cartItems} rules={rules} />
      <button type="button" onClick={resetCart}>Clear basket</button>
    </div>
  );
};

export default App;
