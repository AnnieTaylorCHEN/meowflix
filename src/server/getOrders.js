import axios from 'axios';
import url from './URL';

const getOrders = async (jwt) => {
	const res = await axios
		.get(`${url}/orders`, {
			headers: {
				Authorization: `Bearer ${jwt}`,
			},
		})
		.catch((error) => console.error(error));

	if (res) {
		let orders = res.data;
		return orders;
	}
};

export default getOrders;
