import axios from "axios";

const API_URL = "http://localhost:8080";

class UserService {

    register(user) {
        return axios.post(API_URL + "/register", user);
    }

    login(userLogin) {
        return axios.post(API_URL + "/login", userLogin).then((res) => res.data);
    }

    logout() {
        return axios.get(API_URL + "/login");
    }
}

// eslint-disable-next-line 
export default new UserService;