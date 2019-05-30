<template>
  <!-- depositwithdraw cointransaction -->
  <div class="app-cointransaction">
    <!-- start transaction -->
    <div class="transaction">
      <!-- start t-head -->
      <div class="t-head">
        <!-- head-upper -->
        <div class="t-head-up">
          <div class="t-head-left">
            <div class="t-head-left-data">총 보유수량</div>
          </div>
          <div class="t-head-right">
            <div class="t-head-right-up">
              0.58236151 ETH
            </div>
            <div class="t-head-right-down">
              144,145 KRW
            </div>
          </div>
        </div>
        <!-- head middle -->
        <div class="t-head-middle">
          <div class="t-middle-left">거래대기</div>
          <div class="t-middle-right">
            0.5789412456 <span>ETH</span>
            <a href="#">
              <img src="~img/right-arrow32x32.png" alt="info32x32" class="arrow">
            </a>
          </div>
        </div>
        <div class="t-head-middle bar">
          <div class="t-middle-left">출금가능 <img src="~img/info32x32.png" alt="info32x32"></div>
          <div class="t-middle-right second-part">
            0 <span>ETH</span>
          </div>
        </div>
        <hr class="trans-hr">
        <!-- head lower -->
        <div class="t-head-lower">
          <ul>
            <li class="">
              <a href="">
                <img src="~img/login32x32.png" alt="login32x32">
                입금하기
              </a>
            </li>
            <li class="">
              <a href="">
                <img src="~img/logout32x32.png" alt="logout32x32">
                출금하기
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- end t-head -->
      <!-- start transaction-body -->
      <div class="t-body-head">
        <div class="t-body-head-left">ETH 입출금 내역</div>
        <div class="t-body-head-right">
          <select class="minimal">
            <option>거래전체</option>
            <option>옵션 1</option>
            <option>옵션 2</option>
            <option>옵션 3</option>
            <option>옵션 4</option>
          </select>
        </div>
      </div>
      <!-- no transaction -->
      <!-- <div class="no-trans">입출금 내역이 없습니다</div> -->
      <!-- no transaction -->
      <!-- with transaction -->
      <div class="t-body-data">
        <div class="deposit-holder">
          <div class="type">입금</div>
          <div class="value">0.52136458 <span>ETH</span></div>
        </div>
        <div class="trans-holder">
          <div class="date">2019.04.16 09:44</div>
          <div class="tokrw">&asymp; 110,270 KRW</div>
        </div>
        <hr class="trans-hr">
        <div class="trans-list-data">
          <div class="tld-up">
            <div class="t-id">거래ID</div>
            <div class="t-addr">
              <a href="">
                0x1HBa5ABXb5Yx1YcQsppqwKtaAGFPYe5xzY1HBa5ABXb5Yx1YcQsppqwKtaAGFPYe5xzY
              </a>
            </div>
          </div>
          <div class="tld-down">
            <div class="t-id">상태</div>
            <div class="tc-result">입금완료</div>
          </div>
        </div>
      </div>
      <div class="t-body-data">
        <div class="deposit-holder">
          <div class="type">입금</div>
          <div class="value">0.52136458 <span>ETH</span></div>
        </div>
        <div class="trans-holder">
          <div class="date">2019.04.16 09:44</div>
          <div class="tokrw">&asymp; 110,270 KRW</div>
        </div>
        <hr class="trans-hr">
        <div class="trans-list-data">
          <div class="tld-up">
            <div class="t-id">거래ID</div>
            <div class="t-addr">
              <a href="">
                0x1HBa5ABXb5Yx1YcQsppqwKtaAGFPYe5xzY1HBa5ABXb5Yx1YcQsppqwKtaAGFPYe5xzY
              </a>
            </div>
          </div>
          <div class="tld-down">
            <div class="t-id">상태</div>
            <div class="tc-result">입금완료</div>
          </div>
        </div>
      </div>
      <div class="t-body-data">
        <div class="deposit-holder">
          <div class="type">입금</div>
          <div class="value">0.52136458 <span>ETH</span></div>
        </div>
        <div class="trans-holder">
          <div class="date">2019.04.16 09:44</div>
          <div class="tokrw">&asymp; 110,270 KRW</div>
        </div>
        <hr class="trans-hr">
        <div class="trans-list-data">
          <div class="tld-up">
            <div class="t-id">거래ID</div>
            <div class="t-addr">
              <a href="">
                0x1HBa5ABXb5Yx1YcQsppqwKtaAGFPYe5xzY1HBa5ABXb5Yx1YcQsppqwKtaAGFPYe5xzY
              </a>
            </div>
          </div>
          <div class="tld-down">
            <div class="t-id">상태</div>
            <div class="tc-result">입금완료</div>
          </div>
        </div>
      </div>
      <!-- with transaction -->
    <!-- end transaction-body -->
    </div>
    <!-- end transaction -->
  </div>
</template>

<script>
export default {
  name: 'Cointransaction'
}
</script>

<style lang='scss' scoped>
  @import '~scss/deposit/cointransaction.scss';
</style>
