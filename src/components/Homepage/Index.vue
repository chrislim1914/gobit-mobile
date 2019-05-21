<template>
  <div class="app-homepage">
    <topHeader></topHeader>
    <!-- start body -->
      <!-- start slider -->
      <vueper-slides fixed-height="300px" :arrows="false" :bullets="false">
        <vueper-slide
          v-for="i in 4"
          :key="i"
          :image="'/static/carousel-bg.png'"
          >
        </vueper-slide>
      </vueper-slides>
      <div class="lower-car">
        <p><span>공지사항</span>[업데이트] 고비트 모바일 오픈</p>
      </div>
      <!-- end slider -->

      <!-- start card slider -->
      <div class="card-holder">
        <div class="cards">
          <div class="card-title">
            [1부마켓] 5월 승급코인
          </div>
          <div id="firstmarket" ref="firstmarket" class="card-slide">
            <div class="card-item">
              <div class="card-head card-1">
                <div class="coin-name">
                  <img src="~img/kaiber23x32.png" alt="kaiber logo"> 카이버네트워크
                </div>
                <div class="coin-start">
                  스타트업 펀딩 블록체인 플랫폼
                </div>
              </div>
              <div class="card-detail">
                <div>
                  <p><span>코인심볼</span>KNC <span class="last-span">플랫폼</span>ERC 20</p>
                  <p><span>최초발행</span>2014년 3월 22일</p>
                  <p><span>총발행량</span>1,000,000,000 DSN</p>
                </div>
                <div class="div-second-part">
                  <p><span>홈페이지</span>https://projectwith.io</p>
                  <p><span>참고자료</span>카이버네트워크 백서.pdf</p>
                </div>
              </div>
            </div>
            <div class="card-item card-back">
              <img src="~img/coinbit292x342.png" alt="coinbit292x342">
            </div>
          </div>
          <div class="btn-nav">
            <button id="left-button" @click="swipeLeft">
              <img :src="imageleft" alt="active icon">
            </button>
             <button id="right-button"  @click="swipeRight">
              <img :src="imageright" alt="inactive icon">
            </button>
          </div>
        </div>
        <div class="cards">
          <div class="card-title">
            [1부마켓] 5월 승급코인
          </div>
          <div id="secondmarket" ref="secondmarket" class="card-slide">
            <div class="card-item">
              <div class="card-head card-2">
                <div class="coin-name">
                  <img src="~img/kaiber23x32.png" alt="kaiber logo"> 카이버네트워크
                </div>
                <div class="coin-start">
                  스타트업 펀딩 블록체인 플랫폼
                </div>
              </div>
              <div class="card-detail">
                <div>
                  <p><span>코인심볼</span>KNC <span class="last-span">플랫폼</span>ERC 20</p>
                  <p><span>최초발행</span>2014년 3월 22일</p>
                  <p><span>총발행량</span>1,000,000,000 DSN</p>
                </div>
                <div class="div-second-part">
                  <p><span>홈페이지</span>https://projectwith.io</p>
                  <p><span>참고자료</span>카이버네트워크 백서.pdf</p>
                </div>
              </div>
            </div>
            <div class="card-item card-back">
              <img src="~img/btc292x342.png" alt="btc292x342">
            </div>
          </div>
          <div class="btn-nav">
            <button id="left-button" @click="swipeLeftsecond">
              <img :src="imageleftsecond" alt="active icon">
            </button>
             <button id="right-button"  @click="swipeRightsecond">
              <img :src="imagerightsecond" alt="inactive icon">
            </button>
          </div>
        </div>
      </div>
      <!-- end card slider -->

      <!-- start coin-listing -->
      <div class="coin-list-holder">
        <div class="coin-list-title">신규상장코인</div>
        <div class="coin-list">
          <div class="coin-row">
            <div class="cl-icon">
              <img src="~img/btc17x20.png" alt="btc logo">
            </div>
            <div class="cl-info">
              <p>비트코인</p>
              <p>BTC/KRW</p>
            </div>
            <div class="cl-detail">3부마켓/BTC</div>
            <div class="cl-btn">
              <button>5.14 상장</button>
            </div>
          </div>
          <div class="coin-row">
            <div class="cl-icon">
              <img src="~img/btc17x20.png" alt="btc logo">
            </div>
            <div class="cl-info">
              <p>비트코인</p>
              <p>BTC/KRW</p>
            </div>
            <div class="cl-detail">3부마켓/BTC</div>
            <div class="cl-btn">
              <button>5.14 상장</button>
            </div>
          </div>
          <div class="coin-row">
            <div class="cl-icon">
              <img src="~img/btc17x20.png" alt="btc logo">
            </div>
            <div class="cl-info">
              <p>비트코인</p>
              <p>BTC/KRW</p>
            </div>
            <div class="cl-detail">3부마켓/BTC</div>
            <div class="cl-btn">
              <button>5.14 상장</button>
            </div>
          </div>
          <div class="coin-row">
            <div class="cl-icon">
              <img src="~img/btc17x20.png" alt="btc logo">
            </div>
            <div class="cl-info">
              <p>비트코인</p>
              <p>BTC/KRW</p>
            </div>
            <div class="cl-detail">3부마켓/BTC</div>
            <div class="cl-btn">
              <button>5.14 상장</button>
            </div>
          </div>
          <div class="coin-row">
            <div class="cl-icon">
              <img src="~img/btc17x20.png" alt="btc logo">
            </div>
            <div class="cl-info">
              <p>비트코인</p>
              <p>BTC/KRW</p>
            </div>
            <div class="cl-detail">3부마켓/BTC</div>
            <div class="cl-btn">
              <button>5.14 상장</button>
            </div>
          </div>
          <div class="coin-row">
            <div class="cl-icon">
              <img src="~img/btc17x20.png" alt="btc logo">
            </div>
            <div class="cl-info">
              <p>비트코인</p>
              <p>BTC/KRW</p>
            </div>
            <div class="cl-detail">3부마켓/BTC</div>
            <div class="cl-btn">
              <button>5.14 상장</button>
            </div>
          </div>
          <div class="coin-row">
            <div class="cl-icon">
              <img src="~img/btc17x20.png" alt="btc logo">
            </div>
            <div class="cl-info">
              <p>비트코인</p>
              <p>BTC/KRW</p>
            </div>
            <div class="cl-detail">3부마켓/BTC</div>
            <div class="cl-btn">
              <button>5.14 상장</button>
            </div>
          </div>
          <div class="coin-row">
            <div class="cl-icon">
              <img src="~img/btc17x20.png" alt="btc logo">
            </div>
            <div class="cl-info">
              <p>비트코인</p>
              <p>BTC/KRW</p>
            </div>
            <div class="cl-detail">3부마켓/BTC</div>
            <div class="cl-btn">
              <button>5.14 상장</button>
            </div>
          </div>
          <div class="coin-row">
            <div class="cl-icon">
              <img src="~img/btc17x20.png" alt="btc logo">
            </div>
            <div class="cl-info">
              <p>비트코인</p>
              <p>BTC/KRW</p>
            </div>
            <div class="cl-detail">3부마켓/BTC</div>
            <div class="cl-btn">
              <button>5.14 상장</button>
            </div>
          </div>
          <div class="coin-row">
            <div class="cl-icon">
              <img src="~img/btc17x20.png" alt="btc logo">
            </div>
            <div class="cl-info">
              <p>비트코인</p>
              <p>BTC/KRW</p>
            </div>
            <div class="cl-detail">3부마켓/BTC</div>
            <div class="cl-btn">
              <button>5.14 상장</button>
            </div>
          </div>
        </div>
      </div>
      <!-- end coin-listing -->

      <!-- start top 10 or 20 coin -->
      <div class="new-coin-holder">
        <div class="new-coin" data-toggle="collapse" href="#coinlisting" aria-expanded="false" aria-controls="exchangemenu">
          <div class="top20">
            급상승 코인 TOP 20
          </div>
          <div class="top-coin">
            <ul>
              <li>1</li>
              <li>비트코인(BTC/KRW)</li>
              <li>70% <img src="~img/red-arrow-down16x16.png"  alt="dup_rt16x16"></li>
            </ul>
          </div>
          <div class="btn-collapse">
            <img src="~img/down-arrow16x16.png"  alt="down-arrow16x16">
          </div>
        </div>
        <div class="collapse collapse-div" id="coinlisting">
          <div>
            <a href="">
              <ul>
              <li>2</li>
              <li>비트코인(BTC/KRW)</li>
              <li>70% <img src="~img/dup_bt16x16.png"  alt="dup_bt16x16"></li>
            </ul>
            </a>
          </div>
          <div>
            <a href="">
              <ul>
              <li>3</li>
              <li>비트코인(BTC/KRW)</li>
              <li>70% <img src="~img/dup_bt16x16.png"  alt="dup_bt16x16"></li>
            </ul>
            </a>
          </div>
          <div>
            <a href="">
              <ul>
              <li>4</li>
              <li>비트코인(BTC/KRW)</li>
              <li>70% <img src="~img/dup_bt16x16.png"  alt="dup_bt16x16"></li>
            </ul>
            </a>
          </div>
          <div>
            <a href="">
              <ul>
              <li>5</li>
              <li>비트코인(BTC/KRW)</li>
              <li>70% <img src="~img/dup_bt16x16.png"  alt="dup_bt16x16"></li>
            </ul>
            </a>
          </div>
          <div>
            <a href="">
              <ul>
              <li>6</li>
              <li>비트코인(BTC/KRW)</li>
              <li>70% <img src="~img/dup_bt16x16.png"  alt="dup_bt16x16"></li>
            </ul>
            </a>
          </div>
          <div>
            <a href="">
              <ul>
              <li>7</li>
              <li>비트코인(BTC/KRW)</li>
              <li>70% <img src="~img/dup_bt16x16.png"  alt="dup_bt16x16"></li>
            </ul>
            </a>
          </div>
          <div>
            <a href="">
              <ul>
              <li>8</li>
              <li>비트코인(BTC/KRW)</li>
              <li>70% <img src="~img/dup_bt16x16.png"  alt="dup_bt16x16"></li>
            </ul>
            </a>
          </div>
          <div>
            <a href="">
              <ul>
              <li>9</li>
              <li>비트코인(BTC/KRW)</li>
              <li>70% <img src="~img/dup_bt16x16.png"  alt="dup_bt16x16"></li>
            </ul>
            </a>
          </div>
          <div>
            <a href="">
              <ul>
              <li>10</li>
              <li>비트코인(BTC/KRW)</li>
              <li>70% <img src="~img/dup_bt16x16.png"  alt="dup_bt16x16"></li>
            </ul>
            </a>
          </div>
        </div>
      </div>
      <!-- end top 10 or 20 coin -->

      <!-- start exchange -->
      <exchangeMarketSelection></exchangeMarketSelection>
      <symbolbar></symbolbar>
      <exchange-table></exchange-table>
      <!-- end exchange -->

      <!-- start of security certification -->
      <div class="sec-cert-holder">
        <h1>주요 보안 인증 획득</h1>
        <h1>가장 안전한 거래소</h1>
        <h4>업계 최상위 보안 시스템으로 안전하게 보호되는</h4>
        <h4>자산과 믿을 수 있는 거래 지원</h4>
        <!-- security certificate img-->
        <div class="sc-img-holder">
          <div class="sc-img">
            <img src="~img/k-isms122x122.png" alt="k-isms122x122">
            <p>정보보호관리체계</p>
            <p>(ISMS)</p>
          </div>
          <div class="sc-img">
            <img src="~img/dnv-gl122x122.png" alt="dnv-gl122x122">
            <p>ISO/IEC 27001,</p>
            <p>27017, 27018</p>
          </div>
        </div>
      </div>
      <!-- end of security certification -->

      <!-- start high-bit-->
      <div class="high-bit-holder">
        <div class="high-bit">
          <p>빠르고 간편한 고비트를</p>
          <p>지금 바로 만나보세요</p>
          <button class="btn">거래소 바로가기</button>
          <button class="btn">APP 다운로드</button>
        </div>
      </div>
      <!-- end high-bit -->
    <!-- end body -->
    <customerService></customerService>
    <footers></footers>
    <router-view></router-view>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import TopHeader from '../Globals/Header'
