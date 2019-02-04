const devProtocol = 'http://';
const devHost = '192.168.0.102';
const devPort = ':3010';
const devPrefix = '/api';
const devBaseUrl = devProtocol + devHost + devPort + devPrefix;

const apiConstants = {
    baseUrl: devBaseUrl,
    signinUrl: '/signin',
    signupUrl: '/signup',
    box: '/box',
    user: '/user'
};

export {apiConstants};