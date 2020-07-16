import { writable, derived } from 'svelte/store';
import localCart from '../localCart';
const cart = writable([...localCart]);

export const cartTotal = derived(cart, ($cart) => {
	let total = $cart.reduce((acc, curr) => {
		return (acc += curr.amount * curr.price);
	}, 0);
	return total.toFixed(2);
});

//toggle amount, not to be used so far
// const toggleAmount = (id, items, action) => {
// 	return items.map((item) => {
// 		let newAmount;
// 		if (action === 'inc') {
// 			newAmount = item.amount + 1;
// 		} else if (action === 'dec') {
// 			newAmount = item.amount - 1;
// 		} else {
// 			newAmount = item.amount;
// 		}
// 		return item.id === id ? { ...item, amount: newAmount } : { ...item };
// 	});
// };

// export const increaseAmount = (id) => {
// 	cart.update((storeValue) => {
// 		return toggleAmount(id, storeValue, 'inc');
// 	});
// };

// export const decreaseAmount = (id) => {
// 	cart.update((storeValue) => {
// 		let item = storeValue.find((item) => item.id === id);
// 		let cart;
// 		if (item.amount === 1) {
// 			cart = remove(id, storeValue);
// 		} else {
// 			store = toggleAmount(id, storeValue, '');
//         }
//         return [...cart]
// 	});
// };

export const removeItem = (id) => {
	cart.update((storeValue) => {
		return storeValue.filter((item) => item.id !== id);
	});
};

export default cart;
