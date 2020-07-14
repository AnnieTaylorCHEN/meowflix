import { writable } from 'svelte/store';
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

const store = writable(flattenProducts([...localProducts]));
// const store = writable(flattenProducts([]));

export default store;
