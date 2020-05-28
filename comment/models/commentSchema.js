const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test')

const db = mongoose.connection
db.once('error', () => console.log('Mongo connection error'))
db.once('open', () => console.log('Mongo connection successed'))

// 創數據類型
const commentSchema = mongoose.Schema({
  _id: String,
  companyID: String,
  commentID: String,
  title: String,
  content: String,
  relateDep: String,
  condition: String,
  score: Number,
  reply: Boolean,
  resource: [],
  tags: [],
  time: String
}, {collection: 'commentData'})

// AccountData與accountData.js相連
// accountData與accountData.js裡的./查詢路徑相連
// eslint-disable-next-line no-unused-vars
const CommentData = module.exports = mongoose.model('commentData', commentSchema)
