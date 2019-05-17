<template>
  <div class="app-trading-lthree">
    <div id="trading-lthree-holder">
      <div id="trading-lthree-content">
        <div id="trading-lthree-controls">
          <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              1분
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#">1분</a>
              <a class="dropdown-item" href="#">1분</a>
              <a class="dropdown-item" href="#">1분</a>
            </div>
          </div>
          <div class="dropdown2">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              1일
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#">1일</a>
              <a class="dropdown-item" href="#">1일</a>
              <a class="dropdown-item" href="#">1일</a>
            </div>
          </div>
          <button id="trading-lthree-graph-button" class="btn btn-lg">
            가로차트
          </button><button id="trading-lthree-settings-button" class="btn btn-lg">
            차트설정
          </button>
        </div>
        <VueTradingView style="width: 100%; position: absolute; bottom: 0;" :options="{
          symbol: 'NASDAQ:AAPL',
          theme: 'light',
          width: 'auto',
          height: '800px'
        }" />
      </div>
    </div>
  </div>
</template>

<script>
import VueTradingView from 'vue-trading-view2'
export default {
  name: 'TradingLinkThree',
  components: {
    VueTradingView
  }
}
</script>

<style lang='scss' scoped>
  @import '~scss/trading/linkthree.scss';
</style>
