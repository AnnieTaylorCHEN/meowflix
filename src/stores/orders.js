import { writable } from 'svelte/store';
import getOrders from '../server/getOrders';
import { getLocalStorageUser } from './user';

const user = getLocalStorageUser();
const jwt = user.jwt;

const store = writable([], () => {
	setOrders();
	return () => {};
});

const setOrders = async () => {
	let orders = await getOrders(jwt);
	// console.log(orders);

	if (orders) {
		store.set(orders);
	}
};

export default store;
