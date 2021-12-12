import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

type Routes = {
  get?: NextApiHandler
  post?: NextApiHandler
  delete?: NextApiHandler
  put?: NextApiHandler
}

const unreachable = (value: unknown) => {
  throw new Error(`unreachable: ${value}`)
}

export const router =
  (routes: Routes) =>
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    try {
      switch (req.method) {
        case 'GET': {
          if (routes.get) return routes.get(req, res)
          break
        }
        case 'POST': {
          if (routes.post) return routes.post(req, res)
          break
        }
        case 'PUT': {
          if (routes.put) return routes.put(req, res)
          break
        }
        case 'DELETE': {
          if (routes.delete) return routes.delete(req, res)
          break
        }
        default:
          unreachable(req.method)
      }
    } catch (e) {
      res.statusCode = 500
      res.send(e)
    }

    res.statusCode = 404
    res.end()
  }
