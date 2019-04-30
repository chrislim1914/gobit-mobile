<template>
  <!-- investment history -->
  <div class="app-order">
    <div class="container-fluid">
      <!-- menu -->
      <div class="row tab-menu">
        <div class="col-sm-4 menus">
          <router-link to="/investment/balance">
            보유코인
          </router-link>
        </div>
        <div class="col-sm-4 menus">
          <router-link to="/investment/history">
            거래내역
          </router-link>
        </div>
        <div class="col-sm-4 menus active">
          <router-link to="/investment/wait_orders">
            미체결
          </router-link>
        </div>
      </div>
      <!-- end menu -->
      <!-- order container -->
      <div class="row order-container">
        <div class="col-sm-6 order-head-left">미체결내역</div>
        <div class="col-sm-6 order-head-right"><a href="#" class="make-button">선택주문 취소</a></div>
        <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" rowspan="2" > </th>
            <th scope="col"  class="thead">마켓명</th>
            <th scope="col">주문수량</th>
            <th scope="col">체결수량</th>
            <th scope="col" rowspan="2">주문시간</th>
          </tr>
          <tr>
            <th scope="col">거래종류</th>
            <th scope="col">주문가격</th>
            <th scope="col">미체결수량</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" rowspan="2">
              <input data-v-ed01be88="" type="checkbox" name="checked-me" id="checked-me" class="checked">
            </th>
            <td>ETH/KRW</td>
            <td>0.789541236</td>
            <td>0</td>
            <td rowspan="2">19.04.16 09:55</td>
          </tr>
          <tr>
            <td>매도</td>
            <td>200.000</td>
            <td>0.789541236</td>
          </tr>
          <tr>
            <th scope="row" rowspan="2">
              <input data-v-ed01be88="" type="checkbox" name="checked-me" id="checked-me" class="checked">
            </th>
            <td>ETH/KRW</td>
            <td>0.789541236</td>
            <td>0</td>
            <td rowspan="2">19.04.16 09:55</td>
          </tr>
          <tr>
            <td>매도</td>
            <td>200.000</td>
            <td>0.789541236</td>
          </tr>
        </tbody>
      </table>
      </div>
      <!-- end of order container -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'order'
}
</script>

<style lang='scss' scoped>
  @import '~scss/investment/order.scss';
</style>
