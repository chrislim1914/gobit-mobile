<template>
  <div class="app-exchange">
    <!-- search -->
    <div class="container-fluid">
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
