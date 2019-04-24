<template>
  <div class="app-exchange">
    <div class="container-fluid">
      <!-- search -->
      <div id="exchange-searchbar-row" class="row">
        <div class="col-12 pt-2">
          <label class="sr-only" for="exchange-searchbar-field">코인명 검색</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <i id="exchange-searchbar-icon" class="fa-2x fa fa-search"></i>
              </div>
            </div>
            <input type="text" class="form-control" id="exchange-searchbar-field" placeholder="코인명 검색">
          </div>
        </div>
      </div>
      <!-- tickerbar -->
      <div id="exchange-tickerbar-row" class="row">
        <div class="col-12">
          <div class="container-fluid">
            <div id="exchange-tickerbar-content-row" class="row">
              <div class="col-6">
                <div class="row">
                  <div class="col-6">
                    총 매수
                  </div>
                  <div class="col-6 text-right">
                    <h6>266,481</h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    총 평가
                  </div>
                  <div class="col-6 text-right">
                    <h6>129,544</h6>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="row">
                  <div class="col-6">
                    평가손익
                  </div>
                  <div class="col-6 text-right">
                   <h6 class="exchange-tickerbar-right-values">-136,936</h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    수익률
                  </div>
                  <div class="col-6 text-right">
                    <h6 class="exchange-tickerbar-right-values">-51.39%</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- extra -->
    <div id="extra-colored-space"></div>
    <!-- globals -->
    <global-cs></global-cs>
    <global-footer></global-footer>
  </div>
</template>

<script>
import CustomerService from '../Globals/CustomerService'
import Footer from '../Globals/Footer'
export default {
  name: 'Exchange',
  components: {
    'global-footer': Footer,
    'global-cs': CustomerService
  }
}
</script>

<style lang='scss' scoped>
  @import '~scss/exchange/base.scss';
</style>
