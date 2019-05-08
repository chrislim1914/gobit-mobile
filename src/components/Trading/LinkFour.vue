<template>
  <div class="app-trading-lfour">
    <div id="trading-lfour-holder">
      <div id="trading-lfour-content">
        <div id="trading-lfour-section-1">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn">실시간 체결기록</button>
            <button type="button" class="btn">일자별 체결기록</button>
          </div>
        </div>
        <div id="trading-lfour-section-2">
          <table id="trading-records-table-1" cellpadding="0" cellspacing="0">
            <tr id="trading-records-table-1-header">
              <th>
                일시
              </th>
              <th>
                구분
              </th>
              <th>
                가격 (KRW)
              </th>
              <th>
                수량 (ETH)
              </th>
            </tr>
            <tr :key="index" v-for="(record, index) in records">
              <td>{{ record.date }}</td>
              <td>{{ record.classification }}</td>
              <td>{{ record.pricekrw }}</td>
              <td>{{ record.priceeth }}</td>
            </tr>
          </table>
          <table id="trading-records-table-2" class="d-none" cellpadding="0" cellspacing="0">
            <tr>
              <th>
                일시
              </th>
              <th>
                종가 (KRW)
              </th>
              <th>
                전일대비
              </th>
              <th>
                등락률
              </th>
              <th>
                거래량 (ETH)
              </th>
            </tr>
            <tr :key="index" v-for="(record, index) in records">
              <td>{{ record.date }}</td>
              <td>{{ record.classification }}</td>
              <td>{{ record.pricekrw }}</td>
              <td>{{ record.priceeth }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TradingLinkFour',
  data () {
    return {
      records: [
        {
          date: '04-26-2019',
          classification: '매도',
          pricekrw: '188,150',
          priceeth: '0.015'
        },
        {
          date: '04-26-2019',
          classification: '매도',
          pricekrw: '188,150',
          priceeth: '0.015'
        },
        {
          date: '04-26-2019',
          classification: '매수',
          pricekrw: '188,150',
          priceeth: '0.015'
        },
        {
          date: '04-26-2019',
          classification: '매수',
          pricekrw: '188,150',
          priceeth: '0.015'
        },
        {
          date: '04-26-2019',
          classification: '매도',
          pricekrw: '188,150',
          priceeth: '0.015'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '~scss/trading/linkfour.scss';
</style>
