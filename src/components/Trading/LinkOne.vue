<template>
  <div class="app-trading-lone">
    <div id="trading-lone-holder">
      <div id="trading-lone-content">
        <div class="container-fluid px-0">
          <div class="row mx-0">
            <div id="trading-lone-left" class="px-0">
              <table id="trading-lone-table-1">
                <tr>
                  <td>

                  </td>
                  <td>

                  </td>
                </tr>
              </table>
              <table id="trading-lone-table-2">
                <tr>
                  <td>

                  </td>
                  <td>

                  </td>
                </tr>
              </table>
            </div>
            <div id="trading-lone-right" class="px-0">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a class="nav-link font-weight-bold active" id="one" data-toggle="tab" href="#one" role="tab" aria-controls="one" aria-selected="true">
                    매수
                  </a>
                </li>
                <li class="nav-item position-relative">
                  <div id="v-divide-1"></div>
                  <a class="nav-link font-weight-bold" id="two" data-toggle="tab" href="#two" role="tab" aria-controls="two" aria-selected="false">
                    매도
                  </a>
                  <div id="v-divide-2"></div>
                </li>
                <li class="nav-item">
                  <a class="nav-link font-weight-bold" id="three" data-toggle="tab" href="#three" role="tab" aria-controls="three" aria-selected="false">
                    미체결
                  </a>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="one" role="tabpanel" aria-labelledby="one-tab">...</div>
                <div class="tab-pane fade" id="two" role="tabpanel" aria-labelledby="two-tab">...</div>
                <div class="tab-pane fade" id="three" role="tabpanel" aria-labelledby="three-tab">...</div>
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
