<template>
  <!-- coin info -->
  <div class="app-tradingcoininfo">
   <div id="app-trading-coininfo-holder">
     <div id="app-trading-coininfo-content">
       <span>
         <img src="~img/left-arrow24x24.png" alt="Gobit trading coin information left arrow" class="img-fluid">
       </span>
       <span>
         <h1 id="trading-coininfo-value-text-1" class="mb-0">
           190,150
         </h1>
         <span id="trading-coininfo-value-text-1-span">
           <h6 class="mb-0 font-weight-bold">
             전일대비
           </h6>
           <h6 class="mb-0 rt">
             1.88%
           </h6>
           <h6 class="mb-0 rt">
             <img src="~img/dup_rt16x16.png" alt="Gobit trading coin information dropup arrow icon" class="img-fluid">
             3,500
           </h6>
         </span>
       </span>
       <span>
         <ul class="list-inline mx-0 my-0">
           <li class="list-inline-item mr-0">
             고가
             <span>
               (KRW)
             </span>
           </li>
           <li class="list-inline-item mr-0 rt">
             6,243,000
           </li>
         </ul>
         <ul class="list-inline mx-0 my-0">
           <li class="list-inline-item mr-0">
             저가
             <span>
               (KRW)
             </span>
           </li>
           <li class="list-inline-item mr-0 bt">
             5,950,000
           </li>
         </ul>
       </span>
       <span>
         <img src="~img/right-arrow24x24.png" alt="Gobit trading coin information right arrow" class="img-fluid">
       </span>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'TradingCoinInfo'
}
</script>

<style lang='scss' scoped>
  @import '~scss/trading/coininfo.scss';
</style>
