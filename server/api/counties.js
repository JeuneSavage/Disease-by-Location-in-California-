import { Router } from 'express'

const router = new Router()

const fakeCounties = [
  {
    name: 'danktown',
    risks: [
      { name: 'cancer', probability: 0.876 }
    ]
  }
]

router.get('/counties/:id', function (req, res) {
  let responseCounties = fakeCounties.filter(function (county) {
    return county.name === req.params.id
  })
  console.log(`response countries: ${responseCounties}, req params: ${req.params.id}`)
  res.json(responseCounties)
})

export default router
