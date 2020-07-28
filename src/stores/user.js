import { writable, derived } from 'svelte/store';

export const getLocalStorageUser = () => {
	return localStorage.getItem('meowflixuser')
		? JSON.parse(localStorage.getItem('meowflixuser'))
		: { username: null, jwt: null };
};

export const setLocalStorageUser = (user) => {
	localStorage.setItem('meowflixuser', JSON.stringify(user));
};

const userStore = writable(getLocalStorageUser());

export const username = derived(userStore, ($user) => {
	return $user.username;
});

export const jwt = derived(userStore, ($user) => {
	return $user.jwt
});


export const setUser = (user) => {
	userStore.set(user);
};

export const logoutUser = () => {
	localStorage.clear();
	userStore.set({ username: null, jwt: null });
};
export default userStore;
