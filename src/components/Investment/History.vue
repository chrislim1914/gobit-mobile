<template>
  <!-- investment history -->
  <div class="app-history">
    <!-- start tab menu -->
      <div class="menu-handler">
        <div class="menus">
          <router-link to="/investment/balance">
            보유코인
          </router-link>
        </div>
        <div class="menus active">
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
    <!-- history head -->
    <div class="h-head">
      <div class="hh-box">거래내역 조회</div>
      <div class="drop-box">
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
    <!-- history head -->
    <!-- history data-table -->
    <div class="h-table-data">
      <div class="t-header">
          <div>
            <button v-on:click="toggleRight" v-show="!showItleft" class="btn-to-left" id="left-button" @click="swipeLeft">
              <img src="~img/block-arrow-left-16x16.png" alt="back icon">
            </button>
            <button v-on:click="toggleLeft" v-show="showItright" class="btn-to-right" id="right-button" @click="swipeRight">
              <img src="~img/block-arrow-right-16x16.png" alt="back icon">
            </button>
          </div>
          <div class="th-title">주문시간</div>
          <div class="th-title">코인명</div>
        <div class="center " id="content" ref="content">
          <!-- this is header -->
          <div>
            <div class="internal small">
              종류
            </div>
            <div class="internal medium">
              수수료
            </div>
            <div class="internal medium">
              정산금액(수수료반영)
            </div>
          </div>
          <!-- this is the body -->
          <div class="outer">
            <div class="freeze">
              <div class="frezze-column-1">
                <p>19.04.16</p>
                <p>09:55</p>
              </div>
              <div class="frezze-column-2">ETH</div>
            </div>
            <div class="internal-data-holder">
              <div class="internal-data small red">
                출금
              </div>
              <div class="internal-data medium-data ">
                1,000.00 KRW
              </div>
              <div class="internal-data medium ">
                0.125849554 ETH
              </div>
            </div>
          </div>
          <div class="outer">
            <div class="freeze">
              <div class="frezze-column-1">
                <p>19.04.16</p>
                <p>09:55</p>
              </div>
              <div class="frezze-column-2">ETH</div>
            </div>
            <div class="internal-data-holder">
              <div class="internal-data small blue">
                매도
              </div>
              <div class="internal-data medium-data ">
                1,000.00 KRW
              </div>
              <div class="internal-data medium ">
                0.125849554 ETH
              </div>
            </div>
          </div>
          <div class="outer">
            <div class="freeze">
              <div class="frezze-column-1">
                <p>19.04.16</p>
                <p>09:55</p>
              </div>
              <div class="frezze-column-2">ETH</div>
            </div>
            <div class="internal-data-holder">
              <div class="internal-data small blue">
                매도
              </div>
              <div class="internal-data medium-data ">
                1,000.00 KRW
              </div>
              <div class="internal-data medium ">
                0.125849554 ETH
              </div>
            </div>
          </div>
          <div class="outer">
            <div class="freeze">
              <div class="frezze-column-1">
                <p>19.04.16</p>
                <p>09:55</p>
              </div>
              <div class="frezze-column-2">ETH</div>
            </div>
            <div class="internal-data-holder">
              <div class="internal-data small blue">
                매도
              </div>
              <div class="internal-data medium-data ">
                1,000.00 KRW
              </div>
              <div class="internal-data medium ">
                0.125849554 ETH
              </div>
            </div>
          </div>
          <div class="outer">
            <div class="freeze">
              <div class="frezze-column-1">
                <p>19.04.16</p>
                <p>09:55</p>
              </div>
              <div class="frezze-column-2">ETH</div>
            </div>
            <div class="internal-data-holder">
              <div class="internal-data small blue">
                매도
              </div>
              <div class="internal-data medium-data ">
                1,000.00 KRW
              </div>
              <div class="internal-data medium ">
                0.125849554 ETH
              </div>
            </div>
          </div>
          <div class="outer">
            <div class="freeze">
              <div class="frezze-column-1">
                <p>19.04.16</p>
                <p>09:55</p>
              </div>
              <div class="frezze-column-2">ETH</div>
            </div>
            <div class="internal-data-holder">
              <div class="internal-data small blue">
                종류
              </div>
              <div class="internal-data medium-data ">
                1,000.00 KRW
              </div>
              <div class="internal-data medium ">
                0.125849554 ETH
              </div>
            </div>
          </div>
          <div class="outer">
            <div class="freeze">
              <div class="frezze-column-1">
                <p>19.04.16</p>
                <p>09:55</p>
              </div>
              <div class="frezze-column-2">ETH</div>
            </div>
            <div class="internal-data-holder">
              <div class="internal-data small blue">
                종류
              </div>
              <div class="internal-data medium-data ">
                1,000.00 KRW
              </div>
              <div class="internal-data medium ">
                0.125849554 ETH
              </div>
            </div>
          </div>
          <div class="outer">
            <div class="freeze">
              <div class="frezze-column-1">
                <p>19.04.16</p>
                <p>09:55</p>
              </div>
              <div class="frezze-column-2">ETH</div>
            </div>
            <div class="internal-data-holder">
              <div class="internal-data small blue">
                종류
              </div>
              <div class="internal-data medium-data ">
                1,000.00 KRW
              </div>
              <div class="internal-data medium ">
                0.125849554 ETH
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- history data-table -->
  </div>
</template>

<script>
export default {
  name: 'history',
  data () {
    return {
      showItleft: true,
      showItright: true
    }
  },
  methods: {
    toggleLeft () {
      this.showItleft = !this.showItleft
      this.showItright = this.showItright
    },
    toggleRight () {
      this.showItright = !this.showItright
      this.showItleft = this.showItleft
    },
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
      const content = this.$refs.content
      this.scrollTo(content, -300, 800)
      this.showItleft = !this.showItleft
      this.showItright = this.showItright
    },
    swipeRight () {
      const content = this.$refs.content
      this.scrollTo(content, 300, 800)
      this.showItright = !this.showItright
      this.showItleft = this.showItleft
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '~scss/investment/history.scss';
</style>
