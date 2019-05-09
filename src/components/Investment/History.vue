<template>
  <!-- investment history -->
  <div class="app-history">
    <!-- start tab menu -->
      <div class="menu-handler">
        <div class="menus">
          <router-link to="/investment/balance">
            보유코인
          </router-link>
        </div>
        <div class="menus active">
          <router-link to="/investment/history">
            거래내역
          </router-link>
        </div>
        <div class="menus">
          <router-link to="/investment/wait_orders">
            미체결
          </router-link>
        </div>
      </div>
    <!-- end tab menu -->
    <!-- history head -->
    <div class="h-head">
      <div class="hh-box">거래내역 조회</div>
      <div class="drop-box">
        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                거래 전체
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another</a>
              <a class="dropdown-item" href="#">Something</a>
            </div>
      </div>
    </div>
    <!-- history head -->
    <!-- history data-table -->
    <div class="h-table-data">
      <table>
        <thead>
          <tr>
            <th>주문시간</th>
            <th>주문시간</th>
            <th>종류</th>
            <th>수수료</th>
            <th>정산금액(수수료반영)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>19.04.16 09:55</td>
            <td>ETH</td>
            <td>종류</td>
            <td>1,000.00 KRW</td>
            <td>0.125849554 ETH</td>
          </tr>
          <tr>
            <td>19.04.16 09:55</td>
            <td>ETH</td>
            <td>종류</td>
            <td>1,000.00 KRW</td>
            <td>0.125849554 ETH</td>
          </tr>
          <tr>
            <td>19.04.16 09:55</td>
            <td>ETH</td>
            <td>종류</td>
            <td>1,000.00 KRW</td>
            <td>0.125849554 ETH</td>
          </tr>
          <tr>
            <td>19.04.16 09:55</td>
            <td>ETH</td>
            <td>종류</td>
            <td>1,000.00 KRW</td>
            <td>0.125849554 ETH</td>
          </tr>
          <tr>
            <td>19.04.16 09:55</td>
            <td>ETH</td>
            <td>종류</td>
            <td>1,000.00 KRW</td>
            <td>0.125849554 ETH</td>
          </tr>
          <tr>
            <td>19.04.16 09:55</td>
            <td>ETH</td>
            <td>종류</td>
            <td>1,000.00 KRW</td>
            <td>0.125849554 ETH</td>
          </tr>
          <tr>
            <td>19.04.16 09:55</td>
            <td>ETH</td>
            <td>종류</td>
            <td>1,000.00 KRW</td>
            <td>0.125849554 ETH</td>
          </tr>
          <tr>
            <td>19.04.16 09:55</td>
            <td>ETH</td>
            <td>종류</td>
            <td>1,000.00 KRW</td>
            <td>0.125849554 ETH</td>
          </tr>
          <tr>
            <td>19.04.16 09:55</td>
            <td>ETH</td>
            <td>종류</td>
            <td>1,000.00 KRW</td>
            <td>0.125849554 ETH</td>
          </tr>
          <tr>
            <td>19.04.16 09:55</td>
            <td>ETH</td>
            <td>종류</td>
            <td>1,000.00 KRW</td>
            <td>0.125849554 ETH</td>
          </tr>
          <tr>
            <td>19.04.16 09:55</td>
            <td>ETH</td>
            <td>종류</td>
            <td>1,000.00 KRW</td>
            <td>0.125849554 ETH</td>
          </tr>
          <tr>
            <td>19.04.16 09:55</td>
            <td>ETH</td>
            <td>종류</td>
            <td>1,000.00 KRW</td>
            <td>0.125849554 ETH</td>
          </tr>
          <tr>
            <td>19.04.16 09:55</td>
            <td>ETH</td>
            <td>종류</td>
            <td>1,000.00 KRW</td>
            <td>0.125849554 ETH</td>
          </tr>
          <tr>
            <td>19.04.16 09:55</td>
            <td>ETH</td>
            <td>종류</td>
            <td>1,000.00 KRW</td>
            <td>0.125849554 ETH</td>
          </tr>
          <tr>
            <td>19.04.16 09:55</td>
            <td>ETH</td>
            <td>종류</td>
            <td>1,000.00 KRW</td>
            <td>0.125849554 ETH</td>
          </tr>
          <tr>
            <td>19.04.16 09:55</td>
            <td>ETH</td>
            <td>종류</td>
            <td>1,000.00 KRW</td>
            <td>0.125849554 ETH</td>
          </tr>
          <tr>
            <td>19.04.16 09:55</td>
            <td>ETH</td>
            <td>종류</td>
            <td>1,000.00 KRW</td>
            <td>0.125849554 ETH</td>
          </tr>
          <tr>
            <td>19.04.16 09:55</td>
            <td>ETH</td>
            <td>종류</td>
            <td>1,000.00 KRW</td>
            <td>0.125849554 ETH</td>
          </tr>
          <tr>
            <td>19.04.16 09:55</td>
            <td>ETH</td>
            <td>종류</td>
            <td>1,000.00 KRW</td>
            <td>0.125849554 ETH</td>
          </tr>
          <tr>
            <td>19.04.16 09:55</td>
            <td>ETH</td>
            <td>종류</td>
            <td>1,000.00 KRW</td>
            <td>0.125849554 ETH</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- history data-table -->
  </div>
</template>

<script>
export default {
  name: 'history'
}
</script>

<style lang='scss' scoped>
  @import '~scss/investment/history.scss';
</style>
