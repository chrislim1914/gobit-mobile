<template>
  <div class="app-trading-lone">
    <div id="trading-lone-holder">
      <div id="trading-lone-content">
        <div class="container-fluid px-0">
          <div class="row mx-0">
            <div id="trading-lone-left" class="px-0">
              <table id="trading-lone-table-1">
                <tr :key="index" v-for="index in 10">
                  <td id="trading-lone-table-1-d1">
                    <h6>190,450</h6>
                    <h6>2.04%</h6>
                  </td>
                  <td id="trading-lone-table-1-d2">
                    <h6>9.990</h6>
                  </td>
                </tr>
              </table>
              <table id="trading-lone-table-2">
                <tr :key="index" v-for="index in 10">
                  <td id="trading-lone-table-1-d1">
                    <h6>190,450</h6>
                    <h6>2.04%</h6>
                  </td>
                  <td id="trading-lone-table-1-d2">
                    <h6>9.990</h6>
                  </td>
                </tr>
              </table>
            </div>
            <div id="trading-lone-right" style="position: fixed; right: 0;">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a class="nav-link font-weight-bold active" id="one" data-toggle="tab" href="#one" role="tab" aria-controls="one" aria-selected="true">
                    매수
                  </a>
                </li>
                <li class="nav-item position-relative">
                  <a class="nav-link font-weight-bold" id="two" data-toggle="tab" href="#two" role="tab" aria-controls="two" aria-selected="false">
                    매도
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link font-weight-bold" id="three" data-toggle="tab" href="#three" role="tab" aria-controls="three" aria-selected="false">
                    미체결
                  </a>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="one" role="tabpanel" aria-labelledby="one-tab">
                  <div id="trading-lone-tab-1-div-1">
                    <ul id="trading-lone-tab-1" class="my-0">
                      <li>
                        구분
                        <img src="~img/info32x32.png" alt="Gobit info" class="img-fluid">
                      </li>
                      <li>
                        <input type="checkbox" class="option-input radio" name="example" />
                        지정가
                      </li>
                      <li>
                        <input type="checkbox" class="option-input radio" name="example" />
                        시장가
                      </li>
                    </ul>
                    <h6 id="trading-lone-tab-1-text-1" class="mb-0 font-weight-bold">
                      주문가능
                    </h6>
                    <h6 id="trading-lone-tab-1-text-2" class="mb-0">
                      0 KRW
                    </h6>
                  </div>
                  <div id="trading-lone-tab-1-div-2">
                    <div id="trading-lone-tab-1-div-2-subdiv-1">
                      <h6 class="mb-0">
                        수량
                      </h6>
                      <h6 class="mb-0">
                        0
                      </h6>
                    </div>
                    <div id="trading-lone-tab-1-div-2-subdiv-2">
                      <div class="dropdown">
                        <a class="btn dropbtn font-weight-bold">
                          가능
                          <img src="~img/drop-down-arrow16x16#7e.png" alt="Gobit drop down icon 16x16" class="pl-4 img-fluid">
                        </a>
                        <div class="dropdown-content">
                          <a href="#">75%</a>
                          <a href="#">50%</a>
                          <a href="#">25%</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="trading-lone-tab-1-div-3">
                    <div id="trading-lone-tab-1-div-3-subdiv-1">
                      <h6 class="mb-0">
                        가격
                      </h6>
                      <h6 class="mb-0">
                        190,200
                      </h6>
                    </div>
                    <div id="trading-lone-tab-1-div-3-subdiv-2">
                      <a href="#" class="btn">-</a><a href="#" class="btn">+</a>
                    </div>
                  </div>
                  <div id="trading-lone-tab-1-div-4">
                    <div class="dropdown">
                      <a class="btn dropbtn font-weight-bold">
                        현재가 대비 %
                        <img src="~img/drop-down-arrow16x16#7e.png" alt="Gobit drop down icon 16x16" class="pl-4 img-fluid">
                      </a>
                      <div class="dropdown-content">
                        <a href="#">75%</a>
                        <a href="#">50%</a>
                        <a href="#">25%</a>
                      </div>
                    </div>
                  </div>
                  <div id="trading-lone-tab-1-div-5" class="debugger">
                    <div class="row">
                      <div class="col-6">
                        <h6 class="mb-0 text-left">
                          총액
                        </h6>
                      </div>
                      <div class="col-6">
                        <h6 class="mb-0 text-right">
                          0 KRW
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div id="trading-lone-tab-1-div-6">
                    <button id="trading-lone-tab-1-div-6-button-1" class="btn">
                      초기화
                    </button><button id="trading-lone-tab-1-div-6-button-2" class="btn">
                      매수
                    </button>
                  </div>
                  <div id="trading-lone-tab-1-div-7">
                    <div id="trading-lone-tab-1-div-7-sub-1">
                      <h6 class="mb-0">
                        최소주문금액
                      </h6>
                      <h6 class="mb-0">
                        500 KRW
                      </h6>
                    </div>
                    <div id="trading-lone-tab-1-div-7-sub-2">
                      <h6 class="mb-0">
                        수수료(부가세포함)
                      </h6>
                      <h6 class="mb-0">
                        0.05%
                      </h6>
                    </div>
                  </div>
                  <div id="trading-lone-tab-1-div-8">
                    <button class="btn">
                      호가 주문
                    </button>
                  </div>
                </div>
                <div class="tab-pane fade" id="two" role="tabpanel" aria-labelledby="two-tab">

                </div>
                <div class="tab-pane fade" id="three" role="tabpanel" aria-labelledby="three-tab">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TradingLinkOne'
}
</script>

<style lang='scss' scoped>
  @import '~scss/trading/linkone.scss';
</style>
