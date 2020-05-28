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
          <a href="#">評論列表</a>
        </div>
        <div class="clear"></div>
        <div class="page">
          <span>評論列表</span>
        </div>
        <div class="filter-top">
            <label>狀態：
              <el-select v-model="conditionChoosen" class="formInputCss" placeholder="請選擇狀態" @change="StateChange">
                <el-option v-for="item in conditions" :key="item.value" :label="item.label" :value="item.field"></el-option>
              </el-select>
              <!-- <el-select> -->
            </label>
            <label> 修改回覆狀態：
              <el-select v-model="replyChoosen" placeholder="請選擇回覆狀態" @change="ReplyChange">
                <el-option v-for="item in replys" :key="item.value" :label="item.label" :value="item.field"></el-option>
              </el-select>
            </label>
            <label> 修改回覆狀態：
              <el-select v-model="replyChoosen" placeholder="請選擇回覆狀態" @change="ReplyChange">
                <el-option v-for="item in replys" :key="item.value" :label="item.label" :value="item.field"></el-option>
              </el-select>
            </label>
              <!-- </el-select> -->
              <!-- @on-selected-rows-change="selectionChanged" -->
              <!-- :selectOptions="{enabled: true,  selectionInfoClass: 'custom-class', selectionText: 'rows selected',
                             clearSelectionText: 'clear', disableSelectInfo: true }"  -->
            <vue-good-table class="el-table" styleClass="vgt-table striped" :rows="commentData"  :columns="columns"
                            @on-selected-rows-change="selectionChanged" :search-options="{ enabled: true }">
              <template slot="table-row" slot-scope="props">
                <template v-if="props.column.field === '_id'">
                <input type="checkbox" v-bind:value="props.row._id" v-model="checkboxArr">
                </template>
                <template v-else-if="props.column.field === 'condition'">
                  <span v-if="props.row.condition === '未處理'">
                    <el-button class="none">{{props.row.condition}}</el-button>
                  </span>
                  <span v-if="props.row.condition === '處理中'">
                    <el-button class="ing">{{props.row.condition}}</el-button>
                  </span>
                  <span v-if="props.row.condition === '已完成'">
                    <el-button class="done" disabled="disabled">{{props.row.condition}}</el-button>
                  </span>
                </template>
                <template v-else-if="props.column.field === 'title'" v-bind:value="props.row._id">
                  <router-link :to="{ name: 'commentDetails', params: { _id: props.row._id }}">{{props.row.title}}</router-link>
                </template>
                <template v-else-if="props.column.field === 'resource'">
                  <a :href="props.row.resource[0].url" class="" target="_blanket">{{props.row.resource[1].resourceName}}</a>
                </template>
              </template>
            </vue-good-table>
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
  name: 'commentList',
  data () {
    return {
      commentData: [],
      selectedArr: [],
      checkboxArr: [],
      columns: [
        {
          label: '多選',
          field: '_id'
        },
        {
          label: '部門',
          field: 'relateDep'
        },
        {
          label: '狀態',
          field: 'condition'
        },
        {
          label: '時間',
          field: 'time'
        },
        {
          label: '評論',
          field: 'title'
        },
        {
          label: '評分',
          field: 'score',
          type: 'number'
        },
        {
          label: '回覆',
          field: this.fieldFn
        },
        {
          label: '網站來源',
          field: 'resource'
        }
      ],
      currentPage: 1,
      pagesize: 10,
      search: '',
      resourceName: [
        {
          value: 'BOOKING.com',
          url: 'https://www.booking.com/'
        },
        {
          value: 'HOTELS',
          url: 'https://tw.hotels.com/'
        },
        {
          value: 'Agoda',
          url: 'https://www.agoda.com/'
        },
        {
          value: 'Expedia',
          url: 'https://www.expedia.com.tw/'
        },
        {
          value: 'trip.com',
          url: 'https://hk.trip.com/'
        },
        {
          value: 'TripAdvisor',
          url: 'https://www.tripadvisor.com.tw/'
        }
      ],
      conditions: [
        {
          value: 'all',
          field: '請選擇'
        },
        {
          value: 'none',
          field: '未處理'
        },
        {
          value: 'ing',
          field: '處理中'
        },
        {
          value: 'done',
          field: '已完成'
        }
      ],
      replys: [
        {
          value: '0',
          field: '是'
        },
        {
          value: '1',
          field: '否'
        }
      ],
      conditionChoosen: '',
      replyChoosen: ''
    }
  },
  mounted () {
    let self = this
    axios.get('/comment').then(response => {
      console.log(response.data)
      self.commentData = response.data
      self.selectedArr = response.data
      self.resourceFn(self.commentData)
    }).catch((error) => {
      console.log(error)
    })
    return self.commentData
  },
  methods: {
    resourceFn (data) {
      let self = this
      self.commentData = data
      for (var i = 0; i < self.commentData.length; i++) {
        for (var j = 0; j <= 5; j++) {
          if (self.commentData[i].resource[0].url === self.resourceName[j].url) {
            self.commentData[i].resource[1].resourceName = self.resourceName[j].value
          }
        }
      }
      return self.commentData
    },
    StateChange () {
      var self = this
      var x = self.selectedArr.length
      self.commentData = []
      for (var i = 0; i < x; i++) {
        if (self.conditionChoosen === self.selectedArr[i].condition) {
          self.commentData.push(self.selectedArr[i])
        }
      }
      return self.commentData
    },
    // ReplyChange(){
    //   var self = this
    // },
    fieldFn (rowObj) {
      if (rowObj.reply === false) {
        return '否'
      } else {
        return '是'
      }
    },
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
