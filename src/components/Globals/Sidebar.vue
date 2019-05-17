<template>
  <!-- header -->
  <div class="app-sidebar" v-show="!showSelf">
    <div class="user-status">
      <div class="user-login">
        <div class="ul-l">홍길동<span>님</span></div>
        <div class="ul-r">
          <p>로그아웃</p>
          <a href="#" v-on:click="toggleSelf">
            <img src="~img/close.png"  alt="close">
          </a>
        </div>
      </div>
      <div class="user-level">
        <ul>
          <li class="">보안등급 ><span class="level">Lv.4</span></li>
          <li class="">
            <router-link to="/commission">
              수수료 등급 ><span class="level">-</span>
            </router-link>
            </li>
        </ul>
      </div>
      <!-- <div class="user-logout">
        <div class="ul-l">가입이메일</div>
        <div class="ul-r">
          <a href="">회원가입</a>
          <img src="~img/close.png"  alt="close">
        </div>
      </div> -->
    </div>
    <!-- menus -->
    <div class="user-menu">
      <!-- exchange -->
      <div class="side-exchange">
        <div v-on:click="toggleExchange" class="side-echange-head" data-toggle="collapse" href="#exchangemenu" aria-expanded="false" aria-controls="exchangemenu">
          거래소 <img v-show="!showItExchange" src="~img/up-arrow16x16.png"  alt="up-arrow16x16">
        </div>
        <div class="collapse dd-sub-menus" id="exchangemenu">
          <div class="sub-menus">
            <a href=""><span>&#766;</span> 1부마켓</a>
          </div>
          <div class="sub-menus">
            <a href=""><span>&#766;</span> 2부마켓</a>
          </div>
          <div class="sub-menus">
            <a href=""><span>&#766;</span> 3부마켓</a>
          </div>
        </div>
      </div>
      <!-- investment -->
      <div class="side-exchange">
        <div v-on:click="toggleInvest" class="side-echange-head" data-toggle="collapse" href="#investmentmenu" aria-expanded="false" aria-controls="investmentmenu">
          투자내역 <img v-show="!showItInvest" src="~img/up-arrow16x16.png"  alt="up-arrow16x16">
        </div>
        <div class="collapse dd-sub-menus" id="investmentmenu">
          <div class="sub-menus">
            <router-link to="/investment/balance">
              <span>&#766;</span> 보유코인
            </router-link>
          </div>
          <div class="sub-menus">
            <router-link to="/investment/history">
              <span>&#766;</span> 거래내역
            </router-link>
          </div>
          <div class="sub-menus">
            <router-link to="/investment/wait_orders">
              <span>&#766;</span> 미체결
            </router-link>
          </div>
        </div>
      </div>
      <!-- deposit -->
      <div class="side-exchange">
        <div v-on:click="toggleDepo" class="side-echange-head" data-toggle="collapse" href="#depositmenu" aria-expanded="false" aria-controls="depositmenu">
          입출금 <img v-show="!showItDepo" src="~img/up-arrow16x16.png"  alt="up-arrow16x16">
        </div>
        <div class="collapse dd-sub-menus" id="depositmenu">
          <div class="sub-menus">
            <a href=""><span>&#766;</span> 보유코인 </a>
          </div>
          <div class="sub-menus">
            <a href=""><span>&#766;</span> 거래내역</a>
          </div>
          <div class="sub-menus">
            <a href=""><span>&#766;</span> 미체결</a>
          </div>
        </div>
      </div>
      <!-- service center -->
      <div class="side-exchange">
        <div v-on:click="toggleService" class="side-echange-head" data-toggle="collapse" href="#servicemenu" aria-expanded="false" aria-controls="servicemenu">
          고객센터 <img v-show="!showItService" src="~img/up-arrow16x16.png"  alt="up-arrow16x16">
        </div>
        <div class="collapse dd-sub-menus" id="servicemenu">
          <div class="sub-menus">
            <a href=""><span>&#766;</span> 공지사항 </a>
          </div>
          <div class="sub-menus">
            <a href=""><span>&#766;</span> 이벤트 안내</a>
          </div>
          <div class="sub-menus">
            <a href=""><span>&#766;</span> 이달의승급코인</a>
          </div>
          <div class="sub-menus">
            <a href=""><span>&#766;</span> 이용안내</a>
          </div>
          <div class="sub-menus">
            <a href=""><span>&#766;</span> 입출금현황</a>
          </div>
          <div class="sub-menus">
            <a href=""><span>&#766;</span> Open API 안내</a>
          </div>
          <div class="sub-menus">
            <a href=""><span>&#766;</span> 정책 및 고지</a>
          </div>
          <div class="sub-menus">
            <a href=""><span>&#766;</span> 1:1문의하기</a>
          </div>
          <div class="sub-menus">
            <a href=""><span>&#766;</span> 문의내역</a>
          </div>
          <div class="sub-menus">
            <a href=""><span>&#766;</span> 자주하는 질문</a>
          </div>
          <div class="sub-menus">
            <a href=""><span>&#766;</span> 카카오톡 문의(24시간)</a>
          </div>
        </div>
      </div>
      <!-- other menus -->
      <div class="other-menus">
        <div class="service-menu">
          <a href="">상장문의 (2부 마켓)</a>
        </div>
        <div class="service-menu">
          <a href="">상장신청 (3부 마켓)</a>
        </div>
        <div class="service-menu">
          <a href="">고비트 이용가이드</a>
        </div>
      </div>
      <!-- app download -->
      <div class="app-download">
        <a href="">
          <div class="app-d-box">Android 앱 다운로드</div>
        </a>
        <a href="">
          <div class="app-d-box">ios 앱 다운로드</div>
        </a>
      </div>
    </div>
    <!-- menus -->
  </div>
</template>

<script>
export default {
  name: 'GlobalSidebar',
  data () {
    return {
      showItExchange: true,
      showItInvest: true,
      showItDepo: true,
      showItService: true,
      showSelf: true
    }
  },
  methods: {
    toggleExchange () {
      this.showItExchange = !this.showItExchange
    },
    toggleInvest () {
      this.showItInvest = !this.showItInvest
    },
    toggleDepo () {
      this.showItDepo = !this.showItDepo
    },
    toggleService () {
      this.showItService = !this.showItService
    },
    toggleSelf () {
      this.showSelf = !this.showSelf
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '~scss/sidebar/base.scss';
</style>
