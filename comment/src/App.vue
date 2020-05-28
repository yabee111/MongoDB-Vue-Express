<template>
  <div id="app">
    <!-- <router-link to="/">Go to commentList</router-link> -->
    <!-- <router-link to="/commentDetails">Go to commentDetails</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

/*         <div class="commentList">
          <template>
            <el-table ref="myTable" :data="commentData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">
              <!-- width還沒 -->
              <!-- 可以加element-loading-text="LOADING..." -->
              <el-table-column prop="relateDep" label="相關" width="" id="phoneDisappear"></el-table-column>
              <el-table-column prop="condition" label="狀態" width="" id="phoneDisappear">
                <!-- @click="toDetail(scope.row['_id'])" -->
                <template v-slot="{row, index}">
                  <el-button type="info" size="small" >{{row.condition}}</el-button>
                </template>
              </el-table-column>
              <el-table-column prop="time" label="時間" width="" id="phoneDisappear"></el-table-column>
              <el-table-column prop="title" label="評論" width="" id="phoneDisappear"></el-table-column>
              <el-table-column prop="score" label="評分" width="" id="phoneDisappear"></el-table-column>
              <el-table-column prop="reply" label="回 覆" width="" id="phoneDisappear" :formatter="formatBoolean"></el-table-column>
              <!--  :formatter="formatlink"  -->
              <el-table-column prop="resource" label="網站來源" width="" id="phoneDisappear">
                <!-- <template v-slot="{row, index}">
                  <a :href="row.resource.url" target="_blank">{{row.resource.url}}</a>
                </template> -->
              </el-table-column>
            </el-table>
              <!-- 分頁功能: @current-change="handleCurrentChange" 當前頁數改變時觸發, layout:子組件 -->
              <!-- <el-pagination v-if="pagination" class="pagination" @current-change="handleCurrentChange" :current-page.sync="currentPage" layout="total, prev, pager, next, jumper" :total="length"></el-pagination> -->
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pagesize" layout="total, prev,pager, next" :total="commentData.length" prev-text="上一頁" next-text="下一頁"></el-pagination>
          </template>
              <!-- 沒寫stripe、element-loading-text= -->
              <!-- <el-table :data="tableData" -->
          <div class="clear"></div>
        </div> */
</style>
