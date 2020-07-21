import axios from "axios";
import url from "./URL";

import setupUser from "./setupUser";

const loginUser = async ({ email, password}) => {
    const res = await axios.post(`${url}/auth/local`, {
        identifier: email, password
    }).catch(error => console.error(error));

    if (res){
        setupUser(res)
    }
    return res
};

export default loginUser;
