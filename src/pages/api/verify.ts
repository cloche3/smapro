import { admin } from '../../utils/firebase-admin'
import { router } from '../../utils/router'

export default router({
  async post(req, res) {
    const { idToken } = JSON.parse(req.body)

    try {
      await admin.auth().verifySessionCookie(idToken, true)
      return res.status(200).end()
    } catch {
      return res.status(401).end()
    }
  },
})
