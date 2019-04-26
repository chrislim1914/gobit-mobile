<template>
  <!-- banner -->
  <div class="app-banner fixed-bottom" :class="{'d-none': !isBannerShown, 'mb-65': isNoticeShown, 'mb-0': !isNoticeShown}">
    <div class="container-fluid">
      <div id="banner-row" class="row">
        <div class="col-1 mt-3 text-right">
          <i class="fa-2x fa fa-bolt text-white"></i>
        </div>
        <div class="col-4">
          <div class="row">
            <div class="col-12">
              <h6 id="banner-symbol-1" class="text-white">
                비트코인 캐시
                <span id="banner-badge" class="badge badge-pill pl-2">견본</span>
              </h6>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <ul class="list-inline">
                <li class="list-inline-item">
                  <h6 id="banner-symbol-2" class="text-white">
                    BCH/KRW
                  </h6>
                </li>
                <li class="list-inline-item">
                  <h6 id="banner-divider">|</h6>
                </li>
                <li class="list-inline-item">
                  <h6 id="banner-number-1">
                    2.18
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-6 mt-3 text-right">
          <ul class="list-inline">
            <li class="list-inline-item">
              <h6 class="text-white">
                비트코인 캐시
              </h6>
            </li>
            <li class="list-inline-item">
              <h6 id="banner-divider">|</h6>
            </li>
            <li class="list-inline-item">
              <h6 id="banner-number-2">43 견본</h6>
            </li>
          </ul>
        </div>
        <div class="col-1 mt-3 text-center">
          <a id="banner-close" href="#" @click="hideBanner">
            <i class="material-icons">close</i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalBanner',
  props: ['isBannerShown', 'isNoticeShown'],
  methods: {
    hideBanner () {
      this.$emit('close-banner', true)
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '~scss/banner/base.scss';
</style>
