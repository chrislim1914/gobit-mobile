<template>
  <!-- exchange search -->
  <div class="app-exchangesearch">
    <div id="exchange-search-holder">
      <div id="exchange-search-content">
        <label class="sr-only" for="inlineFormInputGroup">코인명 검색</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text px-0 py-0">
              <img src="~img/search32x32.png" alt="Gobit search icon" class="img-fluid">
            </div>
          </div>
          <input type="text" class="form-control font-weight-bold px-0 py-0" id="exchange-searchbar-field" placeholder="코인명 검색">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExchangeSearch'
}
</script>

<style lang='scss' scoped>
  @import '~scss/exchange/search.scss';
</style>