import Footers from '../Globals/Footer'
import CustomerService from '../Globals/CustomerService'
import ExchangeMarketSelection from '../Exchange/MarketSelection'
import Symbolbar from '../Exchange/Symbolbar'
import Table from '../Exchange/Table'
import 'vueperslides/dist/vueperslides.css'
export default {
  name: 'Homepage',
  components: {
    VueperSlides,
    VueperSlide,
    'topHeader': TopHeader,
    'footers': Footers,
    'customerService': CustomerService,
    'exchangeMarketSelection': ExchangeMarketSelection,
    'exchange-table': Table,
    'symbolbar': Symbolbar
  },
  data () {
    return {
      imageleft: '',
      imageright: '',
      imageleftsecond: '',
      imagerightsecond: '',
      active: '/static/slider-button-active16x16.png',
      inactive: '/static/slider-button-inactive16x16.png'
    }
  },
  methods: {
    scrollTo (element, scrollPixels, duration) {
      var fn
      const scrollPos = element.scrollLeft
      if (!((scrollPos === 0 || scrollPixels > 0) && (element.clientWidth + scrollPos === element.scrollWidth || scrollPixels < 0))) {
        const startTime =
          'now' in window.performance
            ? performance.now()
            : new Date().getTime()

        fn = function scroll (timestamp) {
          const timeElapsed = timestamp - startTime
          const progress = Math.min(timeElapsed / duration, 1)
          element.scrollLeft = scrollPos + scrollPixels * progress
          if (timeElapsed < duration) {
            window.requestAnimationFrame(scroll)
          }
        }
        window.requestAnimationFrame(fn)
      }
    },
    swipeLeft () {
      const firstmarket = this.$refs.firstmarket
      this.scrollTo(firstmarket, -300, 800)
      this.imageleft = this.active
      this.imageright = this.inactive
    },
    swipeRight () {
      const firstmarket = this.$refs.firstmarket
      this.scrollTo(firstmarket, 300, 800)
      this.imageleft = this.inactive
      this.imageright = this.active
    },
    swipeLeftsecond () {
      const secondmarket = this.$refs.secondmarket
      this.scrollTo(secondmarket, -300, 800)
      this.imageleftsecond = this.active
      this.imagerightsecond = this.inactive
    },
    swipeRightsecond () {
      const secondmarket = this.$refs.secondmarket
      this.scrollTo(secondmarket, 300, 800)
      this.imageleftsecond = this.inactive
      this.imagerightsecond = this.active
    }
  },
  mounted () {
    this.imageleft = this.active
    this.imageright = this.inactive
    this.imageleftsecond = this.active
    this.imagerightsecond = this.inactive
  }
}
</script>

<style lang='scss' scoped>
  @import 'scss/homepage/base.scss';
</style>
