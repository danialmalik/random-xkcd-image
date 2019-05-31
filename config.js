const config = {
    environment: process.env.NODE_ENV | 'development',
    hostUrl: process.env.hostUrl | 'localhost',
    hostPort: process.env.hostPort | 3000
}

module.exports = config;
