<template>
  <!-- depositwithdraw wallet address -->
  <div class="app-walletaddress">
    <div class="app-walletaddress">
      <!-- notes -->
      <div class="dw-notes">회원님에게 할당된 아래 주소로 네오를 입금할 수 있습니다</div>
      <!-- notes -->
      <!-- address header -->
      <div class="address-head-holder">
        <div class="address-head-l">내 <span>NEO</span> 입금 주소</div>
        <div class="address-head-r"><img src="~img/c-out32x32.png" alt="c-out32x32 icon">공유하기</div>
      </div>
      <!-- address header -->
      <!-- address -->
      <div class="address-data">
        <div class="qr-code">
          <img src='https://chart.googleapis.com/chart?cht=qr&chl=http%3A%2F%2Fm.gobit.me%2Fdepositwithdraw%2Fqrcode&chs=180x180&choe=UTF-8&chld=L|2' alt='qr code'>
          <a href='https://www.qr-code-generator.com/' border='0' style='cursor:default'  rel='nofollow'></a>
        </div>
        <div class="addr-code">0x1HBa5ABXb5Yx1YcQsppqwKtaAGFPYedfgdfgfd</div>
      </div>
      <!-- address -->
      <!-- copy button -->
      <div class="copy-holder">
        <input class="copy-addrs" type="button" value="주소 복사하기">
      </div>
      <!-- copy button -->
      <!-- lower notes -->
      <div class="lower-note">
        <p>최소 입금금액은 0.0015 ETH 입니다</p>
        <p>0.0015 ETH 미만 입금시 잔고 반영이 불가능 합니다. </p>
      </div>
      <!-- lower notes -->
      <!-- footer -->
      <div class="ad-footer">
        <div class="ad-f-head">입금전 꼭 알아두세요</div>
        <div class="ad-f-list">
          <ul>
            <li>컨트랙트 지갑에서 입금하거나 컨트랙트를 사용하여 입금할 경우 지갑에 반영되지 않을 수 있습니다</li>
            <li>위 주소로 이더리움(ETH)만 입금 가능합니다. 해당 주소로 다른 암호화폐를 입금 시도할 경우에 발생할 수 있는 오류/손실은 복구 불가능 합니다</li>
            <li>48번의 Confirmation이 발생한 이후, 입금 프로세스를 거쳐 잔고에 반영 됩니다. 입금 프로세스는 자동으로 진행되며 네트워크 상황에 따라 소요시간이 달라질 수 있습니다</li>
            <li>0.0015ETH(최소입금금액) 이상 입금해야만 잔고에 반영됩니다.</li>
            <li>위주소는 입금전용 주소입니다</li>
          </ul>
        </div>
      </div>
      <!-- footer -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'WalletAddress'
}
</script>

<style lang='scss' scoped>
  @import '~scss/deposit/walletaddress.scss';
</style>
