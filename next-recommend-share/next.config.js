const withImages = require('next-images')
const withPlugins = require('next-compose-plugins');

const nextJsConfig = {
    trailingSlash: false,
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/login': { page: '/login' },
            '/register': { page: '/register' },
            '/tradespeople': {page: '/tradespeople'},
            '/tradespeople/invite':{page:'/secure/tradespeople/invite'},            
            '/secure/tradespeople/[tradepeopleName]/recommend':{page:'/secure/tradespeople/[tradepeopleName]/recommend'},
            '/tradespeople/[tradepeopleName]':{page:'/tradespeople/[tradepeopleName]'},
            '/consumers': {page: '/consumers'},
            '/tradespeople/tradespeoplehtml': {page: '/tradespeople/tradespeoplehtml'},
            '/tradespeople/tradespeopleDetails':{page:'/tradespeople/tradespeopleDetails'},
            '/secure/tradespeople/create': {page: '/secure/tradespeople/create'},
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
