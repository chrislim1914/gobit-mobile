<template>
  <!-- commission -->
  <div class="app-commission">
    <!-- start topbar -->
      <div class="topbar-container">
        <div class="back">
          <img src="~img/back-arrow32x32.png" alt="back icon">
        </div>
        <div class="title">
          수수료 등급
        </div>
      </div>
    <!-- end topbar -->

    <!-- title -->
      <div class="body-title">
        회원님의 현재 거래 수수료
      </div>
    <!-- title -->

    <!-- table -->
    <div class="comm-table">
      <table>
        <thead>
          <td>
            <p>KRW</p>
            <p>마켓</p>
          </td>
          <td>
            <p>BTC</p>
            <p>마켓</p>
          </td>
          <td>
            <p>ETH</p>
            <p>마켓</p>
          </td>
          <td>
            <p>USDT</p>
            <p>마켓</p>
          </td>
        </thead>
        <tr>
          <td>0.05%</td>
          <td>0.25%</td>
          <td>0.25%</td>
          <td>0.25%</td>
        </tr>
      </table>
    </div>
    <!-- table -->

    <!-- lower part -->
    <div class="lower">
      <ul>
        <li>향후 회원등급에 따른 수수료 우대 정책을 준비할 예정입니다</li>
        <li>거래 수수료에는 부가세가 포함되어 있습니다</li>
      </ul>
      <div><a href="">거래 수수료 (부가세포함) 상세 안내></a></div>
    </div>
    <!-- lower part -->
  </div>
</template>

<script>
export default {
  name: 'Commission'
}
</script>

<style lang='scss' scoped>
  @import '~scss/commission/base.scss';
</style>
