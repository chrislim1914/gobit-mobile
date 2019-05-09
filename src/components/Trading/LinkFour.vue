<template>
  <div class="app-trading-lfour">
    <div id="trading-lfour-holder">
      <div id="trading-lfour-content">
        <div id="trading-lfour-section-1">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn" :class="{ 'active': activeTable === '실시간 체결기록' }" @click="activeTable = '실시간 체결기록'">실시간 체결기록</button>
            <button type="button" class="btn" :class="{ 'active': activeTable === '일자별 체결기록' }" @click="activeTable = '일자별 체결기록'">일자별 체결기록</button>
          </div>
        </div>
        <div id="trading-lfour-section-2">
          <table id="trading-record-table-1" :class="{ 'd-none': activeTable === '일자별 체결기록' }">
            <thead>
              <tr>
                <th>일시</th>
                <th>구분</th>
                <th>가격 (KRW)</th>
                <th>수량 (ETH)</th>
              </tr>
            </thead>
            <tbody>
              <tr :key="index" v-for="(record, index) in records">
                <td>
                  <h6 class="trading-record-table-1-date mx-0 my-0">{{ record.date }}</h6><br/>
                  <h6 class="trading-record-table-1-year mx-0 my-0">{{ record.year }}</h6>
                </td>
                <td class="bt">{{ record.classification }}</td>
                <td class="bt">{{ record.pricekrw }}</td>
                <td class="font-weight-bold">{{ record.priceeth }}</td>
              </tr>
            </tbody>
          </table>
          <table id="trading-record-table-2" :class="{ 'd-none': activeTable === '실시간 체결기록' }">
            <thead>
              <tr>
                <th>일시</th>
                <th>종가 (KRW)</th>
                <th>전일대비</th>
                <th>등락률</th>
                <th>거래량 (ETH)</th>
              </tr>
            </thead>
            <tbody>
              <tr :key="index" v-for="(record, index) in records2">
                <td>
                  <h6 class="trading-record-table-2-time mx-0 my-0">{{ record.time }}</h6><br/>
                  <h6 class="trading-record-table-2-date mx-0 my-0">{{ record.date }}</h6>
                </td>
                <td>{{ record.pricekrw }}</td>
                <td class="rt">{{ record.fullday }}</td>
                <td class="bt">{{ record.percentage }}</td>
                <td>{{ record.priceeth }}</td>
              </tr>
            </tbody>
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
          date: '04-26',
          year: '2019',
          classification: '매도',
          pricekrw: '188,150',
          priceeth: '0.015'
        },
        {
          date: '04-26 ',
          year: '2019',
          classification: '매도',
          pricekrw: '188,150',
          priceeth: '0.015'
        },
        {
          date: '04-26',
          year: '2019',
          classification: '매수',
          pricekrw: '188,150',
          priceeth: '0.015'
        },
        {
          date: '04-26',
          year: '2019',
          classification: '매수',
          pricekrw: '188,150',
          priceeth: '0.015'
        },
        {
          date: '04-26',
          year: '2019',
          classification: '매도',
          pricekrw: '188,150',
          priceeth: '0.015'
        }
      ],
      records2: [
        {
          time: '18:30:36',
          date: '04-08',
          pricekrw: '186,800',
          fullday: '-7,200',
          percentage: '-3.71%',
          priceeth: '1,906.696'
        },
        {
          time: '18:30:36',
          date: '04-08',
          pricekrw: '186,800',
          fullday: '-7,200',
          percentage: '-3.71%',
          priceeth: '1,906.696'
        }
      ],
      activeTable: '실시간 체결기록'
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '~scss/trading/linkfour.scss';
</style>
