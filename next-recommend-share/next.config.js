const withImages = require('next-images')
const withPlugins = require('next-compose-plugins');

const nextJsConfig = {
    trailingSlash: false,
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/login': { page: '/login' },
            '/register': { page: '/register' },
            '/tradespeople/create': {page: '/tradespeople'},
            '/reset-password': { page: '/reset-password' },
            '/reset-password/:uniqueKey': { page: '/reset-password' },
            '/about-us': { page: '/about-us' },
            '/contact-us': { page: '/contact-us' },
            '/champions': { page: '/champions' },
            '/faq': { page: '/faq' },
            '/gdpr': { page: '/gdpr' },
            '/home-improvements-and-maintenance': { page: '/home-improvements-and-maintenance' },
            '/terms-of-use': { page: '/terms-of-use' }
        }
    }
}

module.exports = withPlugins ([
    [
        nextJsConfig
    ]
])
