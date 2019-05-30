<template>
  <!-- depositwithdraw -->
  <div class="app-depositwithdraw">
    <!-- search -->
    <div class="search">
      <div class="col-sm-12">
          <div class="search-img"><img src="~img/search.png" alt="search icon" class="img-fluid"></div>
          <div class="search-input-box">
            <input type="text" class="search-input"  placeholder="코인명/심볼 검색">
          </div>
      </div>
    </div>
    <!-- container -->
    <div class="deposit-container">
      <!-- start total assets -->
      <div class="total-assets">
        <div class="assets-left">총 보유자산</div>
        <div class="assets-right">133,550 KRW</div>
      </div>
      <!-- end total assets -->
      <!-- start holdcoin -->
      <div class="hold-coin">
        <label class="container">보유 코인만
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
      </div>
      <!-- end holdcoin -->
      <!-- start for-money -->
      <div class="for-money">
        <img src="~img/krw32x32.png" alt="krw32x32" class="money-icon">원화
        <div class="money-lastline">
          124,456<img src="~img/right-arrow32x32.png" alt="krw32x32" class="money-arrow">
        </div>
      </div>
      <!-- end for-money -->
      <!-- start for-coin -->
      <div class="for-coin">
        <div class="coin-holder"><img src="~img/btc32x32.png" alt="krw32x32" class="coin-icon">비트코인</div>
        <div class="right-side">
          <div class="convert-holder">
            <div class="ctop">0.12345698</div>
            <div class="cdown">114,145 KRW</div>
          </div>
          <div class="coin-arrow">
            <img src="~img/right-arrow32x32.png" alt="krw32x32">
          </div>
        </div>
      </div>
      <div class="for-coin">
        <div class="coin-holder"><img src="~img/eth32x32.png" alt="krw32x32" class="coin-icon">이더리움</div>
        <div class="right-side">
          <div class="convert-holder">
            <div class="ctop">0.12345698</div>
            <div class="cdown">114,145 KRW</div>
          </div>
          <div class="coin-arrow">
            <img src="~img/right-arrow32x32.png" alt="krw32x32">
          </div>
        </div>
      </div>
      <div class="for-coin">
        <div class="coin-holder"><img src="~img/sc32x32.png" alt="krw32x32" class="coin-icon">시아코인</div>
        <div class="right-side">
          <div class="convert-holder">
            <div class="ctop">0.12345698</div>
            <div class="cdown">114,145 KRW</div>
          </div>
          <div class="coin-arrow">
            <img src="~img/right-arrow32x32.png" alt="krw32x32">
          </div>
        </div>
      </div>
      <div class="for-coin">
        <div class="coin-holder"><img src="~img/gas32x32.png" alt="krw32x32" class="coin-icon">가스</div>
        <div class="right-side">
          <div class="convert-holder">
            <div class="ctop">0.12345698</div>
            <div class="cdown">114,145 KRW</div>
          </div>
          <div class="coin-arrow">
            <img src="~img/right-arrow32x32.png" alt="krw32x32">
          </div>
        </div>
      </div>
      <div class="for-coin">
        <div class="coin-holder"><img src="~img/gas32x32.png" alt="krw32x32" class="coin-icon">게임크레딧</div>
        <div class="right-side">
          <div class="convert-holder">
            <div class="ctop">0.12345698</div>
            <div class="cdown">114,145 KRW</div>
          </div>
          <div class="coin-arrow">
            <img src="~img/right-arrow32x32.png" alt="krw32x32">
          </div>
        </div>
      </div>
      <!-- end for-coin -->
    </div>
    <!-- container -->
  </div>
</template>

<script>
export default {
  name: 'Depositwithdraw'
}
</script>

<style lang='scss' scoped>
  @import '~scss/deposit/depositwithdraw.scss';
</style>
