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
// const allowCors = fn => async (req, res) => {
//     res.setHeader('Access-Control-Allow-Credentials', true)
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     // another common pattern
//     // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
//     res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
//     res.setHeader(
//       'Access-Control-Allow-Headers',
//       'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
//     )
//     if (req.method === 'OPTIONS') {
//       res.status(200).end()
//       return
//     }
//     return await fn(req, res)
//   }
  
//   const handler = (req, res) => {
//     const d = new Date()
//     res.end(d.toString())
//   }
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
    ],
    [{
        async headers() {
            return [
              {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                  { key: "Access-Control-Allow-Credentials", value: "true" },
                  { key: "Access-Control-Allow-Origin", value: "*" },
                  { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
                  { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
              }
            ]
          }
    }],
    {
        env: {
            API: process.env.API,
            IMAGE_PATH: process.env.IMAGE_PATH
          }
    }
])
