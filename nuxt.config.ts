import { defineNuxtConfig } from 'nuxt'


// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiUrl: process.env.NODE_ENV === 'production' ? 'https://api.reffers.com/api' : 'https://api.crypto-verse.info/api'
        }
    },
    css: [
        '@/assets/styles/main.scss'
    ],
    app: {
        head: {
            noscript: [{ innerHTML: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NXG5589"\n' +
                    'height="0" width="0" style="display:none;visibility:hidden"></iframe>', body: true }],
            script: [
                {
                    hid: 'gtm',
                    children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NXG5589');`
                },
                { src: '//code.jivosite.com/widget/bTizu4avTy', async: true }
            ]
        },
    }
})
