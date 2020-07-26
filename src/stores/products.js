import { writable, derived } from 'svelte/store';

import getProducts from '../server/getProducts';


const flattenProducts = (data) => {
	
	return data.map((item) => {
		// let image = `${url}${item.image[0].url}`;
		let image = item.image[0].url;
		return {
			...item,
			image,
		};
	});
};

//Fisher-Yates algorithm
const shuffle = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

const store = writable([], () => {
	setProducts();
	return () => {};
});

const setProducts = async () => {
	let products = await getProducts();
	
	if (products) {
		products = flattenProducts(products);
		store.set(products);
	}
};

export const featuredStore = derived(store, ($featured) => {
	return $featured.filter((item) => item.featured === true);
});

export const randomStore = derived(store, ($random) => {
	return shuffle($random).slice(0, 4);
})

export default store;
