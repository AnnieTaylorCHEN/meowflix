import axios from "axios";
import url from "./URL";

const submitOrder = async ({
    name, 
    address,
    total, 
    items, 
    stripeTokenId, 
    userToken,
}) => {
    const res = await axios.post(`${url}/orders`, {
        name, 
        address,
        total, 
        items,
        stripeTokenId
    }, {
        headers: {
            Authorization: `Bearer ${userToken}`,
        }
    }).catch(error => console.error(error));
    return res;
}

export default submitOrder;