import { setLocalStorageUser, setUser} from "../stores/user";


const setupUser = (res) => {
    const {jwt} = res.data;
    const { username } = res.data.user;
    const user = { username, jwt};
    setLocalStorageUser(user);
    setUser(user);
}

export default setupUser;