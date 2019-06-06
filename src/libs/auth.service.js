import axios from 'axios';
import {apiConstants} from '../constants/api.constants';

export default new class Authorization {
    async login(username, password) {
        const res = await axios.create({
            url: apiConstants.signinUrl,
            method: 'post',
            mode: 'no-cors',
            baseURL: apiConstants.baseUrl,
            data: {
                username, password
            }
        })();
        
        return {data: res.data, status: res.status};
    }

    async registration (username, email, password) {
        const res = await axios.create({
            url: apiConstants.signupUrl,
            mode: 'no-cors',
            method: 'post',
            baseURL: apiConstants.baseUrl,
            data: {
                username, email, password
            }
        })();

        return {data: res.data, status: res.status};
    }

    async generateForgotCode (email) {
        const res = await axios.create({
            url: apiConstants.forgot,
            method: 'post',
            baseURL: apiConstants.baseUrl,
            data: {email}
        })();

        return {data: res.data, status: res.status}
    }

    async restorePassword(email, code, password) {
        return await axios.create({
            url: apiConstants.forgot,
            method: 'put',
            baseURL: apiConstants.baseUrl,
            data: {
                email, code, password
            },
            mode: 'no-cors'
        })()
    }
}();
