"use strict";

// const cart = {
//   items: [],
//   getItems() {
//     console.table(this.items);
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       if (this.items[i].name === productName) {
//         this.items.splice(i, 1);
//         i = -1;
//       }
//     }
//   },
//   clear() {
//     this.items.splice(0);
//   },
//   countTotalPrice() {
//     const { items } = this;

//     let totalPrice = 0;

//     for (const { price, quantity } of items) {
//       totalPrice += price * quantity;
//     }
//     return console.log(
//       `The total price of your order is ${totalPrice} credits`
//     );
//   },
//   increaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         this.items.push(item);
//         break;
//       }
//     }
//   },
//   decreaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         this.items.splice(this.items.indexOf(item), 1);
//         break;
//       }
//     }
//   },
// };

// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "lemon", price: 60 });
// cart.add({ name: "lemon", price: 60 });
// cart.add({ name: "plum", price: 110 });

// cart.getItems();
// cart.countTotalPrice();

// cart.remove("lemon");
// cart.remove("lemon");
// cart.increaseQuantity("apple");

// cart.getItems();
// // cart.clear();
// cart.countTotalPrice();
// console.log(cart.items);
// cart.decreaseQuantity("lemon");
// console.log(cart.items);
// cart.decreaseQuantity("apple");
// console.table(cart.items);
