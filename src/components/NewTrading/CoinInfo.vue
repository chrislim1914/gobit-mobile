<template>
  <div class="app-coininfo">
    <!-- coin head -->
    <div class="coin-head">
      <img src="~img/eth_logo42x68.png" alt="coin icon">
      <p>이더리움 (ETH)</p>
    </div>
    <!-- coin head -->
    <!-- start coin info -->
    <div class="coin-info-holder">
      <div class="coin-info" :key="index" v-for="(coininfos, index) in coininformations">
        <div class="coin-lavel">{{ coininfos.label }}</div>
        <div class="coin-value" v-if="coininfos.value.substring(0,5) === 'https'">
          <a :href="coininfos.value">
            {{ coininfos.value }}
          </a>
        </div>
        <div class="coin-value" v-else>
          {{ coininfos.value }}
        </div>
      </div>
    </div>
    <!-- end coin info -->
    <!-- start coin-lower-part -->
    <div class="coin-lower-holder">
      <div class="coin-lower-detail">
        <div class="cld-title">
          코인소개
        </div>
        <div class="cld-data">
          <ul>
            <li>이더리움은 블록체인에 기초해 다양한 앱 개발을 지원하는 플랫폼이며, 여기서 사용되는 가상화폐 또한 같은 이름으로 통용됩니다.  1. 플랫폼: 이더리움은 블록체인을 활용한 모든 것을 프로그래밍할 수 있는 플랫폼입니다. 거래 기록뿐만 아니라 탈중앙화 앱(DAPP)들을 투명하게 운영할 수 있는 확장성을 제공합니다. 플랫폼은 프로그램된 계약을 정확히 실행하도록 설계된 스마트 컨트랙트를 기반으로 운영됩니다. 이더리움은 블록체인에 기초해 다양한 앱 개발을 지원하는 플랫폼이며, 여기서 사용되는 가상화폐 또한 같은 이름으로 통용됩니다.  이더리움은 블록체인에 기초해 다양한 앱 개발을 지원하는 플랫폼이며.</li>
          </ul>
        </div>
      </div>
      <div class="coin-lower-detail">
        <div class="cld-title">
          SNS
        </div>
        <div class="cld-data">
          <a href="#!">
            <img src="~img/fb_circle.png" alt="Gobit facebook sns logo">
          </a>
          <a href="#!">
            <img src="~img/twitter_circle.png" alt="Gobit twitter sns logo">
          </a>
        </div>
      </div>
    </div>
    <!-- end coin-lower-part -->
    <!-- start coin-footer -->
    <div class="coin-footer">
      <ul>
        <li>* 위 정보는 코인에 대한 이해를 돕기 위해서 제공하는 것으로, 투자 권유를 목적으로 하지 않습니다.</li>
        <li>* 제공되는 정보는 오류 또는 지연이 발생할 수 있으며, 두나무는 제공된 정보에 의한 투자결과에 대해 법적인 책임을 지지 않습니다.</li>
      </ul>
    </div>
    <!-- end coin-footer -->
  </div>
</template>

<script>
export default {
  name: 'CoinInfo',
  data () {
    return {
      coininformations: [
        {
          label: '총 발행 한도',
          value: '0 ETH'
        },
        {
          label: '발행가격',
          value: '$ 0.308000'
        },
        {
          label: '최초발행',
          value: '2014-07-24'
        },
        {
          label: '웹사이트',
          value: 'https://www.ethereum.org/'
        },
        {
          label: '탐색기',
          value: 'https://etherscan.io/'
        },
        {
          label: '백서',
          value: 'https://github.com/ethereum/wiki/wiki/White-Paper/Whateverthisoneis?forfucksake=123'
        },
        {
          label: '최대 구매 수량',
          value: '1,000,000,000 ETH'
        },
        {
          label: '최소 구매 수량',
          value: '0.001 ETH'
        },
        {
          label: '최대 구매 가격',
          value: '4,000,000,000 KRW'
        },
        {
          label: '최소 구매 가격',
          value: '0.01 KRW'
        },
        {
          label: '수량 단위',
          value: '0.001 ETH'
        },
        {
          label: '가격 단위',
          value: '50 KRW'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '~scss/newtrading/coininfo.scss';
</style>
