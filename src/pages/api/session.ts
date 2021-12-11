import { serialize } from 'cookie'
import { z } from 'zod'
import { admin } from '../../utils/firebase-admin'
import { router } from '../../utils/router'

// Set session expiration to 5 days.
const expiresIn = 60 * 60 * 24 * 5 * 1000

const Body = z.object({
  idToken: z.string(),
})

type Body = z.infer<typeof Body>

export default router({
  async post(req, res) {
    let body: Body
    try {
      body = await Body.parseAsync(JSON.parse(req.body))
    } catch {
      return res.status(400).end()
    }

    try {
      const sessionCookie = await admin
        .auth()
        .createSessionCookie(body.idToken, { expiresIn })

      res.setHeader(
        'Set-Cookie',
        serialize('__session', sessionCookie, {
          maxAge: expiresIn,
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          path: '/',
        })
      )
      res.status(200).end()
    } catch {
      res.status(401).end()
    }
  },

  async delete(_, res) {
    res
      .setHeader(
        'Set-Cookie',
        serialize('__session', '', {
          expires: new Date(1),
          path: '/',
        })
      )
      .end()
  },
})
