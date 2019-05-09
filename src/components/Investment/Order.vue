<template>
  <!-- investment history -->
  <div class="app-order">
    <!-- start tab menu -->
      <div class="menu-handler">
        <div class="menus">
          <router-link to="/investment/balance">
            보유코인
          </router-link>
        </div>
        <div class="menus">
          <router-link to="/investment/history">
            거래내역
          </router-link>
        </div>
        <div class="menus active">
          <router-link to="/investment/wait_orders">
            미체결
          </router-link>
        </div>
      </div>
    <!-- end tab menu -->
    <!-- order head -->
    <div class="o-head">
      <div class="oh-l">미체결내역</div>
      <div class="oh-r"><a href="#">선택주문 취소</a></div>
    </div>
    <!-- order head -->
    <!-- table -->
    <div class="order-body">
      <table>
        <thead>
          <tr>
            <th rowspan="2" ></th>
            <th>마켓명</th>
            <th>주문수량</th>
            <th>체결수량</th>
            <th rowspan="2" class="no-border">주문시간</th>
          </tr>
          <tr>
            <th>거래종류</th>
            <th>주문가격</th>
            <th>미체결수량</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="2">
              <input type="checkbox" class="option-input radio" name="example" />
            </td>
            <td class="to-center">ETH/KRW</td>
            <td>0.789541236</td>
            <td>0</td>
            <td rowspan="2" class="no-border to-center">19.04.16 09:55</td>
          </tr>
          <tr>
            <td class="to-center">매도</td>
            <td>200.000</td>
            <td>0.789541236</td>
          </tr>
          <tr>
            <td rowspan="2">
              <input type="checkbox" class="option-input radio" name="example" />
            </td>
            <td class="to-center">ETH/KRW</td>
            <td>0.789541236</td>
            <td>0</td>
            <td rowspan="2" class="no-border to-center">19.04.16 09:55</td>
          </tr>
          <tr >
            <td class="to-center">매도</td>
            <td>200.000</td>
            <td>0.789541236</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- table -->
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
