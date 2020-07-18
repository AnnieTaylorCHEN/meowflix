import { writable } from "svelte/store";

const user = writable({ 
    username: null,
    jwt: null,
});

export default user;