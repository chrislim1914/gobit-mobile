<template>
  <div class="app-firstlink">
    <div class="link-container">
      <div class="lc-left ">
        <table>
          <tr class="buy">
            <td>
              <p>190,200</p>
              <p>+1.89%</p>
            </td>
            <td>
              <div class="progressbar-buy" style="width: 35.987%"></div>
              <p>35.987</p>
            </td>
          </tr>
          <tr class="buy">
            <td>
              <p>190,200</p>
              <p>+1.89%</p>
            </td>
            <td>
              <div class="progressbar-buy" style="width: 5.87%"></div>
              <p>5.87</p>
            </td>
          </tr>
          <tr class="buy">
            <td>
              <p>190,200</p>
              <p>+1.89%</p>
            </td>
            <td>
              <div class="progressbar-buy" style="width: 25.87%"></div>
              <p>25.87</p>
            </td>
          </tr>
          <tr class="buy">
            <td>
              <p>190,200</p>
              <p>+1.89%</p>
            </td>
            <td>
              <div class="progressbar-buy" style="width: 2.87%"></div>
              <p>2.87</p>
            </td>
          </tr>
          <tr class="buy">
            <td>
              <p>190,200</p>
              <p>+1.89%</p>
            </td>
            <td>
              <div class="progressbar-buy" style="width: 72.87%"></div>
              <p>72.87</p>
            </td>
          </tr>
          <tr class="buy">
            <td>
              <p>190,200</p>
              <p>+1.89%</p>
            </td>
            <td>
              <div class="progressbar-buy" style="width: 12.87%"></div>
              <p>12.87</p>
            </td>
          </tr>
          <tr class="buy">
            <td>
              <p>190,200</p>
              <p>+1.89%</p>
            </td>
            <td>
              <div class="progressbar-buy" style="width: 27.87%"></div>
              <p>27.87</p>
            </td>
          </tr>
          <tr class="buy">
            <td>
              <p>190,200</p>
              <p>+1.89%</p>
            </td>
            <td>
              <div class="progressbar-buy" style="width: 92.87%"></div>
              <p>92.87</p>
            </td>
          </tr>
          <tr class="buy">
            <td>
              <p>190,200</p>
              <p>+1.89%</p>
            </td>
            <td>
              <div class="progressbar-buy" style="width: 52.87%"></div>
              <p>52.87</p>
            </td>
          </tr>
          <tr class="buy">
            <td>
              <p>190,200</p>
              <p>+1.89%</p>
            </td>
            <td>
              <div class="progressbar-buy" style="width: 25.87%"></div>
              <p>25.87</p>
            </td>
          </tr>
          <tr class="sell">
            <td>
              <p>190,200</p>
              <p>-1.89%</p>
            </td>
            <td>
              <div class="progressbar-sell" style="width: 2.87%"></div>
              <p>2.87</p>
            </td>
          </tr>
          <tr class="sell">
            <td>
              <p>190,200</p>
              <p>-1.89%</p>
            </td>
            <td>
              <div class="progressbar-sell" style="width: 72.87%"></div>
              <p>72.87</p>
            </td>
          </tr>
          <tr class="sell">
            <td>
              <p>190,200</p>
              <p>-1.89%</p>
            </td>
            <td>
              <div class="progressbar-sell" style="width: 87%"></div>
              <p>87</p>
            </td>
          </tr>
          <tr class="sell">
            <td>
              <p>190,200</p>
              <p>-1.89%</p>
            </td>
            <td>
              <div class="progressbar-sell" style="width: 12.87%"></div>
              <p>12.87</p>
            </td>
          </tr>
          <tr class="sell">
            <td>
              <p>190,200</p>
              <p>-1.89%</p>
            </td>
            <td>
              <div class="progressbar-sell" style="width: 42.8%"></div>
              <p>42.8</p>
            </td>
          </tr>
          <tr class="sell">
            <td>
              <p>190,200</p>
              <p>-1.89%</p>
            </td>
            <td>
              <div class="progressbar-sell" style="width: 42.8%"></div>
              <p>42.8</p>
            </td>
          </tr>
          <tr class="sell">
            <td>
              <p>190,200</p>
              <p>-1.89%</p>
            </td>
            <td>
              <div class="progressbar-sell" style="width: 42.8%"></div>
              <p>42.8</p>
            </td>
          </tr>
          <tr class="sell">
            <td>
              <p>190,200</p>
              <p>-1.89%</p>
            </td>
            <td>
              <div class="progressbar-sell" style="width: 42.8%"></div>
              <p>42.8</p>
            </td>
          </tr>
          <tr class="sell">
            <td>
              <p>190,200</p>
              <p>-1.89%</p>
            </td>
            <td>
              <div class="progressbar-sell" style="width: 42.8%"></div>
              <p>42.8</p>
            </td>
          </tr>
          <tr class="sell">
            <td>
              <p>190,200</p>
              <p>-1.89%</p>
            </td>
            <td>
              <div class="progressbar-sell" style="width: 42.8%"></div>
              <p>42.8</p>
            </td>
          </tr>
          <tr class="sell">
            <td>
              <p>190,200</p>
              <p>-1.89%</p>
            </td>
            <td>
              <div class="progressbar-sell" style="width: 22.8%"></div>
              <p>22.8</p>
            </td>
          </tr>
        </table>
      </div>
      <div class="lc-right">
        <ul>
          <li :class="[ choosen === '매수' ? 'active' : '']"><a @click="choosen='매수'">매수</a>
          </li>
          <li :class="[ choosen === '매도' ? 'active' : '']"><a @click="choosen='매도'">매도</a></li>
          <li :class="[ choosen === '미체결' ? 'active' : 'tab-noborder']"><a @click="choosen='미체결'">미체결</a></li>
        </ul>
         <div class="tab-content-container">
            <div class="buy-holder" v-if="choosen ==='매수'">
              <ul>
                <li>
                  구분
                  <img src="~img/info32x32.png" alt="Gobit info" class="img-fluid">
                </li>
                <li>
                  <input type="checkbox" class="option-input radio" name="example" />
                  지정가
                </li>
                <li>
                  <input type="checkbox" class="option-input radio" name="example" />
                  시장가
                </li>
              </ul>
              <div class="buy-detail-holder">
                <div>
                  <div class="bdh-left">주문가능</div>
                  <div class="bdh-right">0 KRW</div>
                </div>
                <div>
                  <div class="bdh-left">
                    <label for="">수량</label>
                    <input type="text" value="0" />
                  </div>
                  <div class="bdh-right">
                    <div class="dropdown">
                      <a class="btn dropbtn font-weight-bold">
                        가능
                        <img src="~img/drop-down-arrow16x16#7e.png" alt="Gobit drop down icon 16x16" class="pl-4 img-fluid">
                      </a>
                      <div class="dropdown-content">
                        <a href="#">75%</a>
                        <a href="#">50%</a>
                        <a href="#">25%</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="bdh-left no-top-margin">
                    <label for="">가격</label>
                    <input type="text" value="192,200" />
                  </div>
                  <div class="bdh-right">
                    <button>-</button>
                    <button>+</button>
                  </div>
                </div>
                <div>
                  <div class="bdh-left no-top-margin">
                    <div class="dropdown lg-dropdown">
                      <a class="btn dropbtn font-weight-bold lg-dropdown">
                        현재가 대비 %
                        <img src="~img/drop-down-arrow16x16#7e.png" alt="Gobit drop down icon 16x16" class="pl-4 img-fluid">
                      </a>
                      <div class="dropdown-content lg-dropdown">
                        <a href="#">75%</a>
                        <a href="#">50%</a>
                        <a href="#">25%</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bdh-centre">
                  <label for="">총액</label>
                  <input type="text" value="0 KRW" />
                </div>
                <div>
                  <div class="bdh-equal">
                    <button>초기화</button>
                  </div>
                  <div class="bdh-equal">
                     <button>매수</button>
                  </div>
                </div>
                <div class="min-order-text">
                  <div class="bdh-left">
                    최소주문금액
                  </div>
                  <div class="bdh-right">
                    500 KRW
                  </div>
                </div>
                 <div class="fees-text">
                  <div class="bdh-left">
                    수수료(부가세포함)
                  </div>
                  <div class="bdh-right">
                    0.05%
                  </div>
                </div>
                <div class="bdh-last">
                  <button>호가 주문</button>
                </div>
              </div>
            </div>
            <div class="buy-holder" v-if="choosen ==='매도'">
              <ul>
                <li>
                  구분
                  <img src="~img/info32x32.png" alt="Gobit info" class="img-fluid">
                </li>
                <li>
                  <input type="checkbox" class="option-input radio" name="example" />
                  지정가
                </li>
                <li>
                  <input type="checkbox" class="option-input radio" name="example" />
                  시장가
                </li>
              </ul>
              <div class="buy-detail-holder">
                <div>
                  <div class="bdh-left">주문가능</div>
                  <div class="bdh-right">0 KRW</div>
                </div>
                <div>
                  <div class="bdh-left">
                    <label for="">수량</label>
                    <input type="text" value="0" />
                  </div>
                  <div class="bdh-right">
                    <div class="dropdown">
                      <a class="btn dropbtn font-weight-bold">
                        가능
                        <img src="~img/drop-down-arrow16x16#7e.png" alt="Gobit drop down icon 16x16" class="pl-4 img-fluid">
                      </a>
                      <div class="dropdown-content">
                        <a href="#">75%</a>
                        <a href="#">50%</a>
                        <a href="#">25%</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="bdh-left no-top-margin">
                    <label for="">가격</label>
                    <input type="text" value="192,200" />
                  </div>
                  <div class="bdh-right">
                    <button>-</button>
                    <button>+</button>
                  </div>
                </div>
                <div>
                  <div class="bdh-left no-top-margin">
                    <div class="dropdown lg-dropdown">
                      <a class="btn dropbtn font-weight-bold lg-dropdown">
                        현재가 대비 %
                        <img src="~img/drop-down-arrow16x16#7e.png" alt="Gobit drop down icon 16x16" class="pl-4 img-fluid">
                      </a>
                      <div class="dropdown-content lg-dropdown">
                        <a href="#">75%</a>
                        <a href="#">50%</a>
                        <a href="#">25%</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bdh-centre">
                  <label for="">총액</label>
                  <input type="text" value="0 KRW" />
                </div>
                <div>
                  <div class="bdh-equal">
                    <button>초기화</button>
                  </div>
                  <div class="bdh-equal">
                     <button>매수</button>
                  </div>
                </div>
                <div class="min-order-text">
                  <div class="bdh-left">
                    최소주문금액
                  </div>
                  <div class="bdh-right">
                    500 KRW
                  </div>
                </div>
                 <div class="fees-text">
                  <div class="bdh-left">
                    수수료(부가세포함)
                  </div>
                  <div class="bdh-right">
                    0.05%
                  </div>
                </div>
                <div class="bdh-last">
                  <button>호가 주문</button>
                </div>
              </div>
            </div>
            <div class="order-list-holder" v-if="choosen ==='미체결'">
                <div class="orderlist">
                  <div class="orderlist-l">미체결 주문(1)</div>
                  <div class="orderlist-r">
                    <a href="">전체보기</a>
                  </div>
                </div>
                <div class="orderlist-detail">
                  <div class="list-data">
                    <div class="input-holder">
                      <input type="checkbox" class="option-input radio" />
                    </div>
                    <ul>
                      <li class="blue">매도</li>
                      <li class="align-right gray">04.16 10:01:56</li>
                      <li class="gray">주문가격</li>
                      <li class="align-right">200,000 KRW</li>
                      <li class="gray">주문수량</li>
                      <li class="align-right">0.58236151 ETH</li>
                      <li class="gray">미체결량</li>
                      <li class="align-right">0.58236151 ETH</li>
                    </ul>
                  </div>
                  <div class="list-data">
                    <div class="input-holder">
                      <input type="checkbox" class="option-input radio" />
                    </div>
                    <ul>
                      <li class="red">매도</li>
                      <li class="align-right gray">04.16 10:01:56</li>
                      <li class="gray">주문가격</li>
                      <li class="align-right">200,000 KRW</li>
                      <li class="gray">주문수량</li>
                      <li class="align-right">0.58236151 ETH</li>
                      <li class="gray">미체결량</li>
                      <li class="align-right">0.58236151 ETH</li>
                    </ul>
                  </div>
                  <div class="list-data">
                    <div class="input-holder">
                      <input type="checkbox" class="option-input radio" />
                    </div>
                    <ul>
                      <li class="blue">매도</li>
                      <li class="align-right gray">04.16 10:01:56</li>
                      <li class="gray">주문가격</li>
                      <li class="align-right">200,000 KRW</li>
                      <li class="gray">주문수량</li>
                      <li class="align-right">0.58236151 ETH</li>
                      <li class="gray">미체결량</li>
                      <li class="align-right">0.58236151 ETH</li>
                    </ul>
                  </div>
                  <div class="list-data">
                    <div class="input-holder">
                      <input type="checkbox" class="option-input radio" />
                    </div>
                    <ul>
                      <li class="red">매도</li>
                      <li class="align-right gray">04.16 10:01:56</li>
                      <li class="gray">주문가격</li>
                      <li class="align-right">200,000 KRW</li>
                      <li class="gray">주문수량</li>
                      <li class="align-right">0.58236151 ETH</li>
                      <li class="gray">미체결량</li>
                      <li class="align-right">0.58236151 ETH</li>
                    </ul>
                  </div>
                  <div class="list-data">
                    <div class="input-holder">
                      <input type="checkbox" class="option-input radio" />
                    </div>
                    <ul>
                      <li class="blue">매도</li>
                      <li class="align-right gray">04.16 10:01:56</li>
                      <li class="gray">주문가격</li>
                      <li class="align-right">200,000 KRW</li>
                      <li class="gray">주문수량</li>
                      <li class="align-right">0.58236151 ETH</li>
                      <li class="gray">미체결량</li>
                      <li class="align-right">0.58236151 ETH</li>
                    </ul>
                  </div>
                  <div class="list-data">
                    <div class="input-holder">
                      <input type="checkbox" class="option-input radio" />
                    </div>
                    <ul>
                      <li class="red">매도</li>
                      <li class="align-right gray">04.16 10:01:56</li>
                      <li class="gray">주문가격</li>
                      <li class="align-right">200,000 KRW</li>
                      <li class="gray">주문수량</li>
                      <li class="align-right">0.58236151 ETH</li>
                      <li class="gray">미체결량</li>
                      <li class="align-right">0.58236151 ETH</li>
                    </ul>
                  </div>
                  <div class="list-data">
                    <div class="input-holder">
                      <input type="checkbox" class="option-input radio" />
                    </div>
                    <ul>
                      <li class="blue">매도</li>
                      <li class="align-right gray">04.16 10:01:56</li>
                      <li class="gray">주문가격</li>
                      <li class="align-right">200,000 KRW</li>
                      <li class="gray">주문수량</li>
                      <li class="align-right">0.58236151 ETH</li>
                      <li class="gray">미체결량</li>
                      <li class="align-right">0.58236151 ETH</li>
                    </ul>
                  </div>
                  <div class="list-data">
                    <div class="input-holder">
                      <input type="checkbox" class="option-input radio" />
                    </div>
                    <ul>
                      <li class="red">매도</li>
                      <li class="align-right gray">04.16 10:01:56</li>
                      <li class="gray">주문가격</li>
                      <li class="align-right">200,000 KRW</li>
                      <li class="gray">주문수량</li>
                      <li class="align-right">0.58236151 ETH</li>
                      <li class="gray">미체결량</li>
                      <li class="align-right">0.58236151 ETH</li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstLink',
  data () {
    return {
      choosen: '매수'
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '~scss/newtrading/firstlink.scss';
</style>
