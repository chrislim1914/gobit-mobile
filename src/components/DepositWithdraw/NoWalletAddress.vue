<template>
  <!-- depositwithdraw without address -->
  <div class="app-nowalletaddress">
    <div class="app-walletaddress">
      <!-- address header -->
      <div class="address-head-holder">
        <div class="address-head-l">내 <span>NEO</span> 입금 주소</div>
      </div>
      <!-- address header -->
      <!-- address -->
      <div class="address-data">
        <input type="button" value="+" >
      </div>
      <!-- address -->
      <!-- lower notes -->
      <div class="lower-note">
        <p>버튼을 클릭하세요!</p>
        <p>회원님 고유의 NEO 입금주소가 발급됩니다.</p>
      </div>
      <!-- lower notes -->
      <!-- footer -->
      <div class="ad-footer">
        <div class="ad-f-head">입금전 꼭 알아두세요</div>
        <div class="ad-f-list">
          <ul>
            <li>위주소로 네오만 입금 가능합니다. 해당 주소로 다른 암호화폐르 입금시도할 경우에 발생할 수 있는 오류/손실은 복구 불가능 합니다</li>
            <li>10번의 Confirmation이 발생한 이후, 입금 프로세스를 거쳐 잔고에 반영 됩니다. 입금프로세스는 자동으로 진행되며, 네트워크 상황에 따라 소요시간이 달라질 수 있습니다</li>
            <li>위 주소는 입금전용 주소입니다.</li>
          </ul>
        </div>
        <div class="ad-f-last-list">
          <ul>
            <li>최소입금금액 미만 입금시에는 잔고 반영 및 입금 취소가 불가능합니다.</li>
            <li> 위 주소는 입금전용 주소입니다.</li>
          </ul>
        </div>
      </div>
      <!-- footer -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoWalletAddress'
}
</script>

<style lang='scss' scoped>
  @import '~scss/deposit/nowalletaddress.scss';
</style>
