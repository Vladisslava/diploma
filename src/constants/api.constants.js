/*const devProtocol = 'http://';
const devHost = '192.168.8.101'; // https://vladisslava-diploma-backend.herokuapp.com/
const devPort = ':8080';
const devPrefix = '/api';
const devBaseUrl = devProtocol + devHost + devPort + devPrefix;
const staticHost = devProtocol + devHost + devPort;*/

const devProtocol = 'https://';
// const devHost = '31.131.28.162'; // https://vladisslava-diploma-backend.herokuapp.com/
const devHost = 'vladisslava-diploma-backend.herokuapp.com'; // https://vladisslava-diploma-backend.herokuapp.com/
const devPort = '';
const devPrefix = '/api';
const devBaseUrl = devProtocol + devHost + devPort + devPrefix;
const staticHost = devProtocol + devHost + devPort;

const apiConstants = {
    baseUrl: devBaseUrl,
    signinUrl: '/signin',
    signupUrl: '/signup',
    forgot: '/forgot',
    box: '/box',
    user: '/user'
};

export {apiConstants, staticHost};
