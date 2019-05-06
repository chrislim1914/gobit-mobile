<template>
  <!-- exchange table -->
  <div class="app-exchangetable">
    <div id="exchange-table-holder">
      <div id="exchange-table-content">
        <table id="exchange-table" cellpadding="0" cellspacing="0">
          <tr id="exchange-table-head-row">
            <th class="position-relative">
              지수
              <img src="~img/double-arrow.png" alt="Gobit table header arrow" class="img-fluid position-absolute" style="top:17px;">
            </th>
            <th class="position-relative">
              한글명
              <img src="~img/opposite-arrow.png" alt="Gobit table header arrow" class="img-fluid position-absolute" style="top:17px;">
            </th>
            <th class="position-relative">
              현재가
              <img src="~img/double-arrow.png" alt="Gobit table header arrow" class="img-fluid position-absolute" style="top:17px;">
            </th>
            <th class="position-relative">
              전일대비
              <img src="~img/double-arrow.png" alt="Gobit table header arrow" class="img-fluid position-absolute" style="top:17px;">
            </th>
            <th class="position-relative">
              거래대금
              <img src="~img/double-arrow.png" alt="Gobit table header arrow" class="img-fluid position-absolute" style="top:17px;">
            </th>
          </tr>
          <tr class="exchange-table-body-row" :key="index" v-for="index in 5">
            <td class="position-relative rt">
              &uarr;999
            </td>
            <td>
              비트코인캐시
              <span>
                BTC/KRW
              </span>
            </td>
            <td class="rt">
              369,650
            </td>
            <td class="rt">
              100.55%
              <span>
                5,650
              </span>
            </td>
            <td>
              137,816 천원
            </td>
          </tr>
          <tr class="exchange-table-body-row" :key="index" v-for="index in 5">
            <td class="position-relative bt">
              &uarr;999
            </td>
            <td>
              비트코인에스브이
              <span>
                GRS/KRW
              </span>
            </td>
            <td class="bt">
              5,896,000
            </td>
            <td class="bt">
              -0.40%
              <span>
                2.00
              </span>
            </td>
            <td>
              11,414 천원
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExchangeTable'
}
</script>

<style lang='scss' scoped>
  @import '~scss/exchange/table.scss';
</style>
