const express = require('express')
const router = express.Router()

const commentData = require('../../models/commentSchema')

router.get('/comment', (req, res) => {
  commentData.find({})
    .sort({update_at: -1})
    .then(accounts => {
      res.json(accounts)
    }).catch(err => {
      console.log(2)
      res.json(err)
    })
})

router.get('/comment/:_id', (req, res) => {
  commentData.findOne({
    '_id': req.params._id
  })
    .then(accounts => {
      res.json(accounts)
    }).catch(err => {
      console.log(2)
      res.json(err)
    })
})

// router.get('/comment/:condition', (req, res) => {
//   commentData.findOne({
//     'condition': req.params.condition
//   })
//     .then(accounts => {
//       res.json(accounts)
//     }).catch(err => {
//       console.log(2)
//       res.json(err)
//     })
// })
module.exports = router
