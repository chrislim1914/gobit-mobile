<template>
  <div class="app-trading-ltwo">
    <div id="trading-ltwo-holder">
      <div id="trading-ltwo-conte">
        <div id="trading-ltwo-upper-div">
          <div id="trading-ltwo-upper-div-left-section">
            <table>
              <tr :key="index" v-for="index in 10">
                <td class="text-right">
                  <h6>
                    12.298
                  </h6>
                </td>
                <td class="text-right">
                  <h6>
                    188,450
                  </h6>
                  <h6>
                    0.96%
                  </h6>
                </td>
              </tr>
            </table>
          </div>
          <div id="trading-ltwo-upper-div-right-section">
            <ul>
              <li>
                <h6>
                  거래량
                </h6>
                <h6>
                  116,385 ETH
                </h6>
              </li>
              <li>
                <h6>
                  거래금
                </h6>
                <h6>
                  22,139백만원
                </h6>
                <h6>
                  (최근 24시간)
                </h6>
              </li>
              <li>
                <h6>
                  52주 최고
                </h6>
                <h6 class="rt">
                  926,200
                </h6>
                <h6>
                  (2018.05.06)
                </h6>
              </li>
              <li>
                <h6>
                  52주 최저
                </h6>
                <h6 class="bt">
                  92,450
                </h6>
                <h6>
                  (2018.12.15)
                </h6>
              </li>
              <li>
                <h6>
                  전일종가
                </h6>
                <h6>
                  186,650
                </h6>
              </li>
              <li>
                <h6>
                  당일고가
                </h6>
                <h6 class="rt">
                  190,300
                </h6>
                <h6 class="rt">
                  1.96%
                </h6>
              </li>
              <li>
                <h6>
                  당일저가
                </h6>
                <h6 class="bt">
                  186,150
                </h6>
                <h6 class="bt">
                  -0.27%
                </h6>
              </li>
            </ul>
          </div>
        </div>
        <div id="trading-ltwo-lower-div">
          <div id="trading-ltwo-lower-div-left-section">
            <ul>
              <li>
                <h6>
                  체결 강도
                </h6>
                <h6>
                  71.71%
                </h6>
              </li>
              <li>
                <h6>
                  체결가
                </h6>
                <h6>
                  체결량
                </h6>
              </li>
              <li :key="index" v-for="index in 7">
                <h6 class="rt">
                  187,750
                </h6>
                <h6 class="rt">
                  23.500
                </h6>
              </li>
              <li :key="index" v-for="index in 7">
                <h6 class="rt">
                  187,600
                </h6>
                <h6 class="bt">
                  0.937
                </h6>
              </li>
            </ul>
          </div>
          <div id="trading-ltwo-lower-div-right-section">
            <table>
              <tr :key="index" v-for="index in 10">
                <td class="text-right">
                  <h6>
                    12.298
                  </h6>
                </td>
                <td class="text-right">
                  <h6>
                    188,450
                  </h6>
                  <h6>
                    0.96%
                  </h6>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div id="trading-ltwo-bar-div">
          <div class="row mx-0 h-100">
            <div class="col-4 px-0 h-100" id="trading-ltwo-bar-left-section">
              <h6 class="text-right pt-3 pr-3">
                385.594
              </h6>
            </div>
            <div class="col-4 px-0 h-100" id="trading-ltwo-bar-middle-section">
              <h6 class="text-center pt-3">
                주문잔량합계(ETH)
              </h6>
            </div>
            <div class="col-4 px-0 h-100" id="trading-ltwo-bar-right-section">
              <h6 class="text-left pt-3 pl-3">
                506.795
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TradingLinkTwo'
}
</script>

<style lang='scss' scoped>
  @import '~scss/trading/linktwo.scss';
</style>
