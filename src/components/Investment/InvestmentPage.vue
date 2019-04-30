<template>
  <!-- investment -->
  <div class="app-investment">
    <div class="container-fluid">
      <!-- header -->
      <div class="invest-head">
        <div class="col col-sm-2 invest-back"><a href=""><img src="~img/back-arrow32x32.png" data-effect="sidebar" alt="gobit logo" class="img-fluid"></a></div>
        <div class="col col-sm-8 invest-title">투자내역</div>
        <div class="col col-sm-1 invest-icons">
          <a href="#">
            <img src="~img/home32x32.png" data-effect="sidebar" alt="gobit logo" class="img-fluid">
          </a>
        </div>
        <div class="col col-sm-1 invest-icons">
          <a href="#">
            <img src="~img/menu.png" data-effect="sidebar" alt="gobit logo" class="img-fluid">
          </a>
        </div>
      </div>
      <!-- tab -->
      <div class="nav-align-center invest-tab">
        <ul class="nav nav-tabs">
          <li class="listing">
            <a class="active" href="#balance" role="tab" data-toggle="tab">
              보유코인
            </a>
          </li>
          <li class="listing">
            <a href="#history" role="tab" data-toggle="tab">
              거래내역
            </a>
          </li>
          <li class="listing">
            <a href="#order" role="tab" data-toggle="tab">
              미체결
            </a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <!-- balance start -->
          <div class="tab-pane active" id="balance">
            <div class="balance-panel">
              <div class="row">
                <div class="col-sm-6 bheadleft">
                  내 보유자산
                </div>
                <div class="col-sm-6 bheadright">
                   KRW 환산 추정값 <i class="fa fa-question-circle"></i>
                </div>
                <div class="col-sm-6 assetsleft">
                  <div class="assetslefttop">보유 KRW</div>
                  <div class="assetsleftbottom">0</div>
                </div>
                <div class="col-sm-6 assetsright">
                  <div class="assetsrighttop">총 보유자산</div>
                  <div class="assetsrightbottom">133,551</div>
                </div>
                <div class="row total">
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
                <hr />
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
                <hr />
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
            </div>
          </div>
          <!-- balance end -->
          <!-- history start -->
          <div class="tab-pane" id="history">
            <div class="row history-panel">
              <div class="col-sm-6 font-weight-bold">거래내역 조회</div>
              <div class="col-sm-6 history-dd">
                <div class="dropdown show dd">
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
            </div>
            <div class="row history-table">
              <table class="table table-sm text-center">
                <thead>
                  <tr>
                    <th class="frozen" scope="col">주문시간</th>
                    <th class="frozen" scope="col">주문시간</th>
                    <th scope="col">종류</th>
                    <th scope="col">수수료</th>
                    <th scope="col">정산금액(수수료반영)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                  <tr>
                    <td class="frozen">19.04.16 09:55
                    </td>
                    <td class="frozen">ETH</td>
                    <td>종류</td>
                    <td>1,000.00 KRW</td>
                    <td>0.125849554 ETH</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- history end -->
          <!-- order -->
          <div class="tab-pane" id="order">
            qwerty233
          </div>
          <!-- end order -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Investment'
}
</script>

<style lang='scss' scoped>
  @import '~scss/investPage/base.scss';
</style>
