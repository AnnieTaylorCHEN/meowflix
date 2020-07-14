import { writable, derived } from 'svelte/store';
import localProducts from "../localProducts";

const flattenProducts = (data) => {
  return data.map(item => {
    let image = item.image.url;
    return {
      ...item, 
      image
    };
  });
};


//Fisher-Yates algorithm
const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}


const store = writable(flattenProducts([...localProducts]));
// const store = writable(flattenProducts([]));

export const featuredStore = derived(store, $featured => {
  return $featured.filter(item => item.featured === true);
});

const randomFour = shuffle(flattenProducts([...localProducts])).slice(0, 4);

export const randomStore = writable(randomFour);

export default store;
