const devProtocol = 'http://';
const devHost = '192.168.0.101';
const devPort = ':3010';
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
