import axios from "axios";

const API_URL = "http://localhost:8080";

class SmartPhoneService {

    saveSmartPhone(smartPhone) {
        return axios.post(API_URL + "/smartphones/add", smartPhone);
    }

    getAll() {
        return axios.get(API_URL + "/smartphones");
    }

    getById(id) {
        return axios.get(API_URL + "/smartphones/" + id)
    }

    delete(id) {
        return axios.delete(API_URL + "/smartphones/delete/" + id);
    }

    update(smartphone) {
        return axios.put(API_URL + "/smartphones/update/" + smartphone.id, smartphone)
    }

}

// eslint-disable-next-line 
export default new SmartPhoneService;