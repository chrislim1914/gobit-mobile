<template>
  <!-- exchange table -->
  <div class="app-exchangetable">
    <div id="exchange-table-holder">
      <div id="exchange-table-content">
        <table id="exchange-table" cellpadding="0" cellspacing="0">
          <thead>
            <tr>
              <th class="position-relative">
                지수
                <img src="~img/double-arrow.png" alt="Gobit table header arrow" class="img-fluid position-absolute">
              </th>
              <th class="position-relative">
                한글명
                <img src="~img/opposite-arrow.png" alt="Gobit table header arrow" class="img-fluid position-absolute">
              </th>
              <th class="position-relative">
                현재가
                <img src="~img/double-arrow.png" alt="Gobit table header arrow" class="img-fluid position-absolute">
              </th>
              <th class="position-relative">
                전일대비
                <img src="~img/double-arrow.png" alt="Gobit table header arrow" class="img-fluid position-absolute">
              </th>
              <th class="position-relative">
                거래대금
                <img src="~img/double-arrow.png" alt="Gobit table header arrow" class="img-fluid position-absolute">
              </th>
            </tr>
          </thead>
          <tbody>

          </tbody>
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
