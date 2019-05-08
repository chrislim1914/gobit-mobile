<template>
  <div class="app-trading-lfive">
    <div id="trading-lfive-holder">
      <div id="trading-lfive-content">
        <div id="trading-coin-masthead">
          <span id="trading-coin-logo-holder">
            <img src="~img/eth_logo42x42.png" alt="Gobit ethereum logo" id="crypto_logo" class="img-fluid">
          </span>
          <h6 id="trading-coin-text">
            이더리움 (ETH)
          </h6>
        </div>
        <div id="trading-coin-extra-space-upper"></div>
        <div id="trading-coin-information-list">
          <table id="trading-coin-info-table">
            <tr :key="index" v-for="(coininfo, index) in coininformations">
              <td class="trading-coin-information-description-label">
                {{ coininfo.label }}
              </td>
              <td class="trading-coin-information-description-value">
                <span v-if="coininfo.value.substring(0,5) === 'https'">
                  <a :href="coininfo.value">
                    {{ coininfo.value }}
                  </a>
                </span>
                <span v-else>
                  {{ coininfo.value }}
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div id="trading-coin-extra-space-bottom"></div>
        <div id="trading-coin-information-title-section">
          <h6 id="trading-coin-information-title" class="mb-0">
            코인소개
          </h6>
        </div>
        <div id="trading-coin-information-paragraph-section">
          <ul class="mx-0 my-0 px-0 py-0">
            <li>이더리움은 블록체인에 기초해 다양한 앱 개발을 지원하는 플랫폼이며, 여기서 사용되는 가상화폐 또한 같은 이름으로 통용됩니다.  1. 플랫폼: 이더리움은 블록체인을 활용한 모든 것을 프로그래밍할 수 있는 플랫폼입니다. 거래 기록뿐만 아니라 탈중앙화 앱(DAPP)들을 투명하게 운영할 수 있는 확장성을 제공합니다. 플랫폼은 프로그램된 계약을 정확히 실행하도록 설계된 스마트 컨트랙트를 기반으로 운영됩니다. 이더리움은 블록체인에 기초해 다양한 앱 개발을 지원하는 플랫폼이며, 여기서 사용되는 가상화폐 또한 같은 이름으로 통용됩니다.  이더리움은 블록체인에 기초해 다양한 앱 개발을 지원하는 플랫폼이며.</li>
          </ul>
        </div>
      </div>
      <div id="trading-coin-information-sns-section">
        <h6 id="trading-coin-information-sns-title" class="mb-0">
          SNS
        </h6>
      </div>
      <div id="trading-coin-information-sns-link-section">
        <ul class="mx-0 my-0">
          <li>
            <a href="#!">
              <img src="~img/fb_circle.png" alt="Gobit facebook sns logo" class="img-fluid">
            </a>
          </li>
          <li>
            <a href="#!">
              <img src="~img/twitter_circle.png" alt="Gobit twitter sns logo" class="img-fluid">
            </a>
          </li>
        </ul>
      </div>
      <div id="trading-coin-extra-space-bottom"></div>
      <div id="trading-coin-information-bottom-list-section">
        <ul class="mx-0 my-0">
          <li>
            * 위 정보는 코인에 대한 이해를 돕기 위해서 제공하는 것으로, 투자 권유를 목적으로 하지 않습니다.
          </li>
          <li>
            * 제공되는 정보는 오류 또는 지연이 발생할 수 있으며, 두나무는 제공된 정보에 의한 투자결과에 대해 법적인 책임을 지지 않습니다.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TradingLinkFive',
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
  @import '~scss/trading/linkfive.scss';
</style>
