<template>
  <div class="app-chart">
    <div class="chart-top">
      <div class="chart-t-box-l">
        <div class="dropdown">
          <a class="btn dropbtn-black">
            1분
            <img src="~img/drop-down-arrow16x16black.png" alt="Gobit drop down icon 16x16" class="pl-4 img-fluid">
          </a>
          <div class="dropdown-content-black">
            <a href="#">2분</a>
            <a href="#">3분</a>
            <a href="#">4분</a>
          </div>
        </div>
        <div class="dropdown">
          <a class="btn dropbtn-green">
            1분
            <img src="~img/drop-down-arrow16x16.png" alt="Gobit drop down icon 16x16" class="pl-4 img-fluid">
          </a>
          <div class="dropdown-content-green">
            <a href="#">2분</a>
            <a href="#">3분</a>
            <a href="#">4분</a>
          </div>
        </div>
      </div>
      <div class="chart-t-box-r">
        <button>
          <img src="~img/orientation32x32.png" alt="mobile orientation icon">
          <p>가로차트</p>
        </button>
        <button>
          <img src="~img/bar-chart32x32.png" alt="menu icon">
          <p>차트설정</p>
        </button>
      </div>
    </div>
    <div class="chert-holder">
      <VueTradingView style="width: 100%; bottom: 0;" :options="{
          symbol: 'NASDAQ:AAPL',
          theme: 'light',
          width: 'auto',
          height: '800px'
        }" />
    </div>
  </div>
</template>

<script>
import VueTradingView from 'vue-trading-view2'
export default {
  name: 'Chart',
  components: {
    VueTradingView
  }
}
</script>

<style lang='scss' scoped>
  @import '~scss/newtrading/tradingchart.scss';
</style>
