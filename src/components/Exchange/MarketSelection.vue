<template>
  <div class="app-exchange-marketselection">
    <div id="exchange-marketselection-holder">
      <div id="exchange-marketselection-content">
        <ul class="mx-0 my-0 px-0 py-0">
          <li :class="{ 'active': $route.path === '/exchange/first_market' }">
            <router-link to="/exchange/first_market">
              <img src="~img/gold_coin.png" alt="Gobit exchange first market gold coin icon" class="img-fluid">
              <h6>
                1부 마켓
              </h6>
            </router-link>
          </li>
          <li :class="{ 'active': $route.path === '/exchange/second_market' }">
            <router-link to="/exchange/second_market">
              <img src="~img/silver_coin.png" alt="Gobit exchange second market silver coin icon" class="img-fluid">
              <h6>
                2부 마켓
              </h6>
            </router-link>
          </li>
          <li :class="{ 'active': $route.path === '/exchange/third_market' }">
            <router-link to="/exchange/third_market">
              <img src="~img/bronze_coin.png" alt="Gobit exchange third market bronze coin icon" class="img-fluid">
              <h6>
                3부 마켓
              </h6>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExchangeMarketSelection'
}
</script>

<style lang='scss' scoped>
  @import '~scss/exchange/marketselection.scss';
</style>
