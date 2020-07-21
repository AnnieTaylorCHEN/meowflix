import axios from 'axios';
import url from './URL';

import setupUser from "./setupUser";


const registerUser = async ({ username, email, password }) => {
	const res = await axios
		.post(`${url}/auth/local/register`, {
			username,
			email,
			password,
		})
		.catch((error) => console.error(error));

	if (res) {
		setupUser(res);
	}
	return res;
};
export default registerUser;
