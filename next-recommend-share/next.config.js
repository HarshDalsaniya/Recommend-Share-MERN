const withImages = require('next-images')
const withPlugins = require('next-compose-plugins');

const nextJsConfig = {
    trailingSlash: true,
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/login': { page: '/login' },
            '/register': { page: '/register' },
            '/reset-password': { page: '/reset' },
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
        withImages({
            webpack(config, options) {
                return config
            }
        })
    ],

    [
        nextJsConfig
    ]
])
