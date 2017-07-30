import { Router } from 'express'
import Counties from '../../county-data'

const router = new Router()

router.get('/counties/name/:id', function (req, res) {
  let responseCounties = Counties.filter(function (county) {
    return county.name === req.params.id
  })
  console.log(`response countries: ${responseCounties}, req params: ${req.params.id}`)
  res.json(responseCounties)
})

export default router
