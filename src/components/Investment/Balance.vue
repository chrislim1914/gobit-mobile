<template>
  <!-- investment balance -->
  <div class="app-balance">
    <div class="container-fluid">
      <!-- menu -->
      <div class="row tab-menu">
        <div class="col-sm-4 menus active">
            보유코인
        </div>
        <div class="col-sm-4 menus">
          <a href="">
            보유코인
          </a>
        </div>
        <div class="col-sm-4 menus">
          <a href="">
            미체결
          </a>
        </div>
      </div>
      <!-- end menu -->
      <!-- start balance container -->
      <div class="row balance">
        <div class="bheader">
          <div class="col-sm-6 bheadleft">내 보유자산</div>
          <div class="col-sm-6 bheadright">KRW 환산 추정값 <i class="fa fa-question-circle"></i></div>
        </div>
        <div class="bheader">
          <div class="col-sm-6 assetsleft">
            <div class="assetslefttop">보유 KRW</div>
            <div class="assetsleftbottom">0</div>
          </div>
          <div class="col-sm-6 assetsright">
            <div class="assetsrighttop">총 보유자산</div>
            <div class="assetsrightbottom">133,551</div>
          </div>
        </div>
        <div class="bheader total">
          <div class="col-sm-6 totalleft">
            <div class="row totaldata">
              <div class="col col-sm-6">총매수</div>
              <div class="col col-sm-6 text-right">266,123</div>
              <div class="col col-sm-6">총평가</div>
              <div class="col col-sm-6 text-right">266,123</div>
            </div>
          </div>
          <div class="col-sm-6 totalright">
            <div class="row totaldata">
              <div class="col col-sm-6">평가손익</div>
              <div class="col col-sm-6 text-right text-primary">-166,123</div>
              <div class="col col-sm-6">수익률</div>
              <div class="col col-sm-6 text-right text-primary">-48.88%</div>
            </div>
          </div>
        </div>
        <!-- coin -->
        <div class="row the-coin">
          <div class="col-sm-6 coinleft font-weight-bold">
            <div class="">시아코인</div>
            <div class="">(DSN)</div>
          </div>
          <div class="col-sm-6 coinright">
            <div class="row totaldata">
              <div class="col col-sm-6">평가손익</div>
              <div class="col col-sm-6 text-right text-primary">266,123</div>
              <div class="col col-sm-6">수익률</div>
              <div class="col col-sm-6 text-right text-primary">-48.88%</div>
            </div>
          </div>
        </div>
        <hr>
        <!-- end on coin -->
        <!-- retention -->
        <div class="row retention">
          <div class="col-sm-6 r-quantity">
            <div class="">5,283.12345678 <span class="font-weight-bold">DSN</span></div>
            <div class="sub-retention">보유수량</div>
            <div class="">18,987 <span class="font-weight-bold">KRW</span></div>
            <div class="sub-retention">평가금액</div>
          </div>
          <div class="col-sm-6 r-quantity">
            <div class="">29.65 <span class="font-weight-bold">KRW</span></div>
            <div class="sub-retention">매수평균가</div>
            <div class="">56,647 <span class="font-weight-bold">KRW</span></div>
            <div class="sub-retention">매수금액</div>
          </div>
        </div>
        <!-- end retention -->
        <!-- start of 이더리움 -->
        <div class="row the-coin">
          <div class="col-sm-6 coinleft font-weight-bold">
            <div class="">시아코인</div>
            <div class="">(DSN)</div>
          </div>
          <div class="col-sm-6 coinright">
            <div class="row totaldata">
              <div class="col col-sm-6">평가손익</div>
              <div class="col col-sm-6 text-right text-danger">4,809</div>
              <div class="col col-sm-6">수익률</div>
              <div class="col col-sm-6 text-right text-danger">4.78%</div>
            </div>
          </div>
        </div>
        <hr>
        <!-- end of 이더리움 -->
        <div class="row retention">
        <div class="col-sm-6 r-quantity">
          <div class="">5,283.12345678 <span class="font-weight-bold">DSN</span></div>
          <div class="sub-retention">보유수량</div>
          <div class="">18,987 <span class="font-weight-bold">KRW</span></div>
          <div class="sub-retention">평가금액</div>
        </div>
        <div class="col-sm-6 r-quantity">
          <div class="">29.65 <span class="font-weight-bold">KRW</span></div>
          <div class="sub-retention">매수평균가</div>
          <div class="">56,647 <span class="font-weight-bold">KRW</span></div>
          <div class="sub-retention">매수금액</div>
        </div>
      </div>
      <!-- footer -->
      <div class="row balance-footer">
        <div class="col-sm-12">
          *매수평균가, 평가손익, 수익률은 모두 KRW로 환산한 추정값으로 참고용입니다. <i class="fa fa-question-circle"></i>
        </div>
      </div>
      <!-- end footer -->
      </div>
      <!-- end balance container -->
    </div>
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
