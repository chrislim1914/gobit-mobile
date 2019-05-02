<template>
  <!-- exchange tickerbar -->
  <div class="app-exchangetickerbar">
    <div id="exchange-tickerbar-holder">
      <div id="exchange-tickerbar-content">
        <ul class="list-inline mb-0">
          <li class="list-inline-item">
            <h6 class="exchange-tickerbar-label font-weight-bold">
              총매수
            </h6>
          </li>
          <li class="list-inline-item">
            <h6 class="exchange-tickerbar-label-value font-weight-bold">
              266, 841
            </h6>
          </li>
          <li class="list-inline-item">
            <h6 class="exchange-tickerbar-label font-weight-bold">
              평가손익
            </h6>
          </li>
          <li class="list-inline-item">
            <h6 class="exchange-tickerbar-label-value exchange-tickerbar-bt font-weight-bold pr-0">
              -136, 936
            </h6>
          </li>
        </ul>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">
            <h6 class="exchange-tickerbar-label font-weight-bold">
              총평가
            </h6>
          </li>
          <li class="list-inline-item">
            <h6 class="exchange-tickerbar-label-value font-weight-bold">
              129, 544
            </h6>
          </li>
          <li class="list-inline-item">
            <h6 class="exchange-tickerbar-label font-weight-bold">
              수익률
            </h6>
          </li>
          <li class="list-inline-item">
            <h6 class="exchange-tickerbar-label-value exchange-tickerbar-bt font-weight-bold pr-0">
              -51.39%
            </h6>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExchangeTickerbar'
}
</script>

<style lang='scss' scoped>
  @import '~scss/exchange/tickerbar.scss';
</style>
