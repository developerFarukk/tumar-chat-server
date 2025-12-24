
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

import { NextFunction, Request, Response } from 'express'
import aj from '../lib/arcjet'

// Explicitly define return type as Promise<void>
export const arcjetProtection = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const decision = await aj.protect(req)

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        res 
          .status(429)
          .json({ message: 'Rate limit exceeded. Please try again later.' })
        return 
      } else if (decision.reason.isBot()) {
        res.status(403).json({ message: 'Bot access denied.' })
        return
      } else {
        res.status(403).json({
          message: 'Access denied by security policy.',
        })
        return
      }
    }

    // Dynamic import for ES module
    const { isSpoofedBot } = await import('@arcjet/inspect')

    // check for spoofed bots
    if (decision.results.some((result: any) => isSpoofedBot(result))) {
      res.status(403).json({
        error: 'Spoofed bot detected',
        message: 'Malicious bot activity detected.',
      })
      return
    }

    next()
  } catch (error) {
    console.log('Arcjet Protection Error:', error)
    next()
  }
}
