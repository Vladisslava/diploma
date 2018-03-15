const devProtocol = 'http://';
const devHost = 'localhost';
const devPort = ':3010';
const devPrefix = '/api';
const devBaseUrl = devProtocol + devHost + devPort + devPrefix;

const apiConstants = {
    baseUrl: devBaseUrl,
    signinUrl: '/signin',
    signupUrl: '/signup',
    box: '/box'
};

export {apiConstants};