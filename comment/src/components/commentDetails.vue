<template lang="html">
  <div class="wrap">
      <div class="header">
        <div class="headerContent">
          <a class="showMenu" href="#"><img src="https://fakeimg.pl/15x10/" alt=""></a>
          <img class="companyImg" src="https://fakeimg.pl/50x50/" alt="">
          <div class="title">旅館評論管理系統</div>
            <img class="photo" src="https://fakeimg.pl/50x50/" alt="">
            <div class="identity">後台管理員</div>
                <ul class="menu">
                    <li><a href="#">帳號管理</a></li>
                    <li><a href="#">評論管理</a></li>
                    <li><a href="#">統計結果</a></li>
                    <li><a href="#" >競爭對手</a></li>
                    <li><a href="#">歷史紀錄</a></li>
                    <li><a id="logout" href="#">登出</a></li>
                </ul>
            <div class="clear"></div>
        </div>
        <div class="clear"></div>
      </div>
      <div class="content">
        <div class="breadcrumb">
          <a class="breadcrumb-item" href="#">首頁</a>
          <a class="breadcrumb-item" href="/commentlist">評論管理</a>
          <a class="breadcrumb-item" href="/commentlist">評論列表</a>
          <a href="#">評論詳細內容</a>
        </div>
        <div class="clear"></div>
        <div class="page">
          <span>評論詳細內容</span>
        </div>
        <div class="commentDetails">
          <h3 ></h3>
        </div>
      </div>
      <div class="footer">
        <ul class="phoneMenu">
            <li><a href="#"><img src="https://fakeimg.pl/27x27/" alt=""></a></li>
            <li><a href="#"><img src="https://fakeimg.pl/27x27/" alt=""></a></li>
            <li><a href="#"><img src="https://fakeimg.pl/27x27/" alt=""></a></li>
            <li><a href="#"><img src="https://fakeimg.pl/27x27/" alt=""></a></li>
        </ul>
        <div class="clear"></div>
      </div>
  </div>
</template>

<script>
import axios from '../../node_modules/axios'
// import $ from '../../node_modules/jquery'

export default {
  name: 'commentDetails',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
      commentData: [],
      currentPage: 1,
      pagesize: 10,
      search: ''
    }
  },
  mounted () {
    let self = this
    axios.get('/comment/:_id').then(response => {
      console.log(response.data)
      self.commentData = response.data
      for (var i = 0; i <= self.commentData.length; i++) {
        for (var j = 0; j <= 5; j++) {
          if (self.commentData[i].resource[0].url === self.resourceName[j].url) {
            self.commentData[i].resource[1].resourceName = self.resourceName[j].value
          }
        }
      }
    }).catch((error) => {
      console.log(error)
    })
    return self.commentData
  },
  methods: {
    // fieldFn (rowObj) {
    //   if (rowObj.reply === false) {
    //     return '否'
    //   } else {
    //     return '是'
    //   }
    // },
    handleSizeChange: function (size) {
      this.pagesize = size
      // console.log(this.pagesize)
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
      // console.log(this.currentPage)
    }
  }
}
</script>
<style scoped src= '../assets/css/commentList.css'></style>
