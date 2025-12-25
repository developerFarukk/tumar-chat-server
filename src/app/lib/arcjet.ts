/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */

import arcjet, { shield, detectBot, slidingWindow } from '@arcjet/node'
import config from '../config'

const isProduction = config.node_env === 'production'

// if (config.node_env === 'development') {
//   console.log = (...args) => {
//     // Arcjet এর specific warning skip করুন
//     if (!args[0]?.includes?.('Arcjet will use 127.0.0.1')) {
//       process.stdout.write(args.join(' ') + '\n')
//     }
//   }
// }

const aj = arcjet({
  key: config.arcjet_api_key as string,

  rules: [
    shield({
      mode: isProduction ? 'LIVE' : 'DRY_RUN',
    }),

    detectBot({
      mode: isProduction ? 'LIVE' : 'DRY_RUN',
      allow: (isProduction
        ? [
            'CATEGORY:SEARCH_ENGINE',
            'CATEGORY:SAFARI',
            'CATEGORY:CHROME',
            'CATEGORY:FIREFOX',
            'CATEGORY:EDGE',
            'CATEGORY:MOBILE_APP',
            'POSTMAN',
            'INSOMNIA',
            'CURL',
            'CATEGORY:MONITOR',
            'CATEGORY:PREVIEW',
          ]
        : []) as any,
    }),

    slidingWindow({
      mode: isProduction ? 'LIVE' : 'DRY_RUN',
      max: isProduction ? 100 : 1000,
      interval: 60,
    }),
  ],
})

export default aj
