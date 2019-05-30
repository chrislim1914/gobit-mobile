<template>
  <div class="app-fourthlink">
    <div class="fourth-tab-menu">
      <ul>
        <li><a :class="[ choosen === '실시간 체결기록' ? 'active-fourth' : '']" @click="choosen='실시간 체결기록'">실시간 체결기록</a></li>
        <li><a :class="[ choosen === '일자별 체결기록' ? 'active-fourth' : '']" @click="choosen='일자별 체결기록'">일자별 체결기록</a></li>
      </ul>
      <div class="fourth-tab-container">
        <div class="fourth-tab-1" v-if="choosen ==='실시간 체결기록'">
          <table>
            <thead>
              <th>일시</th>
              <th>구분</th>
              <th>가격 (KRW)</th>
              <th>수량 (ETH)</th>
            </thead>
            <tr :key="index" v-for="(record, index) in records">
              <td>
                <p>{{ record.date }}</p>
                <p class="paint-it-gray">{{ record.year }}</p>
              </td>
              <td :class="[ record.classification === '매도' ? 'paint-it-blue' : 'paint-it-red']">{{ record.classification }}</td>
              <td class="paint-it-blue">{{ record.pricekrw }}</td>
              <td>{{ record.priceeth }}</td>
            </tr>
          </table>
        </div>
        <div class="fourth-tab-2" v-if="choosen ==='일자별 체결기록'">
          <div class="thead-holder">
            <div class="btn-holder">
              <button v-on:click="toggleRight" v-show="!showItleft" class="btn-to-left" id="left-button" @click="swipeLeft">
                <img src="~img/block-arrow-left-16x16.png" alt="back icon">
              </button>
              <button v-on:click="toggleLeft" v-show="showItright" class="btn-to-right" id="right-button" @click="swipeRight">
                <img src="~img/block-arrow-right-16x16.png" alt="back icon">
              </button>
            </div>
            <div class="thead-1 ">
              일시
            </div>
            <div class="extro" id="content" ref="content">
              <!-- this is head and data container -->
              <!-- start head -->
              <div>
                <div class="intro">
                  종가 (KRW)
                </div>
                <div class="intro">
                  전일대비
                </div>
                <div class="intro">
                  등락률
                </div>
                <div class="intro">
                  거래량 (ETH)
                </div>
              </div>
              <!-- start head -->
              <!-- start data -->
              <div class="extro-data-container" :key="index" v-for="(record, index) in records2">
                <div class="edt-freeze">
                  <p>{{ record.time }}</p>
                  <p>{{ record.date }}</p>
                </div>
                <div class="edt-sliding">
                  <div class="edt-intro">
                    {{ record.pricekrw }}
                  </div>
                  <div :class="[ record.fullday.substring(0,1) === '+' ? 'edt-intro paint-it-red' : 'edt-intro paint-it-blue']">
                    {{ record.fullday }}
                  </div>
                  <div :class="[ record.percentage.substring(0,1) === '+' ? 'edt-intro paint-it-red' : 'edt-intro paint-it-blue']">
                    {{ record.percentage }}
                  </div>
                  <div class="edt-intro">
                    {{ record.priceeth }}
                  </div>
                </div>
              </div>
              <!-- end data -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FourthLink',
  data () {
    return {
      choosen: '실시간 체결기록',
      records: [
        {
          date: '04-26',
          year: '2019',
          classification: '매도',
          pricekrw: '188,150',
          priceeth: '0.015'
        },
        {
          date: '04-26 ',
          year: '2019',
          classification: '매도',
          pricekrw: '188,150',
          priceeth: '0.015'
        },
        {
          date: '04-26',
          year: '2019',
          classification: '매수',
          pricekrw: '188,150',
          priceeth: '0.015'
        },
        {
          date: '04-26',
          year: '2019',
          classification: '매수',
          pricekrw: '188,150',
          priceeth: '0.015'
        },
        {
          date: '04-26',
          year: '2019',
          classification: '매도',
          pricekrw: '188,150',
          priceeth: '0.015'
        },
        {
          date: '04-26',
          year: '2019',
          classification: '매도',
          pricekrw: '188,150',
          priceeth: '0.015'
        },
        {
          date: '04-26 ',
          year: '2019',
          classification: '매도',
          pricekrw: '188,150',
          priceeth: '0.015'
        },
        {
          date: '04-26',
          year: '2019',
          classification: '매수',
          pricekrw: '188,150',
          priceeth: '0.015'
        },
        {
          date: '04-26',
          year: '2019',
          classification: '매수',
          pricekrw: '188,150',
          priceeth: '0.015'
        },
        {
          date: '04-26',
          year: '2019',
          classification: '매도',
          pricekrw: '188,150',
          priceeth: '0.015'
        }
      ],
      records2: [
        {
          time: '18:30:36',
          date: '04-08',
          pricekrw: '186,800',
          fullday: '-7,200',
          percentage: '-3.71%',
          priceeth: '1,906.696'
        },
        {
          time: '18:30:36',
          date: '04-08',
          pricekrw: '186,800',
          fullday: '+7,200',
          percentage: '+3.71%',
          priceeth: '1,906.696'
        },
        {
          time: '18:30:36',
          date: '04-08',
          pricekrw: '186,800',
          fullday: '+7,200',
          percentage: '+3.71%',
          priceeth: '1,906.696'
        },
        {
          time: '18:30:36',
          date: '04-08',
          pricekrw: '186,800',
          fullday: '+7,200',
          percentage: '+3.71%',
          priceeth: '1,906.696'
        },
        {
          time: '18:30:36',
          date: '04-08',
          pricekrw: '186,800',
          fullday: '+7,200',
          percentage: '+3.71%',
          priceeth: '1,906.696'
        },
        {
          time: '18:30:36',
          date: '04-08',
          pricekrw: '186,800',
          fullday: '-7,200',
          percentage: '-3.71%',
          priceeth: '1,906.696'
        },
        {
          time: '18:30:36',
          date: '04-08',
          pricekrw: '186,800',
          fullday: '-7,200',
          percentage: '-3.71%',
          priceeth: '1,906.696'
        },
        {
          time: '18:30:36',
          date: '04-08',
          pricekrw: '186,800',
          fullday: '-7,200',
          percentage: '-3.71%',
          priceeth: '1,906.696'
        }
      ],
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
  @import '~scss/newtrading/fourthlink.scss';
</style>
