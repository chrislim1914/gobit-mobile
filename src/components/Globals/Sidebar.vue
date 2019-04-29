<template>
  <!-- header -->
  <div class="app-sidebar">
      <div class="container-fluid">
        <div class="row head">
          <div class="col-7 headleft make-bold">
            홍길동<span class="headlast">님</span>
          </div>
          <div class="col-4 headright">
            회원가입
          </div>
          <div class="col-1 closeside">
            <a>
              <img src="~img/close.png" alt="close">
            </a>
          </div>
        </div>
        <div class="rank">
          <ul>
            <li class="list-inline-item rankleft">보안등급 ><span class="level">Lv.4</span></li>
            <li class="list-inline-item rankright">수수료 등급 <span class="level">-</span></li>
          </ul>
          <!-- <div class="col-6 rankleft">보안등급 ><span class="level">Lv.4</span></div>
          <div class="col-6 rankright">수수료 등급 ><span class="level">-</span></div> -->
        </div>
        <div class="row">
          <div class="col-12 side-exchange">
            <div class="side-echange-head" data-toggle="collapse" href="#exchangemenu" aria-expanded="false" aria-controls="exchangemenu">
              거래소
            </div>
            <div class="collapse exchange-sub" id="exchangemenu">
              <div class="exchange-content">
                <a href="">1부마켓</a>
              </div>
              <div class="exchange-content">
                <a href="">2부마켓</a>
              </div>
              <div class="exchange-content">
                <a href="">3부마켓</a>
              </div>
            </div>
          </div>
        </div>
        <div class="service-menu make-bold">투자내역</div>
        <div class="service-menu make-bold">입출금</div>
        <div class="service-menu make-bold">고객센터</div>
        <hr >
        <div class="service-menu">상장문의 (2부 마켓)</div>
        <div class="service-menu">상장신청 (3부 마켓)</div>
        <div class="service-menu">고비트 이용가이드</div>
        <div class="row">
          <ul>
            <li class="list-inline-item app-menu">Android 앱 다운로드</li>
            <li class="list-inline-item app-menu">ios 앱 다운로드</li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalSidebar'
}
</script>

<style lang='scss' scoped>
  @import '~scss/sidebar/base.scss';
</style>
