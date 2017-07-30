import { Router } from 'express'

const router = Router()

router.get('/test', function (req, res, next) {
  console.log('served /test.')
  res.send('gat eem')
})

export default router
