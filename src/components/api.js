import axios from 'axios';

const BASE_URL = 'http://13.127.243.60/api';
export default class API {
    getHttpClient(baseURL = `${BASE_URL}`) {
        var headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
        setTimeout(function(){localStorage.removeItem("token");}, 1000*60*60);
        this.client = axios.create({
            baseURL: baseURL,
            headers: headers
        })
        return this.client;
    }
}
    