import { writable } from 'svelte/store';

const getLocalStorageUser = () => {
	return localStorage.getItem('meowflixuser')
		? JSON.parse(localStorage.getItem('meowflixuser'))
		: { username: null, jwt: null };
};

export const getUsername = () => {
    return localStorage.getItem('meowflixuser')
		? JSON.parse(localStorage.getItem('meowflixuser')).username
		: null
}

export const setLocalStorageUser = (user)=> {
    localStorage.setItem('meowflixuser', JSON.stringify(user));
}

const userStore = writable(getLocalStorageUser());

export const setUser = (user) => {
    userStore.set(user);
}

export const logoutUser = () => {
    localStorage.clear();
    userStore.set({ username: null, jwt: null })
}
export default userStore;
