import axios from 'axios';
import {apiConstants} from '../constants/api.constants';

export default new class Authorization {
    async login(username, password) {
        const res = await axios.create({
            url: apiConstants.signinUrl,
            method: 'post',
            baseURL: apiConstants.baseUrl,
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            data: `username=${username}&password=${password}`
        })();
        
        return {data: res.data, status: res.status};
    }

    async registration (username, email, password) {
        const res = await axios.create({
            url: apiConstants.signupUrl,
            method: 'post',
            baseURL: apiConstants.baseUrl,
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            data: `username=${username}&password=${password}&email=${email}`
        })();

        return {data: res.data, status: res.status};
    }

    async generateForgotCode (email) {
        const res = await axios.create({
            url: apiConstants.forgot,
            method: 'post',
            baseURL: apiConstants.baseUrl,
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            data: `email=${email}`
        })();

        return {data: res.data, status: res.status}
    }

    async restorePassword(email, code, password) {
        return await axios.create({
            url: apiConstants.forgot,
            method: 'put',
            baseURL: apiConstants.baseUrl,
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            data: `email=${email}&code=${code}&password=${password}`
        })()
    }
}();