/*const devProtocol = 'http://';
const devHost = 'localhost'; // https://vladisslava-diploma-backend.herokuapp.com/
const devPort = ':8080';
const devPrefix = '/api';
const devBaseUrl = devProtocol + devHost + devPort + devPrefix;*/

const devProtocol = 'https://';
const devHost = 'vladisslava-diploma-backend.herokuapp.com'; // https://vladisslava-diploma-backend.herokuapp.com/
const devPort = '';
const devPrefix = '/api';
const devBaseUrl = devProtocol + devHost + devPort + devPrefix;

const apiConstants = {
    baseUrl: devBaseUrl,
    signinUrl: '/signin',
    signupUrl: '/signup',
    forgot: '/forgot',
    box: '/box',
    user: '/user'
};

export {apiConstants};
