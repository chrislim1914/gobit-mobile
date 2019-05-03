<template>
  <!-- exchange symbol bar -->
  <div class="app-exchangesymbolbar">
    <div id="exchange-symbol-holder">
      <div id="exchange-symbol-content">
        <div class="list-group list-group-horizontal text-center">
          <button class="list-group-item px-0 py-0 list-group-item-action active">
            KRW
          </button>
          <button class="list-group-item px-0 py-0 list-group-item-action">
            BTC
          </button>
          <button class="list-group-item px-0 py-0 list-group-item-action">
            ETH
          </button>
          <button class="list-group-item px-0 py-0 list-group-item-action">
            DSN
          </button>
          <span id="exchange-symbol-preference">
            <label id="exchange-symbol-preference-label" class="font-weight-bold mb-0">
              <input type="checkbox" name="exchange-symbol-preference-box" id="exchange-symbol-preference-box" class="exchange-symbol-preference-chkbox">
              관심
            </label>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExchangeSymbolbar'
}
</script>

<style lang='scss' scoped>
  @import '~scss/exchange/symbolbar.scss';
</style>
