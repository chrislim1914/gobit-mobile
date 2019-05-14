<template>
  <!-- investment balance -->
  <div class="app-balance">
    <!-- start tab menu -->
      <div class="menu-handler">
        <div class="menus active">
          <router-link to="/investment/balance">
            보유코인
          </router-link>
        </div>
        <div class="menus">
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
    <!-- header -->
    <div class="b-head-handler">
      <div class="b-head-up">
        <div class="bhu-l">내 보유자산</div>
        <div class="bhu-r">
          KRW 환산 추정값 <img src="~img/info32x32.png" alt="info32x32 icon">
        </div>
      </div>
      <div class="b-head-middle">
        <div class="bhm-data-l">
          <div>보유KRW</div>
          <div class="numbered">0</div>
        </div>
        <div class="bhm-data-r">
          <div>총보유자산</div>
          <div class="numbered">133,551</div>
        </div>
      </div>
      <div class="b-head-lower">
        <div class="bhl-holder">
          <div class="bhl-l">
            <ul>
              <li>총매수</li>
              <li>266,123</li>
            </ul>
          </div>
          <div class="bhl-r">
            <ul>
              <li>평가손익</li>
              <li>-266,123</li>
            </ul>
          </div>
        </div>
        <div class="bhl-holder">
          <div class="bhl-l">
            <ul>
              <li>총평가</li>
              <li>266,123</li>
            </ul>
          </div>
          <div class="bhl-r">
            <ul>
              <li>수익률</li>
              <li>-49.78%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- header -->
    <!-- balance body -->
    <div class="b-body-container">
      <div class="b-body">
        <div class="b-body-up">
          <div class="bb-up-l">
            <p>시아코인</p>
            <p>(SC)</p>
          </div>
          <div class="bb-up-r">
            <div class="to-left">평가손익</div>
            <div class="to-right to-blue">-137,733</div>
            <div class="to-left">수익률</div>
            <div class="to-right to-blue">-48.88%</div>
          </div>
        </div>
        <div class="b-body-down-container">
          <div class="b-body-down">
            <div class="bbd-l">
              <p class="p-top">5,283.12345678 <span>SC</span></p>
              <p class="r-down">보유수량</p>
            </div>
            <div class="bbd-r">
              <p class="p-top">29.65 <span>KRW</span></p>
              <p class="r-down">매수평균가</p>
            </div>
          </div>
          <div class="b-body-down">
            <div class="bbd-l">
              <p class="p-top">18,913 <span>KRW</span></p>
              <p class="r-down">평가금액</p>
            </div>
            <div class="bbd-r">
              <p class="p-top">156,647 <span>KRW</span></p>
              <p class="r-down">매수평균가</p>
            </div>
          </div>
        </div>
      </div>
      <div class="b-body">
        <div class="b-body-up">
          <div class="bb-up-l">
            <p>이더리움</p>
            <p>(ETH)</p>
          </div>
          <div class="bb-up-r">
            <div class="to-left">평가손익</div>
            <div class="to-right to-red">-137,733</div>
            <div class="to-left">수익률</div>
            <div class="to-right to-red">-48.88%</div>
          </div>
        </div>
        <div class="b-body-down-container">
          <div class="b-body-down">
            <div class="bbd-l">
              <p class="p-top">5,283.12345678 <span>SC</span></p>
              <p class="r-down">보유수량</p>
            </div>
            <div class="bbd-r">
              <p class="p-top">29.65 <span>KRW</span></p>
              <p class="r-down">매수평균가</p>
            </div>
          </div>
          <div class="b-body-down">
            <div class="bbd-l">
              <p class="p-top">18,913 <span>KRW</span></p>
              <p class="r-down">평가금액</p>
            </div>
            <div class="bbd-r">
              <p class="p-top">156,647 <span>KRW</span></p>
              <p class="r-down">매수평균가</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- balance body -->
    <!-- balance footer -->
    <div class="b-footer-container">
      <p>*매수평균가, 평가손익, 수익률은 모두 KRW로 환산한 추정값으로 참고용입니다.</p>
      <img src="~img/info32x32.png" alt="info32x32 icon">
    </div>
    <!-- balance footer -->
  </div>
</template>

<script>
export default {
  name: 'balance'
}
</script>

<style lang='scss' scoped>
  @import '~scss/investment/balance.scss';
</style>
