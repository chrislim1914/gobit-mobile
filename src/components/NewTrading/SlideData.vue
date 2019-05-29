<template>
  <div class="app-slidedata">
    <div class="slidedata-container">
      <div class="nav-btn">
        <button class="left">
          <img src="~img/left-arrow32x32.png" alt="left arrow icon">
        </button>
        <button class="right">
          <img src="~img/right-arrow32x32.png" alt="right arrow icon">
        </button>
      </div>
      <div class="slide-data-holder">
        <ul>
          <li>
            <h1>190,150</h1>
            <p>
              전일대비
              <span>1.88%</span>
              <img src="~img/dup_rt16x16.png" alt="Gobit trading coin information dropup arrow icon" class="img-fluid">
                3,500
            </p>
          </li>
          <li>
            <p>고가<span>(KRW)</span></p>
            <p class="paint-it-red">6,456,123</p>
            <p>고가<span>(KRW)</span></p>
            <p class="paint-it-blue">6,456,000</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlideData'
}
</script>

<style lang='scss' scoped>
  @import '~scss/newtrading/slidedata.scss';
</style>
